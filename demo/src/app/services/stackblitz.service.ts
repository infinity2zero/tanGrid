import { Injectable } from '@angular/core';
import sdk, { Project } from '@stackblitz/sdk';

@Injectable({
	providedIn: 'root',
})
export class StackBlitzService {
	/**
	 * Open the project in StackBlitz
	 * Note: This requires the tangrid package to be available on NPM.
	 * If you are testing locally without publishing, the StackBlitz demo will fail to resolve the library.
	 */
	openProject(
		componentName: string,
		files: { html: string; ts: string; css?: string },
		title: string = 'TanGrid Demo',
		description: string = 'TanGrid library demo'
	) {
		const project: Project = {
			title,
			description,
			template: 'angular-cli',
			files: {
				'src/index.html': `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>TanGrid Demo</title>
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
import { ${componentName} } from './app/${this.toKebabCase(componentName)}.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [${componentName}],
  template: \`
    <div style="padding: 20px;">
      <h1>${title}</h1>
      <${this.toKebabCase(componentName)}></${this.toKebabCase(componentName)}>
    </div>
  \`
})
export class App {}

bootstrapApplication(App);
`,
				[`src/app/${this.toKebabCase(componentName)}.component.ts`]: files.ts,
				[`src/app/${this.toKebabCase(componentName)}.component.html`]: files.html,
				...(files.css
					? { [`src/app/${this.toKebabCase(componentName)}.component.css`]: files.css }
					: {}),
				// Global styles to match the demo theme roughly
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
				// Crucial: This assumes the library is published.
				// If not, we might need to point to a tarball or use a different strategy.
				'tangrid': 'latest',
				'@tanstack/angular-table': '^8.0.0',
			},
		};

		sdk.openProject(project, { openFile: `src/app/${this.toKebabCase(componentName)}.component.ts` });
	}

	private toKebabCase(str: string): string {
		return str
			.replace(/([a-z])([A-Z])/g, '$1-$2')
			.replace(/[\s_]+/g, '-')
			.toLowerCase()
			.replace(/-component$/, ''); // Remove -component suffix if present to avoid double naming
	}
}
