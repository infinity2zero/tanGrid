import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Customer {
	id: number;
	name: string;
	email: string;
	phone: string;
	company: string;
	status: string;
}

@Component({
	selector: 'ngsd-search-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './search-feature.component.html',
	styleUrls: ['./search-feature.component.scss'],
})
export class SearchFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	customers: Customer[] = Array.from({ length: 30 }, (_, i) => ({
		id: i + 1,
		name: `Customer ${String.fromCharCode(65 + (i % 26))}${i > 25 ? Math.floor(i / 26) : ''}`,
		email: `customer${i + 1}@example.com`,
		phone: `+1-555-${String(i + 1000).slice(1)}`,
		company: ['Acme Corp', 'Tech Solutions', 'Global Inc', 'Startup Co', 'Enterprise Ltd'][i % 5],
		status: ['Active', 'Inactive', 'Pending'][i % 3],
	}));

	columns: TanGridColumn<Customer>[] = [
		{ header: 'ID', accessorKey: 'id' },
		{ header: 'Name', accessorKey: 'name' },
		{ header: 'Email', accessorKey: 'email' },
		{ header: 'Phone', accessorKey: 'phone' },
		{ header: 'Company', accessorKey: 'company' },
		{ header: 'Status', accessorKey: 'status' },
	];

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="customers" 
      [columns]="columns"
      [globalSearch]="true"
      [pageSize]="10"
    ></tan-grid>
  \`
})
export class CustomersTableComponent {
  customers: Customer[] = [ /* ... */ ];
  
  columns: TanGridColumn<Customer>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    // ... more columns
  ];
}`;
}

