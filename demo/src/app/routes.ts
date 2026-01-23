import { Routes } from '@angular/router';

export const ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
	},
	{
		path: 'docs',
		loadComponent: () => import('./layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
		children: [
			{
				path: '',
				redirectTo: 'getting-started',
				pathMatch: 'full',
			},
			{
				path: 'getting-started',
				loadComponent: () => import('./pages/docs/getting-started/getting-started.component').then((m) => m.GettingStartedComponent),
			},
			{
				path: 'core-concepts',
				loadComponent: () => import('./pages/docs/core-concepts/core-concepts.component').then((m) => m.CoreConceptsComponent),
			},
			{
				path: 'features',
				loadComponent: () => import('./pages/docs/features/features.component').then((m) => m.FeaturesComponent),
			},
			{
				path: 'theming',
				loadComponent: () => import('./pages/docs/theming/theming.component').then((m) => m.ThemingComponent),
			},
			{
				path: 'api',
				loadComponent: () => import('./pages/docs/api/api.component').then((m) => m.ApiComponent),
			},
			{
				path: 'recipes',
				loadComponent: () => import('./pages/docs/recipes/recipes.component').then((m) => m.RecipesComponent),
			},
		],
	},
	{
		path: 'demo',
		loadComponent: () => import('./layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
		children: [
			{
				path: '',
				redirectTo: 'basic',
				pathMatch: 'full',
			},
			{
				path: 'basic',
				loadComponent: () => import('./pages/demo/features/basic/basic-feature.component').then((m) => m.BasicFeatureComponent),
			},
			{
				path: 'sorting',
				loadComponent: () => import('./pages/demo/features/sorting/sorting-feature.component').then((m) => m.SortingFeatureComponent),
			},
			{
				path: 'pagination',
				loadComponent: () => import('./pages/demo/features/pagination/pagination-feature.component').then((m) => m.PaginationFeatureComponent),
			},
			{
				path: 'search',
				loadComponent: () => import('./pages/demo/features/search/search-feature.component').then((m) => m.SearchFeatureComponent),
			},
			{
				path: 'selection',
				loadComponent: () => import('./pages/demo/features/selection/selection-feature.component').then((m) => m.SelectionFeatureComponent),
			},
			{
				path: 'custom-cells',
				loadComponent: () => import('./pages/demo/features/custom-cells/custom-cells-feature.component').then((m) => m.CustomCellsFeatureComponent),
			},
			{
				path: 'variants',
				loadComponent: () => import('./pages/demo/features/variants/variants-feature.component').then((m) => m.VariantsFeatureComponent),
			},
			{
				path: 'loading',
				loadComponent: () => import('./pages/demo/features/loading/loading-feature.component').then((m) => m.LoadingFeatureComponent),
			},
			{
				path: 'server-side-data',
				loadComponent: () => import('./pages/demo/features/server-side-data/server-side-data-feature.component').then((m) => m.ServerSideDataFeatureComponent),
			},
			{
				path: 'empty-state',
				loadComponent: () => import('./pages/demo/features/empty-state/empty-state-feature.component').then((m) => m.EmptyStateFeatureComponent),
			},
			{
				path: 'column-width',
				loadComponent: () => import('./pages/demo/features/column-width/column-width-feature.component').then((m) => m.ColumnWidthFeatureComponent),
			},
			{
				path: 'column-alignment',
				loadComponent: () => import('./pages/demo/features/column-alignment/column-alignment-feature.component').then((m) => m.ColumnAlignmentFeatureComponent),
			},
			{
				path: 'row-events',
				loadComponent: () => import('./pages/demo/features/row-events/row-events-feature.component').then((m) => m.RowEventsFeatureComponent),
			},
			{
				path: 'column-visibility',
				loadComponent: () => import('./pages/demo/features/column-visibility/column-visibility-feature.component').then((m) => m.ColumnVisibilityFeatureComponent),
			},
			{
				path: 'column-resizing',
				loadComponent: () => import('./pages/demo/features/column-resizing/column-resizing-feature.component').then((m) => m.ColumnResizingFeatureComponent),
			},
			{
				path: 'column-ordering',
				loadComponent: () => import('./pages/demo/features/column-ordering/column-ordering-feature.component').then((m) => m.ColumnOrderingFeatureComponent),
			},
			{
				path: 'column-filtering',
				loadComponent: () => import('./pages/demo/features/column-filtering/column-filtering-feature.component').then((m) => m.ColumnFilteringFeatureComponent),
			},
			{
				path: 'custom-headers',
				loadComponent: () => import('./pages/demo/features/custom-headers/custom-headers-feature.component').then((m) => m.CustomHeadersFeatureComponent),
			},
			{
				path: 'virtual-scrolling',
				loadComponent: () => import('./pages/demo/features/virtual-scrolling/virtual-scrolling-feature.component').then((m) => m.VirtualScrollingFeatureComponent),
			},
			{
				path: 'column-pinning',
				loadComponent: () => import('./pages/demo/features/column-pinning/column-pinning-feature.component').then((m) => m.ColumnPinningFeatureComponent),
			},
			{
				path: 'row-expansion',
				loadComponent: () => import('./pages/demo/features/row-expansion/row-expansion-feature.component').then((m) => m.RowExpansionFeatureComponent),
			},
			{
				path: 'inline-editing',
				loadComponent: () => import('./pages/demo/features/inline-editing/inline-editing-feature.component').then((m) => m.InlineEditingFeatureComponent),
			},
			{
				path: 'export',
				loadComponent: () => import('./pages/demo/features/export/export-feature.component').then((m) => m.ExportFeatureComponent),
			},
			{
				path: 'themes',
				loadComponent: () => import('./pages/demo/features/themes/themes-feature.component').then((m) => m.ThemesFeatureComponent),
			},
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];
