import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Product {
	id: number;
	name: string;
	category: string;
	price: number;
	stock: number;
}

@Component({
	selector: 'ngsd-basic-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './basic-feature.component.html',
	styleUrls: ['./basic-feature.component.scss'],
})
export class BasicFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	products: Product[] = [
		{ id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15 },
		{ id: 2, name: 'Mouse', category: 'Electronics', price: 29.99, stock: 50 },
		{ id: 3, name: 'Keyboard', category: 'Electronics', price: 79.99, stock: 30 },
		{ id: 4, name: 'Monitor', category: 'Electronics', price: 299.99, stock: 20 },
		{ id: 5, name: 'Headphones', category: 'Electronics', price: 149.99, stock: 25 },
	];

	columns: TanGridColumn<Product>[] = [
		{ header: 'ID', accessorKey: 'id' },
		{ header: 'Product Name', accessorKey: 'name' },
		{ header: 'Category', accessorKey: 'category' },
		{ header: 'Price', accessorKey: 'price' },
		{ header: 'Stock', accessorKey: 'stock' },
	];

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="products" 
      [columns]="columns"
      [pagination]="false"
    ></tan-grid>
  \`
})
export class ProductTableComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15 },
    { id: 2, name: 'Mouse', category: 'Electronics', price: 29.99, stock: 50 },
    { id: 3, name: 'Keyboard', category: 'Electronics', price: 79.99, stock: 30 },
    { id: 4, name: 'Monitor', category: 'Electronics', price: 299.99, stock: 20 },
    { id: 5, name: 'Headphones', category: 'Electronics', price: 149.99, stock: 25 },
  ];

  columns: TanGridColumn<Product>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Product Name', accessorKey: 'name' },
    { header: 'Category', accessorKey: 'category' },
    { header: 'Price', accessorKey: 'price' },
    { header: 'Stock', accessorKey: 'stock' },
  ];
}`;
}

