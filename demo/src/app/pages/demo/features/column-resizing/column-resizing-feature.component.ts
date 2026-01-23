import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Product {
	id: number;
	name: string;
	description: string;
	category: string;
	price: number;
	stock: number;
	sku: string;
}

@Component({
	selector: 'ngsd-column-resizing-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './column-resizing-feature.component.html',
	styleUrls: ['./column-resizing-feature.component.scss'],
})
export class ColumnResizingFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	products: Product[] = [
		{ id: 1, name: 'Laptop Pro 15"', description: 'High-performance laptop with 16GB RAM', category: 'Electronics', price: 1299.99, stock: 15, sku: 'LAP-001' },
		{ id: 2, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse with precision tracking', category: 'Electronics', price: 29.99, stock: 50, sku: 'MOU-002' },
		{ id: 3, name: 'Mechanical Keyboard', description: 'RGB backlit mechanical keyboard', category: 'Electronics', price: 149.99, stock: 30, sku: 'KEY-003' },
		{ id: 4, name: '4K Monitor 27"', description: 'Ultra HD 4K monitor with HDR support', category: 'Electronics', price: 399.99, stock: 20, sku: 'MON-004' },
		{ id: 5, name: 'Noise-Cancelling Headphones', description: 'Premium wireless headphones with active noise cancellation', category: 'Electronics', price: 199.99, stock: 25, sku: 'HEA-005' },
	];

	columns: TanGridColumn<Product>[] = [
		{ header: 'ID', accessorKey: 'id', width: '60px', resizable: true },
		{ header: 'Name', accessorKey: 'name', width: '200px', resizable: true },
		{ header: 'Description', accessorKey: 'description', width: '300px', resizable: true },
		{ header: 'Category', accessorKey: 'category', width: '120px', resizable: true },
		{ header: 'Price', accessorKey: 'price', width: '100px', resizable: true },
		{ header: 'Stock', accessorKey: 'stock', width: '80px', resizable: true },
		{ header: 'SKU', accessorKey: 'sku', width: '100px', resizable: true },
	];

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="products" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class ProductsTableComponent {
  products: Product[] = [ /* ... */ ];
  
  columns: TanGridColumn<Product>[] = [
    { header: 'ID', accessorKey: 'id', width: '60px', resizable: true },
    { header: 'Name', accessorKey: 'name', width: '200px', resizable: true },
    { header: 'Description', accessorKey: 'description', width: '300px', resizable: true },
    // ... more columns with resizable: true
  ];
}`;
}

