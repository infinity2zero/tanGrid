import { Injectable, signal, computed, effect } from '@angular/core';

export type NgsTheme = 'light' | 'dark' | 'auto';

/**
 * Theme service for managing application theme.
 * Supports light, dark, and auto (system preference) themes.
 */
@Injectable({ providedIn: 'root' })
export class NgsThemeService {
	private readonly STORAGE_KEY = 'ngs-theme';
	private readonly prefersDarkMedia = typeof window !== 'undefined' 
		? window.matchMedia('(prefers-color-scheme: dark)')
		: null;

	private systemTheme = signal<'light' | 'dark'>(
		this.prefersDarkMedia?.matches ? 'dark' : 'light'
	);

	private themeSignal = signal<NgsTheme>(
		(this.loadTheme() as NgsTheme) || 'auto'
	);

	/**
	 * Current theme signal (readonly)
	 */
	readonly theme = this.themeSignal.asReadonly();

	/**
	 * Computed actual theme (resolves 'auto' to system preference)
	 */
	readonly actualTheme = computed(() => {
		const theme = this.themeSignal();
		if (theme === 'auto') {
			return this.systemTheme();
		}
		return theme;
	});

	constructor() {
		// Apply theme changes to document
		effect(() => {
			const actual = this.actualTheme();
			if (typeof document !== 'undefined') {
				document.documentElement.setAttribute('data-ngs-theme', actual);
			}
		});

		// Listen to system theme changes
		if (this.prefersDarkMedia) {
			this.prefersDarkMedia.addEventListener('change', (event) => {
				this.systemTheme.set(event.matches ? 'dark' : 'light');
			});
		}
	}

	/**
	 * Set the theme
	 * @param theme - Theme to apply ('light', 'dark', or 'auto')
	 */
	setTheme(theme: NgsTheme): void {
		this.themeSignal.set(theme);
		this.saveTheme(theme);
	}

	/**
	 * Toggle between light and dark themes
	 */
	toggleTheme(): void {
		const current = this.themeSignal();
		if (current === 'auto') {
			// If auto, toggle to opposite of current system theme
			this.setTheme(this.systemTheme() === 'dark' ? 'light' : 'dark');
		} else {
			// Toggle between light and dark
			this.setTheme(current === 'dark' ? 'light' : 'dark');
		}
	}

	private loadTheme(): string | null {
		if (typeof localStorage === 'undefined') {
			return null;
		}
		return localStorage.getItem(this.STORAGE_KEY);
	}

	private saveTheme(theme: NgsTheme): void {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(this.STORAGE_KEY, theme);
		}
	}
}

