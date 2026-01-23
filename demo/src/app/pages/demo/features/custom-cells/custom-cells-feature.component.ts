import { Component, signal, TemplateRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Product {
	id: number;
	name: string;
	price: number;
	stock: number;
	rating: number;
	image: string;
}

@Component({
	selector: 'ngsd-custom-cells-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './custom-cells-feature.component.html',
	styleUrls: ['./custom-cells-feature.component.scss'],
})
export class CustomCellsFeatureComponent implements AfterViewInit {
	private tableThemeService = inject(TableThemeService);
	@ViewChild('priceCell', { static: true }) priceCell!: TemplateRef<any>;
	@ViewChild('stockCell', { static: true }) stockCell!: TemplateRef<any>;
	@ViewChild('ratingCell', { static: true }) ratingCell!: TemplateRef<any>;
	@ViewChild('imageCell', { static: true }) imageCell!: TemplateRef<any>;

	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	products: Product[] = [
		{ id: 1, name: 'Laptop Pro', price: 1299.99, stock: 15, rating: 4.5, image: 'mdi mdi-laptop' },
		{ id: 2, name: 'Wireless Mouse', price: 29.99, stock: 50, rating: 4.2, image: 'mdi mdi-mouse' },
		{ id: 3, name: 'Mechanical Keyboard', price: 149.99, stock: 30, rating: 4.8, image: 'mdi mdi-keyboard' },
		{ id: 4, name: '4K Monitor', price: 399.99, stock: 20, rating: 4.6, image: 'mdi mdi-monitor' },
		{ id: 5, name: 'Noise-Cancelling Headphones', price: 199.99, stock: 25, rating: 4.7, image: 'mdi mdi-headphones' },
	];

	columns: TanGridColumn<Product>[] = [];
	
	ngAfterViewInit() {
		this.columns = [
			{ header: 'ID', accessorKey: 'id' },
			{ header: 'Image', accessorKey: 'image', cell: this.imageCell },
			{ header: 'Name', accessorKey: 'name' },
			{ header: 'Price', accessorKey: 'price', cell: this.priceCell },
			{ header: 'Stock', accessorKey: 'stock', cell: this.stockCell },
			{ header: 'Rating', accessorKey: 'rating', cell: this.ratingCell },
		];
	}

	code = `import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <ng-template #priceCell let-product>
      <span class="price">\${{ product.price | number:'1.2-2' }}</span>
    </ng-template>
    
    <ng-template #stockCell let-product>
      <span [class]="'stock stock--' + (product.stock > 20 ? 'high' : 'low')">
        {{ product.stock }} units
      </span>
    </ng-template>
    
    <ng-template #ratingCell let-product>
      <div class="rating">
        <span class="mdi mdi-star"></span>
        <span>{{ product.rating }}</span>
      </div>
    </ng-template>
    
    <tan-grid 
      [data]="products" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class ProductsTableComponent {
  @ViewChild('priceCell', { static: true }) priceCell!: TemplateRef<any>;
  @ViewChild('stockCell', { static: true }) stockCell!: TemplateRef<any>;
  @ViewChild('ratingCell', { static: true }) ratingCell!: TemplateRef<any>;
  
  products: Product[] = [ /* ... */ ];
  
  columns: TanGridColumn<Product>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Price', accessorKey: 'price', cell: this.priceCell },
    { header: 'Stock', accessorKey: 'stock', cell: this.stockCell },
    { header: 'Rating', accessorKey: 'rating', cell: this.ratingCell },
  ];
}`;
}

