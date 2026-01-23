import { expect } from 'vitest';
import './styles/main.scss';
import './test/test-styles.css';
import '@angular/localize/init';
import { locators, Locator } from 'vitest/browser';

expect.extend({
	toHaveCssClass(actual: HTMLElement, className: string) {
		const { isNot } = this;
		return {
			pass: actual.classList.contains(className),
			message: () => `Expected ${actual.outerHTML} ${isNot ? 'not ' : ''}to contain the CSS class "${className}"`,
		};
	},
});

locators.extend({
	// Not recommended by vitest, but can be really useful at least to transition
	// from jasmine tests
	getByCss(selector: string) {
		return selector;
	},
});

declare module 'vitest/browser' {
	interface LocatorSelectors {
		// if the custom method returns a string, it will be converted into a locator
		// if it returns anything else, then it will be returned as usual
		getByCss(selector: string): Locator;
	}
}

