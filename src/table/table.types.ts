import { TemplateRef } from '@angular/core';

export type TanGridTheme = 'default' | 'material' | 'bootstrap' | 'ant' | 'ant-alt';

/**
 * Column definition for data table
 */
export interface TanGridColumn<T = any> {
	/**
	 * Unique identifier for the column
	 */
	id?: string;

	/**
	 * Column header label
	 */
	header: string | TemplateRef<any>;

	/**
	 * Accessor function or key path to get cell value
	 */
	accessorKey?: keyof T | string;

	/**
	 * Accessor function to get cell value (alternative to accessorKey)
	 */
	accessorFn?: (row: T) => any;

	/**
	 * Custom cell renderer template
	 */
	cell?: TemplateRef<{ $implicit: T; row: T }>;

	/**
	 * Whether column is sortable
	 * @default false
	 */
	sortable?: boolean;

	/**
	 * Whether column is filterable
	 * @default false
	 */
	filterable?: boolean;

	/**
	 * Custom filter function
	 */
	filterFn?: (row: T, filterValue: any) => boolean;

	/**
	 * Column width (CSS value)
	 */
	width?: string;

	/**
	 * Minimum column width (CSS value)
	 */
	minWidth?: string;

	/**
	 * Maximum column width (CSS value)
	 */
	maxWidth?: string;

	/**
	 * Whether column can be resized
	 * @default false
	 */
	resizable?: boolean;

	/**
	 * Whether column is visible
	 * @default true
	 */
	visible?: boolean;

	/**
	 * Column alignment
	 * @default 'left'
	 */
	align?: 'left' | 'center' | 'right';

	/**
	 * Custom header template
	 */
	headerTemplate?: TemplateRef<any>;

	/**
	 * Whether column cells are editable
	 * @default false
	 */
	editable?: boolean;

	/**
	 * Input type for editable cells (text, number, date, etc.)
	 * @default 'text'
	 */
	editType?: 'text' | 'number' | 'date' | 'email' | 'tel' | 'url';

	/**
	 * Whether column can be pinned.
	 * Can be boolean to enable/disable both directions,
	 * or 'left'/'right' to restrict to a specific direction.
	 * @default true (if global pinning enabled)
	 */
	pinnable?: boolean | 'left' | 'right';

	/**
	 * Validation function for cell edits
	 * Returns true if value is valid, false otherwise
	 */
	editValidator?: (value: any, row: T) => boolean | string;
}

/**
 * Table sorting state
 */
export interface TanGridSort {
	/**
	 * Column ID to sort by
	 */
	columnId: string;

	/**
	 * Sort direction
	 */
	direction: 'asc' | 'desc';
}

/**
 * Table pagination state
 */
export interface TanGridPagination {
	/**
	 * Current page (1-indexed)
	 */
	pageIndex: number;

	/**
	 * Number of items per page
	 */
	pageSize: number;

	/**
	 * Total number of items
	 */
	total?: number;
}

/**
 * Table filter state
 */
export interface TanGridFilter {
	/**
	 * Column ID to filter
	 */
	columnId: string;

	/**
	 * Filter value
	 */
	value: any;
}

/**
 * Row selection mode
 */
export type TanGridSelectionMode = 'single' | 'multiple' | 'none';

/**
 * Cell edit event
 */
export interface TanGridCellEdit<T = any> {
	/**
	 * Row data
	 */
	row: T;

	/**
	 * Row index
	 */
	rowIndex: number;

	/**
	 * Column ID
	 */
	columnId: string;

	/**
	 * Old value
	 */
	oldValue: any;

	/**
	 * New value
	 */
	newValue: any;
}

/**
 * Export format
 */
export type TanGridExportFormat = 'csv' | 'excel' | 'pdf';

/**
 * Export options
 */
export interface TanGridExportOptions {
	/**
	 * Export format
	 */
	format: TanGridExportFormat;

	/**
	 * Export only selected rows (if selection is enabled)
	 * @default false
	 */
	selectedOnly?: boolean;

	/**
	 * Export only current page
	 * @default false
	 */
	currentPageOnly?: boolean;

	/**
	 * Filename for the exported file
	 * @default 'table-export'
	 */
	filename?: string;

	/**
	 * Include headers in export
	 * @default true
	 */
	includeHeaders?: boolean;
}

