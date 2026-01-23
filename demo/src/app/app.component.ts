import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgsThemeService } from 'tangrid';
import { TableThemeService, TableTheme } from './services/table-theme.service';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'ngsd-root',
	standalone: true,
	imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	private themeService = inject(NgsThemeService);
	private tableThemeService = inject(TableThemeService);
	private router = inject(Router);
	
	theme = this.themeService.theme;
	tableTheme = this.tableThemeService.theme;
	showThemeSelector = signal(false);

	tableThemes: { value: TableTheme; label: string }[] = [
		{ value: 'default', label: 'Default' },
		{ value: 'material', label: 'Material' },
		{ value: 'bootstrap', label: 'Bootstrap' },
		{ value: 'ant', label: 'Ant Design' },
		{ value: 'ant-alt', label: 'Ant Design Alt' },
	];

	constructor() {
		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe((event: NavigationEnd) => {
			this.showThemeSelector.set(event.urlAfterRedirects.startsWith('/demo'));
		});
	}

	toggleTheme() {
		this.themeService.toggleTheme();
	}

	onTableThemeChange(event: Event): void {
		const select = event.target as HTMLSelectElement;
		this.tableThemeService.setTheme(select.value as TableTheme);
	}
}
