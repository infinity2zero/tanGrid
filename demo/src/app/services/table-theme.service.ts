import { Injectable, signal, effect } from '@angular/core';
import { TanGridTheme } from 'tangrid';

export type TableTheme = TanGridTheme;

@Injectable({
	providedIn: 'root',
})
export class TableThemeService {
	private readonly STORAGE_KEY = 'tan-grid-theme';
	
	private themeSignal = signal<TableTheme>(
		(this.loadTheme() as TableTheme) || 'default'
	);

	/**
	 * Current table theme signal (readonly)
	 */
	readonly theme = this.themeSignal.asReadonly();

	constructor() {
		// Save theme to localStorage when it changes
		effect(() => {
			this.saveTheme(this.themeSignal());
		});
	}

	/**
	 * Set the table theme
	 * @param theme - Theme to apply ('default', 'material', 'bootstrap', or 'ant')
	 */
	setTheme(theme: TableTheme): void {
		this.themeSignal.set(theme);
	}

	private loadTheme(): string | null {
		if (typeof localStorage === 'undefined') {
			return null;
		}
		return localStorage.getItem(this.STORAGE_KEY);
	}

	private saveTheme(theme: TableTheme): void {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(this.STORAGE_KEY, theme);
		}
	}
}

