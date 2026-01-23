import { Component, signal, inject, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanGrid, TanGridColumn, TanGridPagination, TanGridSort, TanGridFilter } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { TableThemeService } from '../../../../services/table-theme.service';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'ngsd-server-side-data-feature',
  standalone: true,
  imports: [CommonModule, TanGrid, CodeViewerComponent],
  templateUrl: './server-side-data-feature.component.html',
  styleUrls: ['./server-side-data-feature.component.scss'],
})
export class ServerSideDataFeatureComponent implements OnInit {
  private tableThemeService = inject(TableThemeService);
  showCode = signal(false);
  tableTheme = this.tableThemeService.theme;

  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;

  // Table State
  data: User[] = [];
  loading = false;
  totalItems = 0;
  pageIndex = 0;
  pageSize = 10;
  
  // Logs for demo
  logs: { time: Date; message: string }[] = [];

  // Mock Database
  private allUsers: User[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'User', 'Editor', 'Viewer'][i % 4],
    status: ['Active', 'Inactive', 'Pending'][i % 3],
  }));

  columns: TanGridColumn<User>[] = [];

  ngOnInit() {
    this.columns = [
      { header: 'ID', accessorKey: 'id', width: '60px' },
      { header: 'Name', accessorKey: 'name', sortable: true, filterable: true },
      { header: 'Email', accessorKey: 'email', sortable: true, filterable: true },
      { header: 'Role', accessorKey: 'role', sortable: true, filterable: true },
      { 
        header: 'Status', 
        accessorKey: 'status', 
        cell: this.statusTemplate
      },
    ];
    this.loadData();
  }

  // Handle Pagination
  onPaginationChange(event: TanGridPagination) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.log(`Pagination changed: Page ${event.pageIndex + 1}, Size ${event.pageSize}`);
    this.loadData();
  }

  // Handle Sorting
  onSortChange(event: TanGridSort) {
    this.log(`Sorting changed: ${event.columnId} ${event.direction}`);
    // In a real app, you would pass this sort state to your API
    this.loadData(event);
  }

  // Handle Filtering
  onFilterChange(event: TanGridFilter[]) {
    this.log(`Filters changed: ${JSON.stringify(event)}`);
    // In a real app, you would pass these filters to your API
    this.loadData(undefined, event);
  }

  // Simulate Server Request
  loadData(sort?: TanGridSort, filters?: TanGridFilter[]) {
    this.loading = true;
    this.log('Fetching data from server...');

    // Simulate network delay
    setTimeout(() => {
      let filteredData = [...this.allUsers];

      // Apply Filters (Server-side simulation)
      if (filters && filters.length > 0) {
        filters.forEach(filter => {
          filteredData = filteredData.filter(user => {
            const val = (user as any)[filter.columnId]?.toString().toLowerCase();
            return val.includes(filter.value.toString().toLowerCase());
          });
        });
      }

      // Apply Sorting (Server-side simulation)
      if (sort) {
        filteredData.sort((a, b) => {
          const valA = (a as any)[sort.columnId];
          const valB = (b as any)[sort.columnId];
          if (valA < valB) return sort.direction === 'asc' ? -1 : 1;
          if (valA > valB) return sort.direction === 'asc' ? 1 : -1;
          return 0;
        });
      }

      // Apply Pagination (Server-side simulation)
      this.totalItems = filteredData.length;
      const start = this.pageIndex * this.pageSize;
      this.data = filteredData.slice(start, start + this.pageSize);
      
      this.loading = false;
      this.log(`Data loaded. Returned ${this.data.length} items.`);
    }, 800); // 800ms delay
  }

  private log(message: string) {
    this.logs.unshift({ time: new Date(), message });
    if (this.logs.length > 20) this.logs.pop();
  }

  code = `
// HTML
<tan-grid
  [data]="data"
  [columns]="columns"
  [loading]="loading"
  [pagination]="true"
  [paginationMode]="'server'"
  [totalItems]="totalItems"
  [pageSize]="pageSize"
  [sorting]="true"
  [sortingMode]="'server'"
  [filtering]="true"
  [filteringMode]="'server'"
  (paginationChange)="onPaginationChange($event)"
  (sortChange)="onSortChange($event)"
  (filterChange)="onFilterChange($event)"
></tan-grid>

// TS
export class ServerSideDataComponent {
  data: User[] = [];
  loading = false;
  totalItems = 0;
  pageIndex = 0;
  pageSize = 10;

  loadData(params: any) {
    this.loading = true;
    this.apiService.getUsers(params).subscribe(response => {
      this.data = response.data;
      this.totalItems = response.total;
      this.loading = false;
    });
  }

  onPaginationChange(event: TanGridPagination) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData({ page: this.pageIndex, size: this.pageSize });
  }
  
  // ... implement onSortChange and onFilterChange similarly
}
  `;
}
