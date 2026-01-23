import { Component, signal, TemplateRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Report {
	id: number;
	title: string;
	author: string;
	views: number;
	downloads: number;
	rating: number;
	date: string;
}

@Component({
	selector: 'ngsd-custom-headers-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './custom-headers-feature.component.html',
	styleUrls: ['./custom-headers-feature.component.scss'],
})
export class CustomHeadersFeatureComponent implements AfterViewInit {
	private tableThemeService = inject(TableThemeService);
	@ViewChild('viewsHeader', { static: true }) viewsHeader!: TemplateRef<any>;
	@ViewChild('ratingHeader', { static: true }) ratingHeader!: TemplateRef<any>;
	@ViewChild('actionsHeader', { static: true }) actionsHeader!: TemplateRef<any>;

	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	reports: Report[] = [
		{ id: 1, title: 'Q4 Sales Report', author: 'John Doe', views: 1250, downloads: 342, rating: 4.5, date: '2024-01-15' },
		{ id: 2, title: 'Marketing Analysis', author: 'Jane Smith', views: 890, downloads: 201, rating: 4.2, date: '2024-01-14' },
		{ id: 3, title: 'Budget Forecast', author: 'Bob Johnson', views: 2100, downloads: 567, rating: 4.8, date: '2024-01-16' },
		{ id: 4, title: 'User Research', author: 'Alice Brown', views: 650, downloads: 123, rating: 4.0, date: '2024-01-17' },
		{ id: 5, title: 'Product Roadmap', author: 'Charlie Wilson', views: 1800, downloads: 445, rating: 4.7, date: '2024-01-15' },
	];

	columns: TanGridColumn<Report>[] = [];

	ngAfterViewInit() {
		this.columns = [
			{ header: 'ID', accessorKey: 'id' },
			{ header: 'Title', accessorKey: 'title' },
			{ header: 'Author', accessorKey: 'author' },
			{ header: this.viewsHeader, accessorKey: 'views' },
			{ header: 'Downloads', accessorKey: 'downloads' },
			{ header: this.ratingHeader, accessorKey: 'rating' },
			{ header: 'Date', accessorKey: 'date' },
			{ header: this.actionsHeader, accessorKey: 'id' },
		];
	}

	onSortClick() {
		alert('Sort by rating clicked!');
	}

	code = `import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-reports-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <ng-template #viewsHeader>
      <div class="custom-header">
        <span class="mdi mdi-eye"></span>
        <span>Views</span>
      </div>
    </ng-template>
    
    <ng-template #ratingHeader>
      <div class="custom-header">
        <span class="mdi mdi-star"></span>
        <span>Rating</span>
        <button (click)="sortByRating()">Sort</button>
      </div>
    </ng-template>
    
    <ng-template #actionsHeader>
      <div class="custom-header">
        <span class="mdi mdi-cog"></span>
        <span>Actions</span>
      </div>
    </ng-template>
    
    <tan-grid 
      [data]="reports" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class ReportsTableComponent implements AfterViewInit {
  @ViewChild('viewsHeader', { static: true }) viewsHeader!: TemplateRef<any>;
  @ViewChild('ratingHeader', { static: true }) ratingHeader!: TemplateRef<any>;
  @ViewChild('actionsHeader', { static: true }) actionsHeader!: TemplateRef<any>;
  
  reports: Report[] = [ /* ... */ ];
  
  columns: TanGridColumn<Report>[] = [];
  
  ngAfterViewInit() {
    // Use header property with TemplateRef for custom headers
    this.columns = [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Title', accessorKey: 'title' },
      { header: this.viewsHeader, accessorKey: 'views' },
      { header: this.ratingHeader, accessorKey: 'rating' },
      { header: this.actionsHeader, accessorKey: 'id' },
    ];
  }
}`;
}

