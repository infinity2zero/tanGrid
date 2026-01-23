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
	rating: number;
}

@Component({
	selector: 'ngsd-themes-feature',
	standalone: true,
	imports: [CommonModule, TanGrid, CodeViewerComponent],
	templateUrl: './themes-feature.component.html',
	styleUrls: ['./themes-feature.component.scss'],
})
export class ThemesFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	selectedTheme = this.tableThemeService.theme;

	products: Product[] = [
		{ id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, rating: 4.5 },
		{ id: 2, name: 'Smartphone', category: 'Electronics', price: 699.99, stock: 32, rating: 4.8 },
		{ id: 3, name: 'Headphones', category: 'Audio', price: 149.99, stock: 48, rating: 4.2 },
		{ id: 4, name: 'Keyboard', category: 'Accessories', price: 79.99, stock: 67, rating: 4.6 },
		{ id: 5, name: 'Mouse', category: 'Accessories', price: 29.99, stock: 89, rating: 4.4 },
		{ id: 6, name: 'Monitor', category: 'Electronics', price: 299.99, stock: 23, rating: 4.7 },
		{ id: 7, name: 'Webcam', category: 'Accessories', price: 89.99, stock: 41, rating: 4.3 },
		{ id: 8, name: 'Speaker', category: 'Audio', price: 199.99, stock: 18, rating: 4.5 },
	];

	columns: TanGridColumn<Product>[] = [
		{
			id: 'id',
			header: 'ID',
			accessorKey: 'id',
			sortable: true,
			width: '80px',
		},
		{
			id: 'name',
			header: 'Product Name',
			accessorKey: 'name',
			sortable: true,
		},
		{
			id: 'category',
			header: 'Category',
			accessorKey: 'category',
			sortable: true,
		},
		{
			id: 'price',
			header: 'Price',
			accessorKey: 'price',
			sortable: true,
			accessorFn: (row) => `$${row.price.toFixed(2)}`,
			align: 'right',
		},
		{
			id: 'stock',
			header: 'Stock',
			accessorKey: 'stock',
			sortable: true,
			align: 'right',
		},
		{
			id: 'rating',
			header: 'Rating',
			accessorKey: 'rating',
			sortable: true,
			accessorFn: (row) => `${row.rating.toFixed(1)}`,
			align: 'center',
		},
	];

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <!-- Material Design Theme -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="material"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>

    <!-- Bootstrap Theme -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="bootstrap"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>

    <!-- Ant Design Theme -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="ant"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>

    <!-- Ant Design Alt Theme -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="ant-alt"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>

    <!-- Default Theme (current styling) -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="default"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>
  \`
})
export class ProductTableComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, rating: 4.5 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699.99, stock: 32, rating: 4.8 },
    { id: 3, name: 'Headphones', category: 'Audio', price: 149.99, stock: 48, rating: 4.2 },
    { id: 4, name: 'Keyboard', category: 'Accessories', price: 79.99, stock: 67, rating: 4.6 },
    { id: 5, name: 'Mouse', category: 'Accessories', price: 29.99, stock: 89, rating: 4.4 },
    { id: 6, name: 'Monitor', category: 'Electronics', price: 299.99, stock: 23, rating: 4.7 },
    { id: 7, name: 'Webcam', category: 'Accessories', price: 89.99, stock: 41, rating: 4.3 },
    { id: 8, name: 'Speaker', category: 'Audio', price: 199.99, stock: 18, rating: 4.5 },
  ];
  
  columns: TanGridColumn<Product>[] = [
    {
      id: 'id',
      header: 'ID',
      accessorKey: 'id',
      sortable: true,
      width: '80px',
    },
    {
      id: 'name',
      header: 'Product Name',
      accessorKey: 'name',
      sortable: true,
    },
    {
      id: 'category',
      header: 'Category',
      accessorKey: 'category',
      sortable: true,
    },
    {
      id: 'price',
      header: 'Price',
      accessorKey: 'price',
      sortable: true,
      accessorFn: (row) => \`$\${row.price.toFixed(2)}\`,
      align: 'right',
    },
    {
      id: 'stock',
      header: 'Stock',
      accessorKey: 'stock',
      sortable: true,
      align: 'right',
    },
    {
      id: 'rating',
      header: 'Rating',
      accessorKey: 'rating',
      sortable: true,
      accessorFn: (row) => \`\${row.rating.toFixed(1)}\`,
      align: 'center',
    },
  ];
}`;

	setTheme(theme: 'default' | 'material' | 'bootstrap' | 'ant' | 'ant-alt'): void {
		this.tableThemeService.setTheme(theme);
	}
}

