import { Component, Input, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackBlitzService } from '../../services/stackblitz.service';
import { StackBlitzEmbedComponent } from '../stackblitz-embed/stackblitz-embed.component';

@Component({
	selector: 'ngsd-code-viewer',
	standalone: true,
	imports: [CommonModule, StackBlitzEmbedComponent],
	template: `
		<div class="code-viewer">
			<div class="code-viewer__header">
				<div class="code-viewer__tabs">
					<button 
						class="code-viewer__tab" 
						[class.code-viewer__tab--active]="!showEmbed()"
						(click)="showEmbed.set(false)"
					>
						Code
					</button>
					<button 
						class="code-viewer__tab" 
						[class.code-viewer__tab--active]="showEmbed()"
						(click)="showEmbed.set(true)"
					>
						StackBlitz
					</button>
				</div>
				
				@if (!showEmbed()) {
					<div class="code-viewer__actions">
						<button
							type="button"
							class="code-viewer__action-btn"
							(click)="openStackBlitz()"
							title="Open in new window"
						>
							<span class="code-viewer__action-icon mdi mdi-open-in-new"></span>
							<span>Open New</span>
						</button>
						<button
							type="button"
							class="code-viewer__action-btn"
							(click)="copyCode()"
							[attr.aria-label]="copied() ? 'Copied!' : 'Copy code'"
						>
							@if (copied()) {
								<span class="code-viewer__action-icon mdi mdi-check"></span>
								<span>Copied!</span>
							} @else {
								<span class="code-viewer__action-icon mdi mdi-content-copy"></span>
								<span>Copy</span>
							}
						</button>
					</div>
				}
			</div>
			
			<div class="code-viewer__content">
				@if (showEmbed()) {
					<ngsd-stackblitz-embed
						[componentName]="componentName"
						[files]="parsedFiles()"
						[title]="title"
					></ngsd-stackblitz-embed>
				} @else {
					<pre><code>{{ code }}</code></pre>
				}
			</div>
		</div>
	`,
	styles: [
		`
			.code-viewer {
				border: 1px solid var(--ngs-border-color);
				border-radius: var(--ngs-border-radius);
				overflow: hidden;
				background: var(--ngs-bg-secondary);
				margin-top: var(--ngs-spacing-md);
			}

			.code-viewer__header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 var(--ngs-spacing-md);
				background: var(--ngs-bg-tertiary);
				border-bottom: 1px solid var(--ngs-border-color);
				height: 48px;
			}

			.code-viewer__tabs {
				display: flex;
				height: 100%;
			}

			.code-viewer__tab {
				display: flex;
				align-items: center;
				padding: 0 var(--ngs-spacing-lg);
				background: transparent;
				border: none;
				border-bottom: 2px solid transparent;
				color: var(--ngs-text-secondary);
				font-size: var(--ngs-font-size-sm);
				font-weight: var(--ngs-font-weight-medium);
				cursor: pointer;
				height: 100%;
				transition: var(--ngs-transition-base);

				&:hover {
					color: var(--ngs-text-primary);
					background: rgba(0,0,0,0.05);
				}

				&.code-viewer__tab--active {
					color: var(--ngs-primary);
					border-bottom-color: var(--ngs-primary);
					background: var(--ngs-bg-primary);
				}
			}

			.code-viewer__label {
				font-size: var(--ngs-font-size-sm);
				font-weight: var(--ngs-font-weight-medium);
				color: var(--ngs-text-secondary);
				text-transform: uppercase;
				letter-spacing: 0.5px;
			}

			.code-viewer__actions {
				display: flex;
				gap: var(--ngs-spacing-sm);
				margin-left: auto;
			}

			.code-viewer__action-btn {
				display: flex;
				align-items: center;
				gap: var(--ngs-spacing-xs);
				padding: var(--ngs-spacing-xs) var(--ngs-spacing-sm);
				background: transparent;
				border: 1px solid var(--ngs-border-color);
				border-radius: var(--ngs-border-radius-sm);
				cursor: pointer;
				font-size: var(--ngs-font-size-xs);
				color: var(--ngs-text-secondary);
				transition: var(--ngs-transition-base);

				&:hover {
					background: var(--ngs-bg-primary);
					border-color: var(--ngs-primary);
					color: var(--ngs-primary);
				}
			}

			.code-viewer__action-icon {
				font-size: var(--ngs-font-size-sm);
			}

			.code-viewer__content {
				overflow-x: auto;
				background: var(--ngs-bg-primary);
			}

			.code-viewer__content pre {
				margin: 0;
				padding: var(--ngs-spacing-md);
				font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
				font-size: var(--ngs-font-size-sm);
				line-height: 1.6;
				color: var(--ngs-text-primary);
				overflow-x: auto;
			}

			.code-viewer__content code {
				font-family: inherit;
				font-size: inherit;
			}
		`,
	],
})
export class CodeViewerComponent {
	@Input({ required: true }) code = '';
	@Input() componentName = 'DemoComponent';
	@Input() title = 'Demo';

	private stackBlitzService = inject(StackBlitzService);
	copied = signal(false);
	showEmbed = signal(false);

	parsedFiles = () => {
		// Simple parsing strategy based on common demo format
		let html = '';
		let ts = '';

		if (this.code.includes('// TS')) {
			const parts = this.code.split('// TS');
			const htmlPart = parts[0].replace('// HTML', '').trim();
			ts = parts[1].trim();
			html = htmlPart;
		} else {
			// Fallback if no delimiter found
			ts = this.code;
			html = '<!-- See TS file for implementation -->';
		}
		
		return { html, ts };
	};

	copyCode(): void {
		navigator.clipboard.writeText(this.code).then(() => {
			this.copied.set(true);
			setTimeout(() => {
				this.copied.set(false);
			}, 2000);
		});
	}

	openStackBlitz(): void {
		const files = this.parsedFiles();
		this.stackBlitzService.openProject(this.componentName, files, this.title);
	}
}
