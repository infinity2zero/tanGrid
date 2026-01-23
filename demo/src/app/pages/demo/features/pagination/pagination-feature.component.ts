import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Order {
	id: number;
	customer: string;
	product: string;
	amount: number;
	status: string;
	date: string;
}

@Component({
	selector: 'ngsd-pagination-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './pagination-feature.component.html',
	styleUrls: ['./pagination-feature.component.scss'],
})
export class PaginationFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	orders: Order[] = Array.from({ length: 47 }, (_, i) => ({
		id: i + 1,
		customer: `Customer ${String.fromCharCode(65 + (i % 26))}`,
		product: ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones'][i % 5],
		amount: Math.floor(Math.random() * 1000) + 50,
		status: ['Pending', 'Processing', 'Shipped', 'Delivered'][i % 4],
		date: new Date(2024, 0, i + 1).toISOString().split('T')[0],
	}));

	columns: TanGridColumn<Order>[] = [
		{ header: 'Order ID', accessorKey: 'id' },
		{ header: 'Customer', accessorKey: 'customer' },
		{ header: 'Product', accessorKey: 'product' },
		{ header: 'Amount', accessorKey: 'amount' },
		{ header: 'Status', accessorKey: 'status' },
		{ header: 'Date', accessorKey: 'date' },
	];

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="orders" 
      [columns]="columns"
      [pageSize]="10"
      [pageSizeOptions]="[5, 10, 20, 50]"
    ></tan-grid>
  \`
})
export class OrdersTableComponent {
  orders: Order[] = [ /* ... */ ];
  
  columns: TanGridColumn<Order>[] = [
    { header: 'Order ID', accessorKey: 'id' },
    { header: 'Customer', accessorKey: 'customer' },
    // ... more columns
  ];
}`;
}

