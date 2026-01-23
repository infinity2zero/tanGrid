import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanGrid, TanGridColumn, TanGridCellEdit } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Product {
	id: number;
	name: string;
	category: string;
	price: number;
	stock: number;
	email: string;
}

@Component({
	selector: 'ngsd-inline-editing-feature',
	standalone: true,
	imports: [CommonModule, TanGrid, CodeViewerComponent],
	templateUrl: './inline-editing-feature.component.html',
	styleUrls: ['./inline-editing-feature.component.scss'],
})
export class InlineEditingFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	products: Product[] = [
		{ id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, email: 'laptop@example.com' },
		{ id: 2, name: 'Mouse', category: 'Electronics', price: 29.99, stock: 50, email: 'mouse@example.com' },
		{ id: 3, name: 'Keyboard', category: 'Electronics', price: 79.99, stock: 30, email: 'keyboard@example.com' },
		{ id: 4, name: 'Monitor', category: 'Electronics', price: 299.99, stock: 20, email: 'monitor@example.com' },
		{ id: 5, name: 'Headphones', category: 'Electronics', price: 149.99, stock: 25, email: 'headphones@example.com' },
	];

	columns: TanGridColumn<Product>[] = [
		{
			id: 'id',
			header: 'ID',
			accessorKey: 'id',
			sortable: true,
		},
		{
			id: 'name',
			header: 'Product Name',
			accessorKey: 'name',
			sortable: true,
			editable: true,
			editType: 'text',
		},
		{
			id: 'category',
			header: 'Category',
			accessorKey: 'category',
			sortable: true,
			editable: true,
			editType: 'text',
		},
		{
			id: 'price',
			header: 'Price',
			accessorKey: 'price',
			sortable: true,
			editable: true,
			editType: 'number',
			accessorFn: (row) => `$${row.price.toFixed(2)}`,
			editValidator: (value, row) => {
				const numValue = Number(value);
				if (isNaN(numValue) || numValue < 0) {
					return 'Price must be a positive number';
				}
				return true;
			},
		},
		{
			id: 'stock',
			header: 'Stock',
			accessorKey: 'stock',
			sortable: true,
			editable: true,
			editType: 'number',
			editValidator: (value, row) => {
				const numValue = Number(value);
				if (isNaN(numValue) || numValue < 0 || !Number.isInteger(numValue)) {
					return 'Stock must be a non-negative integer';
				}
				return true;
			},
		},
		{
			id: 'email',
			header: 'Email',
			accessorKey: 'email',
			sortable: true,
			editable: true,
			editType: 'email',
		},
	];

	onCellEdit(event: TanGridCellEdit<Product>): void {
		console.log('Cell edited:', event);
		// In a real application, you would save to a backend here
		// For demo purposes, the data is already updated in the component
	}

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn, TanGridCellEdit } from 'tangrid';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  email: string;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid
      [data]="products"
      [columns]="columns"
      [editable]="true"
      (cellEditChange)="onCellEdit($event)"
    ></tan-grid>
  \`
})
export class ProductTableComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, email: 'laptop@example.com' },
    // ... more products
  ];

  columns: TanGridColumn<Product>[] = [
    {
      id: 'name',
      header: 'Product Name',
      accessorKey: 'name',
      sortable: true,
      editable: true,
      editType: 'text',
    },
    {
      id: 'price',
      header: 'Price',
      accessorKey: 'price',
      sortable: true,
      editable: true,
      editType: 'number',
      accessorFn: (row) => \`$\${row.price.toFixed(2)}\`,
      editValidator: (value, row) => {
        const numValue = Number(value);
        if (isNaN(numValue) || numValue < 0) {
          return 'Price must be a positive number';
        }
        return true;
      },
    },
    {
      id: 'stock',
      header: 'Stock',
      accessorKey: 'stock',
      sortable: true,
      editable: true,
      editType: 'number',
      editValidator: (value, row) => {
        const numValue = Number(value);
        if (isNaN(numValue) || numValue < 0 || !Number.isInteger(numValue)) {
          return 'Stock must be a non-negative integer';
        }
        return true;
      },
    },
    {
      id: 'email',
      header: 'Email',
      accessorKey: 'email',
      sortable: true,
      editable: true,
      editType: 'email',
    },
  ];

  onCellEdit(event: TanGridCellEdit<Product>): void {
    console.log('Cell edited:', event);
    // Save to backend or update local state
  }
}`;
}

