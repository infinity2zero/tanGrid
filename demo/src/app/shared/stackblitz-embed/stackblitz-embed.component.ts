import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnChanges, SimpleChanges, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackBlitzService } from '../../services/stackblitz.service';

@Component({
  selector: 'ngsd-stackblitz-embed',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stackblitz-embed">
      <div #embedContainer class="stackblitz-embed__container"></div>
    </div>
  `,
  styles: [`
    .stackblitz-embed {
      width: 100%;
      height: 600px;
      border: 1px solid var(--ngs-border-color);
      border-radius: var(--ngs-border-radius);
      overflow: hidden;
      background: var(--ngs-bg-secondary);
    }
    
    .stackblitz-embed__container {
      width: 100%;
      height: 100%;
    }
  `]
})
export class StackBlitzEmbedComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input({ required: true }) componentName = '';
  @Input({ required: true }) files: { html: string; ts: string; css?: string } = { html: '', ts: '' };
  @Input() title = 'tanGrid Demo';
  @Input() description = 'tanGrid library demo';
  @Input() selector?: string;

  @ViewChild('embedContainer', { static: false }) embedContainer!: ElementRef<HTMLDivElement>;

  private stackBlitzService = inject(StackBlitzService);
  private vm: any = null;
  private embedTimeout: any = null;

  ngAfterViewInit(): void {
    // Wait for next tick to ensure DOM is ready
    this.scheduleEmbed();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Only re-embed if view is initialized and inputs changed (not first change)
    if (this.embedContainer && (changes['componentName'] || changes['files'] || changes['selector'])) {
      const isFirstChange = changes['componentName']?.firstChange || changes['files']?.firstChange;
      if (!isFirstChange) {
        this.scheduleEmbed();
      }
    }
  }

  ngOnDestroy(): void {
    // Clear any pending embeds
    if (this.embedTimeout) {
      clearTimeout(this.embedTimeout);
    }
    // Clean up the embed container
    if (this.embedContainer?.nativeElement) {
      this.embedContainer.nativeElement.innerHTML = '';
    }
    this.vm = null;
  }

  private scheduleEmbed(): void {
    // Clear any pending embeds
    if (this.embedTimeout) {
      clearTimeout(this.embedTimeout);
    }
    // Schedule embed for next tick
    this.embedTimeout = setTimeout(() => {
      this.embedProject();
    }, 100);
  }

  private async embedProject(): Promise<void> {
    // Check if element is available
    if (!this.embedContainer?.nativeElement) {
      return;
    }

    const element = this.embedContainer.nativeElement;
    
    // Validate inputs
    if (!this.componentName || !this.files || !this.files.ts) {
      element.innerHTML = `
        <div style="padding: 20px; text-align: center; color: #dc3545;">
          <p>Invalid component configuration</p>
        </div>
      `;
      return;
    }

    try {
      const project = this.stackBlitzService.getProjectConfig(
        this.componentName,
        this.files,
        this.title,
        this.description,
        this.selector
      );
      
      const tagName = this.toKebabCase(this.componentName);

      // Clear previous content
      element.innerHTML = '';

      // Lazy-load StackBlitz SDK only when embedding (saves ~180KB from initial bundle)
      const { default: sdk } = await import('@stackblitz/sdk');

      // Embed the project
      sdk.embedProject(element, project, {
        openFile: `src/app/${tagName}.component.ts`,
        height: 600,
        theme: 'light',
        view: 'preview'
      }).then(vm => {
        this.vm = vm;
      }).catch(error => {
        element.innerHTML = `
          <div style="padding: 20px; text-align: center; color: #dc3545;">
            <p>Failed to load StackBlitz editor.</p>
            <p style="font-size: 0.875rem; color: #6c757d;">${error.message || 'Unknown error'}</p>
          </div>
        `;
      });
    } catch (error: any) {
      if (element) {
        element.innerHTML = `
          <div style="padding: 20px; text-align: center; color: #dc3545;">
            <p>Failed to create StackBlitz project.</p>
            <p style="font-size: 0.875rem; color: #6c757d;">${error.message || 'Unknown error'}</p>
          </div>
        `;
      }
    }
  }

  private toKebabCase(str: string): string {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
      .replace(/-component$/, '');
  }
}
