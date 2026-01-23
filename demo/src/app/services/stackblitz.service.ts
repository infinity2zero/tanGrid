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
	getProjectConfig(
		componentName: string,
		files: { html: string; ts: string; css?: string },
		title: string = 'TanGrid Demo',
		description: string = 'TanGrid library demo',
		componentSelector?: string
	): Project {
		// Validate inputs
		if (!componentName || !files || !files.ts) {
			throw new Error('Invalid component name or files provided');
		}

		// Prefer the actual class name from the TS code if we can detect it.
		// This fixes cases where componentName is a generic value like "DemoComponent"
		// but the code actually exports e.g. "PaginationFeatureComponent".
		const classMatch = files.ts.match(/export class (\w+)/);
		const effectiveComponentName = classMatch?.[1] || componentName;

		const tagName = this.toKebabCase(effectiveComponentName);
		// Use provided selector, or derive from tagName
		let selector = componentSelector || (tagName.startsWith('app-') ? tagName : `app-${tagName}`);

		// Ensure selector starts with app- (fixes mismatch where selector is inferred as 'product-table' but component is 'app-product-table')
		if (!selector.startsWith('app-')) {
			selector = `app-${selector}`;
		}

		// Keep the component code as-is (inline template)
		const componentTs = files.ts;

		// Build main.ts and ensure Zone.js is loaded (required by default Angular config)
		// Escape the title and selector to prevent issues inside the template string
		const safeTitle = title.replace(/`/g, '\\`').replace(/\${/g, '\\${');
		const safeSelector = selector.replace(/`/g, '\\`').replace(/\${/g, '\\${');

		const mainTsContent = `import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ${effectiveComponentName} } from './app/${tagName}.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [${effectiveComponentName}],
  template: '<div style="padding: 20px;"><h1>${safeTitle}</h1><${safeSelector}></${safeSelector}></div>'
})
export class App {}

bootstrapApplication(App);`;

		const projectFiles: Record<string, string> = {
			'index.html': `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>TanGrid Demo</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <app-root></app-root>
</body>
</html>`,
			'src/main.ts': mainTsContent,
			[`src/app/${tagName}.component.ts`]: componentTs,
		};

		// Only add HTML file if we have actual HTML content (not just a placeholder)
		if (files.html && files.html.trim() && !files.html.startsWith('<!--')) {
			projectFiles[`src/app/${tagName}.component.html`] = files.html;
		}

		// Add minimal global styles (no CSS tokens needed - let StackBlitz handle it)
		projectFiles['src/styles.css'] = `/* Global Styles */
html, body { height: 100%; margin: 0; }
body { font-family: Roboto, "Helvetica Neue", sans-serif; }`;

		return {
			title,
			description,
			template: 'angular-cli',
			files: projectFiles,
			dependencies: {
				'@angular/core': '^18.0.0',
				'@angular/common': '^18.0.0',
				'@angular/platform-browser': '^18.0.0',
				'@angular/compiler': '^18.0.0',
				'@angular/forms': '^18.0.0',
				'@angular/router': '^18.0.0',
				'@angular/cdk': '^18.0.0',
				'rxjs': '^7.8.0',
				'tslib': '^2.3.0',
				'zone.js': '~0.14.0',
				'tangrid': 'latest',
				'@tanstack/angular-table': '^8.0.0',
			},
		};
	}

	openProject(
		componentName: string,
		files: { html: string; ts: string; css?: string },
		title: string = 'TanGrid Demo',
		description: string = 'TanGrid library demo',
		componentSelector?: string
	) {
		const project = this.getProjectConfig(componentName, files, title, description, componentSelector);
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
