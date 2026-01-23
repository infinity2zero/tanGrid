import { Component, OnInit, signal, inject, ViewChild, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TanGrid, TanGridColumn, TanGridPagination, TanGridSort } from 'tangrid';
import { BreweryService } from '../../services/brewery.service';
import { Brewery, BreweryParams } from '../../models/brewery.model';
import { CdkMenuModule } from '@angular/cdk/menu';
import { OverlayModule, ConnectedPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TanGrid, CdkMenuModule, OverlayModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  private breweryService = inject(BreweryService);

  // Popover Position Strategy (Right Aligned)
  menuPosition: ConnectedPosition[] = [
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
      offsetY: 8
    },
    {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
      offsetY: -8
    }
  ];

  // Data signals
  breweries = signal<Brewery[]>([]);
  totalItems = signal(0);
  loading = signal(false);
  
  // Search State
  searchQuery = signal(''); // Input value
  activeSearchTerm = signal(''); // Applied search (chip)
  
  // Sorting
  sortColumn = signal<string>('');
  sortDirection = signal<'asc' | 'desc'>('asc');
  
  // Pagination
  pageIndex = signal(1);
  pageSize = signal(10);
  pageSizeOptions = [10, 20, 50, 100];

  // Pinning
  pinnedLeft = signal<string[]>([]);
  pinnedRight = signal<string[]>([]);

  // Default columns (Always visible, cannot be hidden)
  readonly defaultColumnIds = ['name', 'brewery_type'];

  // All available columns definition
  readonly allColumns: TanGridColumn<Brewery>[] = [
    { id: 'id', header: 'ID', accessorKey: 'id', width: '250px' },
    { id: 'name', header: 'Name', accessorKey: 'name', sortable: true, width: '250px' },
    { id: 'brewery_type', header: 'Type', accessorKey: 'brewery_type', sortable: true, width: '150px' },
    { id: 'address_1', header: 'Address 1', accessorKey: 'address_1', width: '200px' },
    { id: 'address_2', header: 'Address 2', accessorKey: 'address_2', width: '200px' },
    { id: 'address_3', header: 'Address 3', accessorKey: 'address_3', width: '200px' },
    { id: 'city', header: 'City', accessorKey: 'city', sortable: true, width: '150px' },
    { id: 'state_province', header: 'State Province', accessorKey: 'state_province', sortable: true, width: '150px' },
    { id: 'postal_code', header: 'Postal Code', accessorKey: 'postal_code', width: '120px' },
    { id: 'country', header: 'Country', accessorKey: 'country', width: '150px' },
    { id: 'phone', header: 'Phone', accessorKey: 'phone', width: '150px' },
    { id: 'website_url', header: 'Website', accessorKey: 'website_url', width: '200px' },
    { id: 'state', header: 'State', accessorKey: 'state', width: '150px' },
    { id: 'street', header: 'Street', accessorKey: 'street', width: '200px' },
    { id: 'longitude', header: 'Longitude', accessorKey: 'longitude', width: '120px' },
    { id: 'latitude', header: 'Latitude', accessorKey: 'latitude', width: '120px' }
  ];

  // Visibility Map
  columnVisibility = signal<{ [key: string]: boolean }>({
    id: false,
    name: true,
    brewery_type: true,
    address_1: false,
    address_2: false,
    address_3: false,
    city: true,
    state_province: true,
    postal_code: false,
    country: true,
    phone: true,
    website_url: true,
    state: false,
    street: false,
    longitude: false,
    latitude: false
  });

  // Computed: Actual columns passed to table
  columns = computed(() => {
    const visibility = this.columnVisibility();
    const pinnedL = this.pinnedLeft();
    const pinnedR = this.pinnedRight();
    // Include if default, visible, OR pinned
    return this.allColumns.filter(col => 
      col.id && (
        this.defaultColumnIds.includes(col.id) || 
        visibility[col.id] ||
        pinnedL.includes(col.id) ||
        pinnedR.includes(col.id)
      )
    );
  });

  // Computed: Default Columns (for UI)
  defaultColumnsList = computed(() => {
    return this.allColumns.filter(col => col.id && this.defaultColumnIds.includes(col.id));
  });

  // Computed: Visible Columns (excluding default ones, for UI)
  visibleColumnsList = computed(() => {
    const visibility = this.columnVisibility();
    return this.allColumns.filter(col => col.id && !this.defaultColumnIds.includes(col.id) && visibility[col.id]);
  });

  // Computed: Available Columns (Hidden ones, for UI)
  availableColumnsList = computed(() => {
    const visibility = this.columnVisibility();
    return this.allColumns.filter(col => col.id && !this.defaultColumnIds.includes(col.id) && !visibility[col.id]);
  });

  constructor() {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);

    const params: BreweryParams = {
      page: this.pageIndex(),
      per_page: this.pageSize(),
      sort: this.sortColumn() ? `${this.sortColumn()}:${this.sortDirection()}` : undefined
    };

    // Use activeSearchTerm instead of searchQuery
    if (this.activeSearchTerm()) {
      params.by_name = this.activeSearchTerm();
    }

    this.breweryService.getMeta(params).subscribe({
      next: (meta) => {
        this.totalItems.set(Number(meta.total));
      },
      error: () => {
        // Fallback or ignore
      }
    });

    this.breweryService.getBreweries(params).subscribe({
      next: (data) => {
        this.breweries.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error fetching breweries', err);
        this.loading.set(false);
      }
    });
  }

  // Actions
  triggerSearch() {
    const term = this.searchQuery().trim();
    if (term) {
      this.activeSearchTerm.set(term);
      this.searchQuery.set(''); // Clear input
      this.pageIndex.set(1);
      this.loadData();
    }
  }

  clearSearch() {
    this.activeSearchTerm.set('');
    this.pageIndex.set(1);
    this.loadData();
  }

  onPaginationChange(event: TanGridPagination) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
    this.loadData();
  }

  onSortChange(event: TanGridSort) {
    this.sortColumn.set(event.columnId);
    this.sortDirection.set(event.direction);
    this.loadData();
  }

  // Column Visibility
  toggleColumn(columnId: string) {
    const current = this.columnVisibility();
    this.columnVisibility.set({ ...current, [columnId]: !current[columnId] });
  }

  // Column Pinning
  onPinChange(event: { columnId: string, position: 'left' | 'right' | 'none' }) {
    this.togglePin(event.columnId, event.position);
  }

  togglePin(columnId: string, position: 'left' | 'right' | 'none') {
    const currentLeft = this.pinnedLeft();
    const currentRight = this.pinnedRight();

    // Remove from both first
    let newLeft = currentLeft.filter(id => id !== columnId);
    let newRight = currentRight.filter(id => id !== columnId);

    if (position === 'left') {
      newLeft = [...newLeft, columnId];
    } else if (position === 'right') {
      newRight = [...newRight, columnId];
    }

    this.pinnedLeft.set(newLeft);
    this.pinnedRight.set(newRight);
  }

  getPinState(columnId: string): 'left' | 'right' | 'none' {
    if (this.pinnedLeft().includes(columnId)) return 'left';
    if (this.pinnedRight().includes(columnId)) return 'right';
    return 'none';
  }

  @ViewChild(TanGrid) ngsTable!: TanGrid<Brewery>;
  
  triggerExport(format: 'csv' | 'excel' | 'pdf') {
    if (this.ngsTable) {
      this.ngsTable.exportData({ format });
    }
  }
}
