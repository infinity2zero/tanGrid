import { Component, signal, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';

interface NavItem {
	path: string;
	label: string;
	icon?: string;
}

interface NavGroup {
	title: string;
	items: NavItem[];
}

@Component({
	selector: 'ngsd-main-layout',
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
	private router = inject(Router);
	
	sidebarCollapsed = signal(false);
	mobileSidebarOpen = signal(false);
	searchText = signal('');
	
	// Navigation data
	private demoNavGroups: NavGroup[] = [
		{
			title: 'Core Features',
			items: [
				{ path: 'basic', label: 'Basic Table', icon: 'mdi-table' },
				{ path: 'sorting', label: 'Sorting', icon: 'mdi-sort' },
				{ path: 'pagination', label: 'Pagination', icon: 'mdi-file-document-outline' },
				{ path: 'search', label: 'Global Search', icon: 'mdi-magnify' },
				{ path: 'selection', label: 'Row Selection', icon: 'mdi-checkbox-marked-outline' },
			]
		},
		{
			title: 'Columns',
			items: [
				{ path: 'column-width', label: 'Column Width', icon: 'mdi-ruler' },
				{ path: 'column-alignment', label: 'Column Alignment', icon: 'mdi-format-align-center' },
				{ path: 'column-visibility', label: 'Column Visibility', icon: 'mdi-eye-outline' },
				{ path: 'column-resizing', label: 'Column Resizing', icon: 'mdi-arrow-expand-horizontal' },
				{ path: 'column-ordering', label: 'Column Ordering', icon: 'mdi-swap-horizontal' },
				{ path: 'column-filtering', label: 'Column Filtering', icon: 'mdi-filter-outline' },
				{ path: 'column-pinning', label: 'Column Pinning', icon: 'mdi-pin-outline' },
				{ path: 'custom-headers', label: 'Custom Headers', icon: 'mdi-clipboard-text-outline' },
			]
		},
		{
			title: 'Rows & Cells',
			items: [
				{ path: 'custom-cells', label: 'Custom Cells', icon: 'mdi-palette-outline' },
				{ path: 'row-events', label: 'Row Events', icon: 'mdi-mouse' },
				{ path: 'row-expansion', label: 'Row Expansion', icon: 'mdi-folder-outline' },
				{ path: 'inline-editing', label: 'Inline Editing', icon: 'mdi-pencil-outline' },
			]
		},
		{
			title: 'Data & States',
			items: [
				{ path: 'loading', label: 'Loading States', icon: 'mdi-timer-sand' },
				{ path: 'server-side-data', label: 'Server-side Data', icon: 'mdi-server-network' },
				{ path: 'empty-state', label: 'Empty State', icon: 'mdi-inbox-remove-outline' },
				{ path: 'export', label: 'Export', icon: 'mdi-download' },
				{ path: 'virtual-scrolling', label: 'Virtual Scrolling', icon: 'mdi-flash-outline' },
			]
		},
		{
			title: 'Theming',
			items: [
				{ path: 'themes', label: 'Themes', icon: 'mdi-palette' },
				{ path: 'variants', label: 'Table Variants', icon: 'mdi-view-dashboard-variant-outline' },
			]
		}
	];

	private docsNavGroups: NavGroup[] = [
		{
			title: 'Documentation',
			items: [
				{ path: 'getting-started', label: 'Getting Started', icon: 'mdi-rocket-launch-outline' },
				{ path: 'core-concepts', label: 'Core Concepts', icon: 'mdi-brain' },
				{ path: 'features', label: 'Features Guide', icon: 'mdi-star-outline' },
				{ path: 'theming', label: 'Theming & Customization', icon: 'mdi-palette-swatch-outline' },
				{ path: 'api', label: 'API Reference', icon: 'mdi-book-open-variant' },
				{ path: 'recipes', label: 'Recipes / Patterns', icon: 'mdi-chef-hat' },
			]
		}
	];

	currentSection = signal<'demo' | 'docs'>('demo');

	constructor() {
		// Initialize section based on current URL
		this.updateSection(this.router.url);

		// Listen to route changes
		this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe((event: NavigationEnd) => {
			this.updateSection(event.urlAfterRedirects);
		});
	}

	private updateSection(url: string) {
		if (url.startsWith('/docs')) {
			this.currentSection.set('docs');
		} else {
			this.currentSection.set('demo');
		}
	}
	
	currentNavGroups = computed(() => {
		return this.currentSection() === 'docs' ? this.docsNavGroups : this.demoNavGroups;
	});

	currentBaseRoute = computed(() => {
		return this.currentSection() === 'docs' ? '/docs' : '/demo';
	});

	sidebarTitle = computed(() => {
		return this.currentSection() === 'docs' ? 'Documentation' : 'Features';
	});

	searchPlaceholder = computed(() => {
		return this.currentSection() === 'docs' ? 'Search docs...' : 'Search features...';
	});
	
	filteredNavGroups = computed(() => {
		const text = this.searchText().toLowerCase();
		const groups = this.currentNavGroups();
		
		if (!text) return groups;
		
		return groups.map(group => ({
			...group,
			items: group.items.filter(item => 
				item.label.toLowerCase().includes(text) || 
				item.path.toLowerCase().includes(text)
			)
		})).filter(group => group.items.length > 0);
	});

	toggleSidebar() {
		this.sidebarCollapsed.set(!this.sidebarCollapsed());
	}

	toggleMobileSidebar() {
		this.mobileSidebarOpen.set(!this.mobileSidebarOpen());
	}

	closeMobileSidebar() {
		this.mobileSidebarOpen.set(false);
	}
}
