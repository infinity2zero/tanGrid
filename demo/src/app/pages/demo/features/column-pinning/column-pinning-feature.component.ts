import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Product {
	id: string;
	name: string;
	category: string;
	price: number;
	stock: number;
	supplier: string;
	rating: number;
	description: string;
	status: string;
	createdAt: string;
}

@Component({
	selector: 'ngsd-column-pinning-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './column-pinning-feature.component.html',
	styleUrls: ['./column-pinning-feature.component.scss'],
})
export class ColumnPinningFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	products: Product[] = Array.from({ length: 50 }, (_, i) => ({
		id: `PROD-${String(i + 1).padStart(4, '0')}`,
		name: `Product ${i + 1}`,
		category: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'][i % 5],
		price: Math.round((Math.random() * 1000 + 10) * 100) / 100,
		stock: Math.floor(Math.random() * 1000),
		supplier: `Supplier ${(i % 10) + 1}`,
		rating: Math.round((Math.random() * 4 + 1) * 10) / 10,
		description: `This is a detailed description for product ${i + 1} with many features and specifications.`,
		status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Discontinued',
		createdAt: new Date(2023 + (i % 2), i % 12, (i % 28) + 1).toISOString().split('T')[0],
	}));

	columns: TanGridColumn<Product>[] = [
		{ header: 'ID', accessorKey: 'id', width: '120px' },
		{ header: 'Name', accessorKey: 'name', width: '200px' },
		{ header: 'Category', accessorKey: 'category', width: '150px' },
		{ header: 'Price', accessorKey: 'price', width: '120px' },
		{ header: 'Stock', accessorKey: 'stock', width: '100px' },
		{ header: 'Supplier', accessorKey: 'supplier', width: '150px' },
		{ header: 'Rating', accessorKey: 'rating', width: '100px' },
		{ header: 'Description', accessorKey: 'description', width: '300px' },
		{ header: 'Status', accessorKey: 'status', width: '120px' },
		{ header: 'Created', accessorKey: 'createdAt', width: '120px' },
	];

	// Interactive pinning controls
	pinnedLeft = signal<string[]>(['id', 'name']);
	pinnedRight = signal<string[]>(['status']);

	// Column pinning state
	columnPinningState: Record<string, { left: boolean; right: boolean }> = {};

	constructor() {
		// Initialize pinning state
		this.columns.forEach((col) => {
			const key = col.accessorKey as string;
			this.columnPinningState[key] = {
				left: this.pinnedLeft().includes(key),
				right: this.pinnedRight().includes(key),
			};
		});
	}

	getColumnKey(col: TanGridColumn<Product>): string {
		return (col.accessorKey as string) || '';
	}

	togglePinLeft(columnKey: string | undefined): void {
		if (!columnKey) return;
		const current = this.pinnedLeft();
		if (current.includes(columnKey)) {
			this.pinnedLeft.set(current.filter((k) => k !== columnKey));
			if (this.columnPinningState[columnKey]) {
				this.columnPinningState[columnKey].left = false;
			}
		} else {
			// Remove from right if it's there
			if (this.pinnedRight().includes(columnKey)) {
				this.togglePinRight(columnKey);
			}
			this.pinnedLeft.set([...current, columnKey]);
			if (!this.columnPinningState[columnKey]) {
				this.columnPinningState[columnKey] = { left: false, right: false };
			}
			this.columnPinningState[columnKey].left = true;
		}
	}

	togglePinRight(columnKey: string | undefined): void {
		if (!columnKey) return;
		const current = this.pinnedRight();
		if (current.includes(columnKey)) {
			this.pinnedRight.set(current.filter((k) => k !== columnKey));
			if (this.columnPinningState[columnKey]) {
				this.columnPinningState[columnKey].right = false;
			}
		} else {
			// Remove from left if it's there
			if (this.pinnedLeft().includes(columnKey)) {
				this.togglePinLeft(columnKey);
			}
			this.pinnedRight.set([...current, columnKey]);
			if (!this.columnPinningState[columnKey]) {
				this.columnPinningState[columnKey] = { left: false, right: false };
			}
			this.columnPinningState[columnKey].right = true;
		}
	}

	isPinnedLeft(columnKey: string | undefined): boolean {
		if (!columnKey) return false;
		return this.pinnedLeft().includes(columnKey);
	}

	isPinnedRight(columnKey: string | undefined): boolean {
		if (!columnKey) return false;
		return this.pinnedRight().includes(columnKey);
	}

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-pinned-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="products" 
      [columns]="columns"
      [pinnedLeft]="['id', 'name']"
      [pinnedRight]="['status']"
      [pagination]="true"
      [sorting]="true"
    ></tan-grid>
  \`
})
export class PinnedTableComponent {
  products: Product[] = [ /* ... */ ];
  
  columns: TanGridColumn<Product>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    // ... more columns
  ];
  
  // Pin columns by their accessorKey/column ID
  pinnedLeft = ['id', 'name'];
  pinnedRight = ['status'];
}`;
}

