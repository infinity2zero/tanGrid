import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface LargeDataset {
	id: number;
	name: string;
	email: string;
	department: string;
	role: string;
	salary: number;
	status: string;
	joinDate: string;
}

@Component({
	selector: 'ngsd-virtual-scrolling-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './virtual-scrolling-feature.component.html',
	styleUrls: ['./virtual-scrolling-feature.component.scss'],
})
export class VirtualScrollingFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	// Generate a large dataset (10,000 rows)
	largeDataset: LargeDataset[] = Array.from({ length: 10000 }, (_, i) => ({
		id: i + 1,
		name: `Employee ${i + 1}`,
		email: `employee${i + 1}@example.com`,
		department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][i % 5],
		role: ['Developer', 'Manager', 'Analyst', 'Designer', 'Executive'][i % 5],
		salary: 50000 + (i % 10) * 10000,
		status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'On Leave' : 'Inactive',
		joinDate: new Date(2020 + (i % 4), i % 12, (i % 28) + 1).toISOString().split('T')[0],
	}));

	columns: TanGridColumn<LargeDataset>[] = [
		{ header: 'ID', accessorKey: 'id', width: '80px' },
		{ header: 'Name', accessorKey: 'name', width: '200px' },
		{ header: 'Email', accessorKey: 'email', width: '250px' },
		{ header: 'Department', accessorKey: 'department', width: '150px' },
		{ header: 'Role', accessorKey: 'role', width: '150px' },
		{ header: 'Salary', accessorKey: 'salary', width: '120px' },
		{ header: 'Status', accessorKey: 'status', width: '120px' },
		{ header: 'Join Date', accessorKey: 'joinDate', width: '120px' },
	];

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface LargeDataset {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  salary: number;
  status: string;
  joinDate: string;
}

@Component({
  selector: 'app-large-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="largeDataset" 
      [columns]="columns"
      [virtualScroll]="true"
      [rowHeight]="48"
      [virtualScrollViewportHeight]="600"
      [pagination]="false"
      [sorting]="true"
      [globalSearch]="true"
    ></tan-grid>
  \`
})
export class LargeTableComponent {
  // Generate a large dataset (10,000 rows)
  largeDataset: LargeDataset[] = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: \`Employee \${i + 1}\`,
    email: \`employee\${i + 1}@example.com\`,
    department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][i % 5],
    role: ['Developer', 'Manager', 'Analyst', 'Designer', 'Executive'][i % 5],
    salary: 50000 + (i % 10) * 10000,
    status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'On Leave' : 'Inactive',
    joinDate: new Date(2020 + (i % 4), i % 12, (i % 28) + 1).toISOString().split('T')[0],
  }));
  
  columns: TanGridColumn<LargeDataset>[] = [
    { header: 'ID', accessorKey: 'id', width: '80px' },
    { header: 'Name', accessorKey: 'name', width: '200px' },
    { header: 'Email', accessorKey: 'email', width: '250px' },
    { header: 'Department', accessorKey: 'department', width: '150px' },
    { header: 'Role', accessorKey: 'role', width: '150px' },
    { header: 'Salary', accessorKey: 'salary', width: '120px' },
    { header: 'Status', accessorKey: 'status', width: '120px' },
    { header: 'Join Date', accessorKey: 'joinDate', width: '120px' },
  ];
}`;
}

