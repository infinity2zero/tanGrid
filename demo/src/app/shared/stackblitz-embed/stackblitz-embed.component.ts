import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnChanges, SimpleChanges, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import sdk, { Project } from '@stackblitz/sdk';
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

  @ViewChild('embedContainer') embedContainer!: ElementRef<HTMLDivElement>;

  private stackBlitzService = inject(StackBlitzService);
  private vm: any = null;

  ngAfterViewInit(): void {
    this.embedProject();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes['componentName'] || changes['files']) && !changes['componentName'].isFirstChange()) {
      this.embedProject();
    }
  }

  ngOnDestroy(): void {
    // No explicit destroy method in SDK, but cleaning up references
    this.vm = null;
  }

  private embedProject(): void {
    if (!this.embedContainer) return;

    // Use private method from StackBlitzService to get project config
    // We need to slightly adapt the service to expose project config generation
    // or duplicate logic. Duplicating logic for now to avoid breaking changes to service
    // but ideally we should refactor service to separate config generation.
    
    const project = this.createProjectConfig();
    
    sdk.embedProject(this.embedContainer.nativeElement, project, {
      openFile: `src/app/${this.toKebabCase(this.componentName)}.component.ts`,
      height: 600,
      theme: 'light',
      view: 'preview' // 'preview', 'editor' or 'both'
    }).then(vm => {
      this.vm = vm;
    });
  }

  private createProjectConfig(): Project {
    return {
      title: this.title,
      description: this.description,
      template: 'angular-cli',
      files: {
        'src/index.html': `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>tanGrid Demo</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
  <app-root></app-root>
</body>
</html>`,
        'src/main.ts': `
import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ${this.componentName} } from './app/${this.toKebabCase(this.componentName)}.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [${this.componentName}],
  template: \`
    <div style="padding: 20px;">
      <h1>${this.title}</h1>
      <${this.toKebabCase(this.componentName)}></${this.toKebabCase(this.componentName)}>
    </div>
  \`
})
export class App {}

bootstrapApplication(App);
`,
        [`src/app/${this.toKebabCase(this.componentName)}.component.ts`]: this.files.ts,
        [`src/app/${this.toKebabCase(this.componentName)}.component.html`]: this.files.html,
        ...(this.files.css
          ? { [`src/app/${this.toKebabCase(this.componentName)}.component.css`]: this.files.css }
          : {}),
        'src/styles.css': `
:root {
  --ngs-primary: #3b82f6;
  --ngs-primary-fg: #ffffff;
  --ngs-bg-primary: #ffffff;
  --ngs-text-primary: #1f2937;
  --ngs-border-color: #e5e7eb;
}
body { font-family: system-ui, -apple-system, sans-serif; }
`,
      },
      dependencies: {
        '@angular/core': '^18.0.0',
        '@angular/common': '^18.0.0',
        '@angular/platform-browser': '^18.0.0',
        '@angular/compiler': '^18.0.0',
        '@angular/forms': '^18.0.0',
        '@angular/router': '^18.0.0',
        'rxjs': '^7.8.0',
        'tslib': '^2.3.0',
        'zone.js': '~0.14.0',
        'tangrid': 'latest',
        '@tanstack/angular-table': '^8.0.0',
      },
    };
  }

  private toKebabCase(str: string): string {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
      .replace(/-component$/, '');
  }
}
