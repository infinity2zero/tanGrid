import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn, TanGridFilter } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Order {
	id: number;
	customer: string;
	product: string;
	amount: number;
	status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
	date: string;
}

@Component({
	selector: 'ngsd-column-filtering-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './column-filtering-feature.component.html',
	styleUrls: ['./column-filtering-feature.component.scss'],
})
export class ColumnFilteringFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	activeFilters = signal<TanGridFilter[]>([]);
	tableTheme = this.tableThemeService.theme;

	orders: Order[] = [
		{ id: 1, customer: 'John Doe', product: 'Laptop', amount: 1299.99, status: 'Shipped', date: '2024-01-15' },
		{ id: 2, customer: 'Jane Smith', product: 'Mouse', amount: 29.99, status: 'Delivered', date: '2024-01-14' },
		{ id: 3, customer: 'Bob Johnson', product: 'Keyboard', amount: 149.99, status: 'Processing', date: '2024-01-16' },
		{ id: 4, customer: 'Alice Brown', product: 'Monitor', amount: 399.99, status: 'Pending', date: '2024-01-17' },
		{ id: 5, customer: 'Charlie Wilson', product: 'Headphones', amount: 199.99, status: 'Shipped', date: '2024-01-15' },
		{ id: 6, customer: 'Diana Prince', product: 'Laptop', amount: 1299.99, status: 'Delivered', date: '2024-01-13' },
		{ id: 7, customer: 'Eve Davis', product: 'Mouse', amount: 29.99, status: 'Cancelled', date: '2024-01-18' },
		{ id: 8, customer: 'Frank Miller', product: 'Keyboard', amount: 149.99, status: 'Processing', date: '2024-01-16' },
	];

	columns: TanGridColumn<Order>[] = [
		{ header: 'ID', accessorKey: 'id' },
		{ header: 'Customer', accessorKey: 'customer', filterable: true },
		{ header: 'Product', accessorKey: 'product', filterable: true },
		{ header: 'Amount', accessorKey: 'amount', filterable: true, filterFn: (row, filterValue) => {
			const amount = Number(filterValue);
			return !isNaN(amount) && row.amount >= amount;
		} },
		{ header: 'Status', accessorKey: 'status', filterable: true },
		{ header: 'Date', accessorKey: 'date', filterable: true },
	];

	onFilterChange(filters: TanGridFilter[]) {
		this.activeFilters.set(filters);
		console.log('Active filters:', filters);
	}

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn, TanGridFilter } from 'tangrid';

interface Order {
  id: number;
  customer: string;
  product: string;
  amount: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
}

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="orders" 
      [columns]="columns"
      [filtering]="true"
      (filterChange)="onFilterChange($event)"
    ></tan-grid>
  \`
})
export class OrdersTableComponent {
  orders: Order[] = [
    { id: 1, customer: 'John Doe', product: 'Laptop', amount: 1299.99, status: 'Shipped', date: '2024-01-15' },
    { id: 2, customer: 'Jane Smith', product: 'Mouse', amount: 29.99, status: 'Delivered', date: '2024-01-14' },
    { id: 3, customer: 'Bob Johnson', product: 'Keyboard', amount: 149.99, status: 'Processing', date: '2024-01-16' },
    { id: 4, customer: 'Alice Brown', product: 'Monitor', amount: 399.99, status: 'Pending', date: '2024-01-17' },
    { id: 5, customer: 'Charlie Wilson', product: 'Headphones', amount: 199.99, status: 'Shipped', date: '2024-01-15' },
    { id: 6, customer: 'Diana Prince', product: 'Laptop', amount: 1299.99, status: 'Delivered', date: '2024-01-13' },
    { id: 7, customer: 'Eve Davis', product: 'Mouse', amount: 29.99, status: 'Cancelled', date: '2024-01-18' },
    { id: 8, customer: 'Frank Miller', product: 'Keyboard', amount: 149.99, status: 'Processing', date: '2024-01-16' },
  ];
  
  columns: TanGridColumn<Order>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Customer', accessorKey: 'customer', filterable: true },
    { header: 'Product', accessorKey: 'product', filterable: true },
    { 
      header: 'Amount', 
      accessorKey: 'amount', 
      filterable: true,
      filterFn: (row, filterValue) => {
        // Custom filter: show orders >= filterValue
        const amount = Number(filterValue);
        return !isNaN(amount) && row.amount >= amount;
      }
    },
    { header: 'Status', accessorKey: 'status', filterable: true },
    { header: 'Date', accessorKey: 'date', filterable: true },
  ];

  onFilterChange(filters: TanGridFilter[]) {
    // Handle filter changes
    console.log('Active filters:', filters);
  }
}`;
}

