import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	NgZone,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
	signal,
	TemplateRef,
	ViewEncapsulation,
	AfterViewInit,
	ViewChild,
	ElementRef,
	OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
	import { FormsModule } from '@angular/forms';
	// Use local provider to fix AfterRenderCallback error in @tanstack/angular-virtual
	import { injectVirtualizer } from './virtual-provider';
	import Sortable from 'sortablejs';
import {
	createAngularTable,
	FlexRenderDirective,
	getCoreRowModel,
	getExpandedRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type Row,
	type RowSelectionState,
} from '@tanstack/angular-table';
import type { Table, ColumnDef } from '@tanstack/table-core';
import {
	TanGridColumn,
	TanGridSort,
	TanGridPagination,
	TanGridFilter,
	TanGridSelectionMode,
	TanGridCellEdit,
	TanGridExportFormat,
	TanGridExportOptions,
	TanGridTheme,
} from './table.types';

/**
 * Data table component with sorting, filtering, pagination, and selection.
 * Wraps TanStack Table for Angular.
 */
@Component({
	selector: 'tan-grid',
	standalone: true,
	imports: [CommonModule, FormsModule, FlexRenderDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TanGrid<T = any> implements OnInit, OnChanges, AfterViewInit, OnDestroy {
	/**
	 * Table data array
	 */
	@Input() data: T[] = [];

	/**
	 * Column definitions
	 */
	@Input() columns: TanGridColumn<T>[] = [];

	/**
	 * Whether table is in loading state
	 * @default false
	 */
	@Input() loading = false;

	/**
	 * Whether table is striped
	 * @default false
	 */
	@Input() striped = false;

	/**
	 * Whether table has borders
	 * @default true
	 */
	@Input() bordered = true;

	/**
	 * Whether table is hoverable
	 * @default true
	 */
	@Input() hoverable = true;

	/**
	 * Whether table is compact
	 * @default true
	 */
	@Input() compact = true;

	/**
	 * Table theme
	 * @default 'default'
	 */
	@Input() theme: TanGridTheme = 'default';

	/**
	 * Selection mode
	 * @default 'none'
	 */
	@Input() selectionMode: TanGridSelectionMode = 'none';

	/**
	 * Selected row IDs
	 */
	@Input() selectedRowIds: string[] = [];

	/**
	 * Row ID accessor function
	 */
	@Input() rowIdFn: (row: T, index: number) => string = (row: T, index: number) => String(index);

	/**
	 * Pagination enabled
	 * @default true
	 */
	@Input() pagination = true;

	/**
	 * Initial page size
	 * @default 10
	 */
	@Input() pageSize = 10;

	/**
	 * Page size options
	 * @default [10, 20, 50, 100]
	 */
	@Input() pageSizeOptions = [10, 20, 50, 100];

	/**
	 * Pagination mode: 'client' | 'server'
	 * - 'client': Pagination is handled by TanStack Table (default)
	 * - 'server': Pagination is handled by the server, emits paginationChange event
	 * @default 'client'
	 */
	@Input() paginationMode: 'client' | 'server' = 'client';

	/**
	 * Total items (required for server-side pagination)
	 * @default 0
	 */
	@Input() totalItems = 0;

	/**
	 * Sorting enabled
	 * @default true
	 */
	@Input() sorting = true;

	/**
	 * Sorting mode: 'client' | 'server'
	 * - 'client': Sorting is handled by TanStack Table (default)
	 * - 'server': Sorting is handled by the server, emits sortChange event
	 * @default 'client'
	 */
	@Input() sortingMode: 'client' | 'server' = 'client';

	/**
	 * Filtering enabled
	 * @default true
	 */
	@Input() filtering = true;

	/**
	 * Filtering mode: 'client' | 'server'
	 * - 'client': Filtering is handled by TanStack Table (default)
	 * - 'server': Filtering is handled by the server, emits filterChange event
	 * @default 'client'
	 */
	@Input() filteringMode: 'client' | 'server' = 'client';

	/**
	 * Global search enabled
	 * @default false
	 */
	@Input() globalSearch = false;

	/**
	 * Show global search input
	 * @default true
	 */
	@Input() showGlobalSearchInput = true;

	/**
	 * Global filter value
	 */
	@Input() globalFilter = '';

	/**
	 * Empty state message
	 * @default 'No data available'
	 */
	@Input() emptyMessage = 'No data available';

	/**
	 * Loading message
	 * @default 'Loading...'
	 */
	@Input() loadingMessage = 'Loading...';

	/**
	 * Loading type: 'spinner' | 'placeholder' | 'template'
	 * @default 'spinner'
	 */
	@Input() loadingType: 'spinner' | 'placeholder' | 'template' = 'spinner';

	/**
	 * Number of placeholder rows to show when loadingType is 'placeholder'
	 * @default 5
	 */
	@Input() placeholderRows = 5;

	/**
	 * Enable virtual scrolling for large datasets
	 * Requires @angular/cdk to be installed
	 * @default false
	 */
	@Input() virtualScroll = false;

	/**
	 * Height of each row in pixels when virtual scrolling is enabled
	 * @default 48
	 */
	@Input() rowHeight = 48;

	/**
	 * Number of buffer rows to render outside the viewport
	 * Higher values provide smoother scrolling but use more memory
	 * @default 3
	 */
	@Input() virtualScrollBufferSize = 3;

	/**
	 * Maximum height of the virtual scroll viewport
	 * If not set, viewport will use available space
	 */
	@Input() virtualScrollViewportHeight?: number;

	/**
	 * Column IDs to pin to the left side
	 * These columns will remain visible when scrolling horizontally
	 */
	@Input() pinnedLeft: string[] = [];

	/**
	 * Column IDs to pin to the right side
	 * These columns will remain visible when scrolling horizontally
	 */
	@Input() pinnedRight: string[] = [];

	/**
	 * Whether to show column pinning UI (icons in headers)
	 * @default false
	 */
	@Input() enablePinning = false;

	/**
	 * Enable column reordering via drag-and-drop on headers
	 * @default false
	 */
	@Input() reorderable = false;

	/**
	 * Custom empty state template
	 */
	@Input() emptyTemplate?: TemplateRef<any>;

	/**
	 * Custom loading template (used when loadingType is 'template')
	 */
	@Input() loadingTemplate?: TemplateRef<any>;

	/**
	 * Whether rows can be expanded
	 * @default false
	 */
	@Input() expandable = false;

	/**
	 * Template for expanded row content
	 * Receives the row data as context: { $implicit: T; row: T }
	 */
	@Input() expandedRowTemplate?: TemplateRef<{ $implicit: T; row: T }>;

	/**
	 * Pre-expanded row IDs
	 */
	@Input() expandedRowIds: string[] = [];

	/**
	 * Whether inline editing is enabled
	 * @default false
	 */
	@Input() editable = false;

	/**
	 * Whether export functionality is enabled
	 * @default false
	 */
	@Input() exportable = false;

	/**
	 * Available export formats
	 * @default ['csv']
	 */
	@Input() exportFormats: TanGridExportFormat[] = ['csv'];

	/**
	 * Event emitted when row is clicked
	 */
	@Output() rowClick = new EventEmitter<{ row: T; index: number }>();

	@Output() rowDblClick = new EventEmitter<{ row: T; index: number }>();

	/**
	 * Event emitted when selection changes
	 */
	@Output() selectionChange = new EventEmitter<T[]>();

	/**
	 * Event emitted when sorting changes
	 */
	@Output() sortChange = new EventEmitter<TanGridSort>();

	/**
	 * Event emitted when pagination changes
	 */
	@Output() paginationChange = new EventEmitter<TanGridPagination>();

	/**
	 * Event emitted when filter changes
	 */
	@Output() filterChange = new EventEmitter<TanGridFilter[]>();

	/**
	 * Event emitted when row expansion changes
	 */
	@Output() expansionChange = new EventEmitter<{ rowId: string; expanded: boolean }>();

	/**
	 * Event emitted when column pinning changes
	 */
	@Output() pinChange = new EventEmitter<{ columnId: string; position: 'left' | 'right' | 'none' }>();

	/**
	 * Event emitted when a cell is edited
	 */
	@Output() cellEditChange = new EventEmitter<TanGridCellEdit<T>>();

	/**
	 * Event emitted when column order changes
	 */
	@Output() columnOrderChange = new EventEmitter<string[]>();

	// Internal state
	protected dataSignal = signal<T[]>([]);
	protected columnsSignal = signal<ColumnDef<T, any>[]>([]);
	protected globalFilterSignal = signal<string>('');
	protected sortingSignal = signal<any[]>([]);
	protected rowSelectionSignal = signal<RowSelectionState>({});
	protected columnSizingSignal = signal<Record<string, number>>({});
	protected rowExpansionSignal = signal<Record<string, boolean>>({});
	protected editingCellSignal = signal<{ rowId: string; columnId: string } | null>(null);
	protected editingValueSignal = signal<any>(null);
	protected columnOrderSignal = signal<string[]>([]);
	protected hasHorizontalScroll = signal(false);

	protected table!: Table<T>;
	protected pageIndex = signal(0);
	protected pageSizeSignal = signal(10);
	private resizeAnimationFrame: number | null = null;
	private resizeObserver: ResizeObserver | null = null;

	@ViewChild('tableContainer') tableContainer!: ElementRef<HTMLElement>;

	protected scrollElementSignal = signal<HTMLElement | null>(null);

	@ViewChild('virtualScrollViewport')
	set virtualScrollViewport(el: ElementRef<HTMLElement>) {
		this.scrollElementSignal.set(el?.nativeElement || null);
	}

	private _headerRowContainer!: ElementRef<HTMLElement>;
	private _sortable: Sortable | null = null;

	@ViewChild('headerRowContainer')
	set headerRowContainer(el: ElementRef<HTMLElement>) {
		this._headerRowContainer = el;
		this._initSortable();
	}
	get headerRowContainer() {
		return this._headerRowContainer;
	}

	/**
	 * Virtualizer for row rendering
	 */
	readonly virtualizer = injectVirtualizer(() => ({
		count: this.table ? this.table.getRowModel().rows.length : 0,
		scrollElement: this.scrollElementSignal() || undefined,
		estimateSize: () => this.rowHeight,
		overscan: this.virtualScrollBufferSize,
	}));

	constructor(
		private ngZone: NgZone,
		private cdr: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.dataSignal.set(this.data);
		this.pageSizeSignal.set(this.pageSize);
		
		// Initialize expanded rows from input
		if (this.expandedRowIds.length > 0) {
			const expansionState: Record<string, boolean> = {};
			this.expandedRowIds.forEach((id) => {
				expansionState[id] = true;
			});
			this.rowExpansionSignal.set(expansionState);
		}
		
		this._convertColumns();
		this._createTable();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['data'] && !changes['data'].firstChange) {
			this.dataSignal.set(this.data);
		}
		if (changes['columns'] && !changes['columns'].firstChange) {
			this._convertColumns();
			this._createTable();
		}
		if (changes['pageSize'] && !changes['pageSize'].firstChange) {
			this.pageSizeSignal.set(this.pageSize);
		}
		if (changes['expandedRowIds'] && !changes['expandedRowIds'].firstChange) {
			const expansionState: Record<string, boolean> = {};
			this.expandedRowIds.forEach((id) => {
				expansionState[id] = true;
			});
			this.rowExpansionSignal.set(expansionState);
			if (this.table) {
				this._createTable();
			}
		}
		if (changes['globalFilter']) {
			this.onGlobalSearch(this.globalFilter);
		}
		if (changes['reorderable']) {
			this._initSortable();
		}
	}

	/**
	 * Get selected rows
	 */
	getSelectedRows(): T[] {
		const selectedIds = Object.keys(this.rowSelectionSignal()).filter(
			(id) => this.rowSelectionSignal()[id] === true,
		);
		return this.data.filter((row, index) => selectedIds.includes(this.rowIdFn(row, index)));
	}

	/**
	 * Clear selection
	 */
	clearSelection(): void {
		this.rowSelectionSignal.set({});
		this._emitSelectionChange();
	}

	/**
	 * Select all rows
	 */
	selectAll(): void {
		if (this.selectionMode !== 'multiple') {
			return;
		}
		const selection: RowSelectionState = {};
		this.data.forEach((row, index) => {
			selection[this.rowIdFn(row, index)] = true;
		});
		this.rowSelectionSignal.set(selection);
		this._emitSelectionChange();
	}

	/**
	 * Toggle row selection
	 */
	toggleRowSelection(rowId: string): void {
		const current = this.rowSelectionSignal();
		const newSelection = { ...current };
		if (this.selectionMode === 'single') {
			// Single selection - clear others
			Object.keys(newSelection).forEach((id) => {
				newSelection[id] = false;
			});
			newSelection[rowId] = !newSelection[rowId];
		} else if (this.selectionMode === 'multiple') {
			newSelection[rowId] = !newSelection[rowId];
		}
		this.rowSelectionSignal.set(newSelection);
		this._emitSelectionChange();
	}

	/**
	 * Check if row is selected
	 */
	isRowSelected(rowId: string): boolean {
		return this.rowSelectionSignal()[rowId] === true;
	}

	/**
	 * Handle global search
	 */
	onGlobalSearch(value: string): void {
		this.globalFilterSignal.set(value);
		if (this.table) {
			this.table.setGlobalFilter(value);
		}
	}

	/**
	 * Handle column filter change
	 */
	onColumnFilterChange(column: any, value: any): void {
		column.setFilterValue(value || undefined);
		this._emitFilterChange();
	}

	/**
	 * Get filter placeholder text
	 */
	getFilterPlaceholder(column: any): string {
		const header = column.columnDef.header;
		if (typeof header === 'string') {
			return `Filter ${header}`;
		}
		return 'Filter';
	}

	/**
	 * Handle resize start
	 */
	onResizeStart(event: MouseEvent, header: any): void {
		event.preventDefault();
		event.stopPropagation();
		
		const resizeHandler = header.getResizeHandler();
		if (resizeHandler && typeof resizeHandler === 'function') {
			// Run resize handler outside Angular zone for better performance
			this.ngZone.runOutsideAngular(() => {
				resizeHandler(event);
			});
		}
	}

	/**
	 * Track by function for virtual scrolling
	 */
	trackByRowId(index: number, row: Row<T>): string {
		return row.id;
	}

	/**
	 * Get row index for virtual scrolling
	 */
	getRowIndex(row: Row<T>): number {
		return this.table.getRowModel().rows.findIndex((r) => r.id === row.id);
	}

	/**
	 * Check if a column is pinned to the left
	 */
	isPinnedLeft(columnId: string): boolean {
		return this.pinnedLeft.includes(columnId);
	}

	/**
	 * Check if a column is pinned to the right
	 */
	isPinnedRight(columnId: string): boolean {
		return this.pinnedRight.includes(columnId);
	}

	/**
	 * Check if a column is in the left half of the visible columns
	 */
	isColumnOnLeft(columnId: string): boolean {
		if (!this.table) return true;
		const allColumns = this.table.getVisibleLeafColumns();
		const index = allColumns.findIndex((c) => c.id === columnId);
		if (index === -1) return true;
		return index < allColumns.length / 2;
	}

	/**
	 * Get the left offset for a pinned column
	 */
	getPinnedLeftOffset(columnId: string): number {
		if (!this.isPinnedLeft(columnId)) return 0;
		
		let offset = 0;
		if (this.selectionMode !== 'none') {
			offset += 40; // Selection column width
		}
		
		const pinnedIndex = this.pinnedLeft.indexOf(columnId);
		for (let i = 0; i < pinnedIndex; i++) {
			const col = this.table.getColumn(this.pinnedLeft[i]);
			if (col) {
				offset += col.getSize();
			}
		}
		
		return offset;
	}

	/**
	 * Get the right offset for a pinned column
	 */
	getPinnedRightOffset(columnId: string): number {
		if (!this.isPinnedRight(columnId)) return 0;
		
		let offset = 0;
		const pinnedIndex = this.pinnedRight.indexOf(columnId);
		const totalPinnedRight = this.pinnedRight.length;
		
		// Calculate offset from right
		for (let i = pinnedIndex + 1; i < totalPinnedRight; i++) {
			const col = this.table.getColumn(this.pinnedRight[i]);
			if (col) {
				offset += col.getSize();
			}
		}
		
		return offset;
	}

	/**
	 * Check if a row is expanded
	 */
	isRowExpanded(rowId: string): boolean {
		return this.rowExpansionSignal()[rowId] === true;
	}

	/**
	 * Toggle row expansion
	 */
	toggleRowExpansion(row: Row<T>): void {
		const rowId = row.id;
		const currentState = this.rowExpansionSignal();
		const newState = { ...currentState };
		const isExpanded = currentState[rowId] === true;
		
		if (isExpanded) {
			delete newState[rowId];
		} else {
			newState[rowId] = true;
		}
		
		this.rowExpansionSignal.set(newState);
		this.expansionChange.emit({ rowId, expanded: !isExpanded });
		
		// Recreate table to reflect expansion state
		if (this.table) {
			this._createTable();
		}
	}

	/**
	 * Check if a cell is currently being edited
	 */
	isEditing(rowId: string, columnId: string): boolean {
		const editing = this.editingCellSignal();
		return editing !== null && editing.rowId === rowId && editing.columnId === columnId;
	}

	/**
	 * Start editing a cell
	 */
	startEdit(row: Row<T>, columnId: string): void {
		if (!this.editable) return;
		
		const rowId = row.id;
		const column = this.table.getColumn(columnId);
		if (!column) return;
		
		// Get current cell value
		const cell = row.getVisibleCells().find((c) => c.column.id === columnId);
		if (!cell) return;
		
		// Get the original value from the row data
		const originalValue = this._getCellValue(row.original, columnId);
		
		this.editingCellSignal.set({ rowId, columnId });
		this.editingValueSignal.set(originalValue);
	}

	/**
	 * Save the edited cell value
	 */
	saveEdit(row: Row<T>, columnId: string): void {
		const editing = this.editingCellSignal();
		if (!editing || editing.rowId !== row.id || editing.columnId !== columnId) {
			return;
		}
		
		const newValue = this.editingValueSignal();
		const oldValue = this._getCellValue(row.original, columnId);
		
		// Validate if validator exists
		const column = this.columns.find((col) => (col.id || String(col.accessorKey)) === columnId);
		if (column?.editValidator) {
			const validationResult = column.editValidator(newValue, row.original);
			if (validationResult !== true) {
				// Validation failed - don't save
				this.cancelEdit();
				return;
			}
		}
		
		// Update the data
		this._setCellValue(row.original, columnId, newValue);
		
		// Emit edit change event
		const rowIndex = this.table.getRowModel().rows.findIndex((r) => r.id === row.id);
		this.cellEditChange.emit({
			row: row.original,
			rowIndex,
			columnId,
			oldValue,
			newValue,
		});
		
		// Clear editing state
		this.editingCellSignal.set(null);
		this.editingValueSignal.set(null);
		
		// Update data signal to trigger change detection
		this.dataSignal.set([...this.dataSignal()]);
	}

	/**
	 * Cancel editing a cell
	 */
	cancelEdit(): void {
		this.editingCellSignal.set(null);
		this.editingValueSignal.set(null);
	}

	/**
	 * Get cell value for editing
	 */
	getEditingValue(): any {
		return this.editingValueSignal();
	}

	/**
	 * Update editing value
	 */
	updateEditingValue(value: any): void {
		this.editingValueSignal.set(value);
	}

	/**
	 * Get cell value from row data
	 */
	private _getCellValue(row: T, columnId: string): any {
		const column = this.columns.find((col) => (col.id || String(col.accessorKey)) === columnId);
		if (!column) return undefined;
		
		if (column.accessorFn) {
			return column.accessorFn(row);
		} else if (column.accessorKey) {
			return (row as any)[column.accessorKey];
		}
		
		return undefined;
	}

	/**
	 * Set cell value in row data
	 */
	private _setCellValue(row: T, columnId: string, value: any): void {
		const column = this.columns.find((col) => (col.id || String(col.accessorKey)) === columnId);
		if (!column || !column.accessorKey) return;
		
		(row as any)[column.accessorKey] = value;
	}

	/**
	 * Check if a column is editable
	 */
	getColumnEditable(columnId: string): boolean {
		const column = this.columns.find((col) => (col.id || String(col.accessorKey)) === columnId);
		return column?.editable === true;
	}

	/**
	 * Get input type for editable column
	 */
	getColumnEditType(columnId: string): string {
		const column = this.columns.find((col) => (col.id || String(col.accessorKey)) === columnId);
		return column?.editType || 'text';
	}

	/**
	 * Export to CSV (Public API)
	 * Allows triggering CSV export programmatically or from custom UI
	 */
	exportToCsv(options?: Partial<TanGridExportOptions>): void {
		const exportOptions: TanGridExportOptions = {
			format: 'csv',
			filename: 'table-export',
			selectedOnly: false,
			currentPageOnly: false,
			includeHeaders: true,
			...options
		};
		this.exportData(exportOptions);
	}

	/**
	 * Export to Excel (Public API)
	 * Allows triggering Excel export programmatically or from custom UI
	 */
	exportToExcel(options?: Partial<TanGridExportOptions>): void {
		const exportOptions: TanGridExportOptions = {
			format: 'excel',
			filename: 'table-export',
			selectedOnly: false,
			currentPageOnly: false,
			includeHeaders: true,
			...options
		};
		this.exportData(exportOptions);
	}

	/**
	 * Export to PDF (Public API)
	 * Allows triggering PDF export programmatically or from custom UI
	 */
	exportToPdf(options?: Partial<TanGridExportOptions>): void {
		const exportOptions: TanGridExportOptions = {
			format: 'pdf',
			filename: 'table-export',
			selectedOnly: false,
			currentPageOnly: false,
			includeHeaders: true,
			...options
		};
		this.exportData(exportOptions);
	}

	/**
	 * Export table data
	 */
	exportData(options: TanGridExportOptions): void {
		if (!this.table) return;

		let dataToExport: T[] = [];
		const visibleColumns = this.columns.filter((col) => col.visible !== false);

		// Determine which rows to export
		if (options.selectedOnly && this.selectionMode !== 'none') {
			const selectedRows = this.getSelectedRows();
			dataToExport = selectedRows;
		} else if (options.currentPageOnly && this.pagination) {
			dataToExport = this.table.getRowModel().rows.map((row) => row.original);
		} else {
			dataToExport = this.dataSignal();
		}

		// Export based on format
		switch (options.format) {
			case 'csv':
				this._exportToCSV(dataToExport, visibleColumns, options);
				break;
			case 'excel':
				this._exportToExcel(dataToExport, visibleColumns, options);
				break;
			case 'pdf':
				this._exportToPDF(dataToExport, visibleColumns, options);
				break;
		}
	}

	/**
	 * Toggle pin state for a column
	 */
	togglePin(column: any): void {
		const columnId = column.id;
		
		if (this.isPinnedLeft(columnId) || this.isPinnedRight(columnId)) {
			this.onPinChange(columnId, 'none');
		} else {
			// Determine which side to pin based on column position
			if (this.isColumnOnLeft(columnId)) {
				if (this.canPinLeft(columnId)) {
					this.onPinChange(columnId, 'left');
				}
			} else {
				if (this.canPinRight(columnId)) {
					this.onPinChange(columnId, 'right');
				}
			}
		}
	}

	/**
	 * Export to CSV
	 */
	private _exportToCSV(data: T[], columns: TanGridColumn<T>[], options: TanGridExportOptions): void {
		const rows: string[] = [];

		// Add headers if requested
		if (options.includeHeaders !== false) {
			const headers = columns.map((col) => {
				const header = typeof col.header === 'string' ? col.header : col.id || String(col.accessorKey) || '';
				return this._escapeCSV(header);
			});
			rows.push(headers.join(','));
		}

		// Add data rows
		data.forEach((row) => {
			const values = columns.map((col) => {
				let value: any;
				if (col.accessorFn) {
					value = col.accessorFn(row);
				} else if (col.accessorKey) {
					value = (row as any)[col.accessorKey];
				}
				// Convert value to string and escape
				return this._escapeCSV(value != null ? String(value) : '');
			});
			rows.push(values.join(','));
		});

		// Create CSV content
		const csvContent = rows.join('\n');
		const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
		this._downloadFile(blob, options.filename || 'table-export', 'csv');
	}

	/**
	 * Export to Excel (XLSX)
	 * Note: Requires xlsx library to be installed
	 */
	private _exportToExcel(data: T[], columns: TanGridColumn<T>[], options: TanGridExportOptions): void {
		// Use a dynamic import that Vite won't try to resolve at build time
		// We use Function constructor to make the import path truly dynamic
		const importXlsx = new Function('return import("xlsx")');
		
		importXlsx()
			.then((XLSX: any) => {
				// Prepare data for Excel export
				const worksheetData: any[] = [];

				// Add headers if requested
				if (options.includeHeaders !== false) {
					const headers: any = {};
					columns.forEach((col) => {
						const header = typeof col.header === 'string' ? col.header : col.id || String(col.accessorKey) || '';
						const key = col.id || String(col.accessorKey) || '';
						headers[key] = header;
					});
					worksheetData.push(headers);
				}

				// Add data rows
				data.forEach((row) => {
					const rowData: any = {};
					columns.forEach((col) => {
						let value: any;
						if (col.accessorFn) {
							value = col.accessorFn(row);
						} else if (col.accessorKey) {
							value = (row as any)[col.accessorKey];
						}
						const key = col.id || String(col.accessorKey) || '';
						rowData[key] = value != null ? value : '';
					});
					worksheetData.push(rowData);
				});

				// Create worksheet from JSON data
				const worksheet = XLSX.utils.json_to_sheet(worksheetData, { skipHeader: options.includeHeaders === false });
				const workbook = XLSX.utils.book_new();
				XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

				// Generate Excel file
				const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
				const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
				this._downloadFile(blob, options.filename || 'table-export', 'xlsx');
			})
			.catch(() => {
				console.warn('xlsx library is not installed. Please install it: npm install xlsx');
				// Fallback to CSV
				this._exportToCSV(data, columns, { ...options, format: 'csv' });
			});
	}

	/**
	 * Export to PDF
	 * Note: Requires jspdf library to be installed
	 */
	private _exportToPDF(data: T[], columns: TanGridColumn<T>[], options: TanGridExportOptions): void {
		// Use dynamic imports that Vite won't try to resolve at build time
		// We use Function constructor to make the import paths truly dynamic
		const importJspdf = new Function('return import("jspdf")');
		const importAutotable = new Function('return import("jspdf-autotable")');
		
		Promise.all([importJspdf(), importAutotable()])
			.then(([jsPDF, autoTable]) => {
				const doc = new jsPDF.default();

				// Prepare table data
				const tableData: any[][] = [];

				// Add headers if requested
				if (options.includeHeaders !== false) {
					const headers = columns.map((col) => {
						return typeof col.header === 'string' ? col.header : col.id || String(col.accessorKey) || '';
					});
					tableData.push(headers);
				}

				// Add data rows
				data.forEach((row) => {
					const rowData = columns.map((col) => {
						let value: any;
						if (col.accessorFn) {
							value = col.accessorFn(row);
						} else if (col.accessorKey) {
							value = (row as any)[col.accessorKey];
						}
						return value != null ? String(value) : '';
					});
					tableData.push(rowData);
				});

				// Generate PDF
				(doc as any).autoTable({
					head: options.includeHeaders !== false ? [tableData[0]] : undefined,
					body: options.includeHeaders !== false ? tableData.slice(1) : tableData,
				});

				doc.save(`${options.filename || 'table-export'}.pdf`);
			})
			.catch(() => {
				console.warn('jspdf or jspdf-autotable library is not installed. Please install it: npm install jspdf jspdf-autotable');
				// Fallback to CSV
				this._exportToCSV(data, columns, { ...options, format: 'csv' });
			});
	}

	/**
	 * Escape CSV value
	 */
	private _escapeCSV(value: string): string {
		if (value.includes(',') || value.includes('"') || value.includes('\n')) {
			return `"${value.replace(/"/g, '""')}"`;
		}
		return value;
	}

	/**
	 * Download file
	 */
	private _downloadFile(blob: Blob, filename: string, extension: string): void {
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${filename}.${extension}`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	}

	/**
	 * Emit filter change event
	 */
	private _emitFilterChange(): void {
		if (!this.table) return;
		
		const filters: TanGridFilter[] = [];
		this.table.getAllColumns().forEach((col) => {
			const filterValue = col.getFilterValue();
			if (filterValue !== undefined && filterValue !== null && filterValue !== '') {
				filters.push({
					columnId: col.id,
					value: filterValue,
				});
			}
		});
		
		this.filterChange.emit(filters);
	}

	/**
	 * Check if value is a TemplateRef
	 */
	isTemplateRef(value: any): boolean {
		return value instanceof TemplateRef;
	}

	/**
	 * Handle page change
	 */
	onPageChange(page: number): void {
		this.pageIndex.set(page - 1); // TanStack uses 0-indexed
		this.table.setPageIndex(page - 1);
		this._emitPaginationChange();
	}

	/**
	 * Handle page size change
	 */
	onPageSizeChange(size: number): void {
		if (!this.table) {
			return;
		}

		const newPageSize = size;
		// Always reset to the first page when page size changes
		const newPageIndex = 0;
		
		// Update signals first
		this.pageSizeSignal.set(newPageSize);
		this.pageIndex.set(newPageIndex);
		
		// Ensure view is updated
		this.cdr.markForCheck();
		
		// Emit pagination change manually since we're handling it here
		// Use setTimeout to ensure the table state has been fully updated
		setTimeout(() => {
			this._emitPaginationChange();
		}, 0);
	}

	/**
	 * Handle row click
	 */
	onRowClick(row: Row<T>, index: number): void {
		this.rowClick.emit({ row: row.original, index });
	}

	/**
	 * Handle row double click
	 */
	onRowDblClick(row: Row<T>, index: number): void {
		this.rowDblClick.emit({ row: row.original, index });
	}

	onPinChange(columnId: string, position: 'left' | 'right' | 'none') {
		this.pinChange.emit({ columnId, position });
	}

	ngAfterViewInit() {
		if (this.tableContainer?.nativeElement) {
			this.resizeObserver = new ResizeObserver(() => {
				this.ngZone.run(() => {
					this.checkScroll();
				});
			});
			this.resizeObserver.observe(this.tableContainer.nativeElement);
			this.checkScroll();
		}
	}

	ngOnDestroy() {
		this.resizeObserver?.disconnect();
	}

	checkScroll() {
		if (this.tableContainer?.nativeElement) {
			const el = this.tableContainer.nativeElement;
			this.hasHorizontalScroll.set(el.scrollWidth > el.clientWidth);
			this.cdr.markForCheck();
		}
	}

	canPinLeft(columnId: string): boolean {
		const def = this.columns.find(c => (c.id || c.accessorKey) === columnId);
		if (!def) return true;
		
		if (def.pinnable === false) return false;
		if (def.pinnable === 'right') return false;
		return true;
	}

	canPinRight(columnId: string): boolean {
		const def = this.columns.find(c => (c.id || c.accessorKey) === columnId);
		if (!def) return true;
		
		if (def.pinnable === false) return false;
		if (def.pinnable === 'left') return false;
		return true;
	}

	/**
	 * Get total pages
	 */
	getTotalPages(): number {
		if (!this.table) {
			return 1;
		}
		return this.table.getPageCount();
	}

	/**
	 * Get current page (1-indexed)
	 */
	getCurrentPage(): number {
		if (!this.table) {
			return 1;
		}
		return this.table.getState().pagination.pageIndex + 1;
	}

	/**
	 * Get total items
	 */
	getTotalItems(): number {
		if (this.paginationMode === 'server') {
			return this.totalItems;
		}
		if (!this.table) {
			return 0;
		}
		return this.table.getFilteredRowModel().rows.length;
	}

	/**
	 * Get displayed items range
	 */
	getDisplayedRange(): { start: number; end: number } {
		const pageIndex = this.table.getState().pagination.pageIndex;
		const pageSize = this.table.getState().pagination.pageSize;
		const start = pageIndex * pageSize + 1;
		const end = Math.min(start + pageSize - 1, this.getTotalItems());
		return { start, end };
	}

	/**
	 * Get pagination page numbers to display
	 */
	getPaginationPages(): (number | 'ellipsis')[] {
		const currentPage = this.getCurrentPage();
		const totalPages = this.getTotalPages();
		const pages: (number | 'ellipsis')[] = [];

		if (totalPages <= 7) {
			// Show all pages if 7 or fewer
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			// Always show first page
			pages.push(1);

			if (currentPage <= 4) {
				// Near the start
				for (let i = 2; i <= 5; i++) {
					pages.push(i);
				}
				pages.push('ellipsis');
				pages.push(totalPages);
			} else if (currentPage >= totalPages - 3) {
				// Near the end
				pages.push('ellipsis');
				for (let i = totalPages - 4; i <= totalPages; i++) {
					pages.push(i);
				}
			} else {
				// In the middle
				pages.push('ellipsis');
				for (let i = currentPage - 1; i <= currentPage + 1; i++) {
					pages.push(i);
				}
				pages.push('ellipsis');
				pages.push(totalPages);
			}
		}

		return pages;
	}

	/**
	 * Go to specific page
	 */
	goToPage(page: number): void {
		if (page >= 1 && page <= this.getTotalPages()) {
			this.onPageChange(page);
		}
	}

	/**
	 * Get placeholder width for skeleton loader (Facebook-style)
	 */
	getPlaceholderWidth(index: number): number {
		const widths = [60, 80, 70, 90, 75, 85];
		return widths[index % widths.length];
	}

	private _convertColumns(): void {
		const columnDefs: ColumnDef<T, any>[] = this.columns.map((col) => {
			const colId = col.id || String(col.accessorKey || 'col') || (typeof col.header === 'string' ? col.header : 'col');
			const headerValue = col.headerTemplate || (this.isTemplateRef(col.header) ? col.header : typeof col.header === 'string' ? col.header : String(col.header));
			
			const def: ColumnDef<T, any> = {
				id: colId,
				header: headerValue,
				enableSorting: col.sortable ?? false,
				enableColumnFilter: col.filterable ?? false,
				size: col.width ? parseInt(col.width) : undefined,
				minSize: col.minWidth ? parseInt(col.minWidth) : undefined,
				maxSize: col.maxWidth ? parseInt(col.maxWidth) : undefined,
				enableResizing: col.resizable ?? false,
			} as ColumnDef<T, any>;

			// Set accessor - prefer accessorFn over accessorKey
			if (col.accessorFn) {
				(def as any).accessorFn = col.accessorFn;
			} else if (col.accessorKey) {
				(def as any).accessorKey = col.accessorKey as string;
			}

			// Custom cell renderer - FlexRender handles TemplateRef, Component, or function
			if (col.cell) {
				// Return the TemplateRef/Component/function for FlexRender to handle
				// FlexRender will automatically render TemplateRefs, Components, or execute functions
				(def as any).cell = () => col.cell;
			}

			// Custom filter function
			if (col.filterFn) {
				(def as any).filterFn = col.filterFn;
			}

			return def;
		});

		this.columnsSignal.set(columnDefs as any);

		// Initialize column order from column definitions if not set
		if (this.columnOrderSignal().length === 0) {
			this.columnOrderSignal.set(columnDefs.map((def) => String(def.id)));
		}
	}

	private _createTable(): void {
		this.table = createAngularTable(() => ({
			data: this.dataSignal(),
			columns: this.columnsSignal(),
			enableRowSelection: this.selectionMode !== 'none',
			enableExpanding: this.expandable,
			getRowId: (row, index) => this.rowIdFn(row, index),
			state: {
				sorting: this.sortingSignal(),
				rowSelection: this.rowSelectionSignal(),
				globalFilter: this.globalFilterSignal(),
				columnSizing: this.columnSizingSignal(),
				expanded: this.rowExpansionSignal(),
				columnOrder: this.columnOrderSignal(),
				pagination: {
					pageIndex: this.pageIndex(),
					pageSize: this.pageSizeSignal(),
				},
			},
			initialState: {
				pagination: {
					pageIndex: 0,
					pageSize: this.pageSizeSignal(),
				},
			},
			onSortingChange: (updater) => {
				const newSorting = typeof updater === 'function' ? updater(this.sortingSignal()) : updater;
				this.sortingSignal.set(newSorting);
				if (newSorting.length > 0) {
					const sort = newSorting[0];
					this.sortChange.emit({
						columnId: sort.id,
						direction: sort.desc ? 'desc' : 'asc',
					});
				}
			},
			onRowSelectionChange: (updater) => {
				const newSelection = typeof updater === 'function' ? updater(this.rowSelectionSignal()) : updater;
				this.rowSelectionSignal.set(newSelection);
				this._emitSelectionChange();
			},
			onGlobalFilterChange: (updater) => {
				const newFilter = typeof updater === 'function' ? updater(this.globalFilterSignal()) : updater;
				this.globalFilterSignal.set(newFilter);
			},
			onColumnSizingChange: (updater) => {
				// Run outside Angular zone for smoother performance during resize
				this.ngZone.runOutsideAngular(() => {
					const newSizing = typeof updater === 'function' ? updater(this.columnSizingSignal()) : updater;
					
					// Cancel any pending animation frame
					if (this.resizeAnimationFrame !== null) {
						cancelAnimationFrame(this.resizeAnimationFrame);
					}
					
					// Use requestAnimationFrame to batch updates for smoother resizing
					this.resizeAnimationFrame = requestAnimationFrame(() => {
						this.ngZone.run(() => {
							this.columnSizingSignal.set(newSizing);
							this.cdr.markForCheck();
						});
						this.resizeAnimationFrame = null;
					});
				});
			},
			onExpandedChange: (updater) => {
				const currentState = this.rowExpansionSignal();
				const newExpansion = typeof updater === 'function' ? updater(currentState) : updater;
				// TanStack Table's ExpandedState can be boolean or Record<string, boolean>
				// We only support Record<string, boolean> for row-level expansion
				if (typeof newExpansion === 'object' && newExpansion !== null && !Array.isArray(newExpansion)) {
					this.rowExpansionSignal.set(newExpansion as Record<string, boolean>);
				} else if (typeof newExpansion === 'boolean') {
					// If it's a boolean, convert to Record format
					const expansionState: Record<string, boolean> = {};
					if (newExpansion) {
						// Expand all rows
						this.data.forEach((row, index) => {
							expansionState[this.rowIdFn(row, index)] = true;
						});
					}
					this.rowExpansionSignal.set(expansionState);
				}
			},
			onPaginationChange: (updater) => {
				// Skip if we're in the middle of a page size update (handled manually)
				if ((this.table as any)?._isUpdatingPageSize) {
					return;
				}
				
				// Get current state from the table instance (not from signals)
				const currentState = this.table.getState().pagination;
				const newPagination = typeof updater === 'function' ? updater(currentState) : updater;
				
				// Only update if values actually changed to avoid unnecessary updates
				if (newPagination.pageIndex !== currentState.pageIndex || newPagination.pageSize !== currentState.pageSize) {
					// Validate page index is within bounds based on current page count
					const totalPages = this.table.getPageCount();
					const validPageIndex = Math.min(Math.max(0, newPagination.pageIndex), Math.max(0, totalPages - 1));
					
					this.pageIndex.set(validPageIndex);
					this.pageSizeSignal.set(newPagination.pageSize);
					this._emitPaginationChange();
				}
			},
			onColumnOrderChange: (updater) => {
				const currentOrder = this.columnOrderSignal();
				const newOrder = typeof updater === 'function' ? updater(currentOrder) : updater;
				const normalizedOrder = (newOrder || []).map((id: any) => String(id));
				this.columnOrderSignal.set(normalizedOrder);
				this.columnOrderChange.emit(normalizedOrder);
			},
			getCoreRowModel: getCoreRowModel(),
			getExpandedRowModel: this.expandable ? getExpandedRowModel() : undefined,
			getSortedRowModel: this.sortingMode === 'client' ? getSortedRowModel() : undefined,
			getFilteredRowModel: this.filteringMode === 'client' ? getFilteredRowModel() : undefined,
			getPaginationRowModel: this.virtualScroll || this.paginationMode === 'server' ? undefined : getPaginationRowModel(), // Disable internal pagination for virtual scroll or server mode
			enableSorting: this.sorting,
			enableFiltering: this.filtering,
			enableGlobalFilter: this.globalSearch,
			enableColumnResizing: true,
			manualSorting: this.sortingMode === 'server', // Disable automatic sorting for server mode
			manualPagination: this.paginationMode === 'server',
			manualFiltering: this.filteringMode === 'server',
			rowCount: this.paginationMode === 'server' ? this.totalItems : undefined,
		}));
	}

	private _emitSelectionChange(): void {
		const selectedRows = this.getSelectedRows();
		this.selectionChange.emit(selectedRows);
	}

	private _emitPaginationChange(): void {
		this.paginationChange.emit({
			pageIndex: this.getCurrentPage(),
			pageSize: this.pageSizeSignal(),
			total: this.getTotalItems(),
		});
	}

	private _initSortable() {
		if (this._sortable) {
			this._sortable.destroy();
			this._sortable = null;
		}

		if (this.reorderable && this.headerRowContainer?.nativeElement) {
			this._sortable = new Sortable(this.headerRowContainer.nativeElement, {
				animation: 150,
				onEnd: (evt: any) => {
					const { oldIndex, newIndex } = evt;
					if (oldIndex !== newIndex && this.table) {
						const visibleColumns = this.table.getVisibleLeafColumns();
						const columnIds = visibleColumns.map((c) => c.id);
						
						const [moved] = columnIds.splice(oldIndex, 1);
						columnIds.splice(newIndex, 0, moved);
						
						this.table.setColumnOrder(columnIds);
					}
				}
			});
		}
	}

	/**
	 * Determine if there are any columns that can be filtered
	 */
	hasFilterableColumns(): boolean {
		if (!this.table) {
			return false;
		}
		return this.table.getAllColumns().some((col) => col.getCanFilter());
	}
}
