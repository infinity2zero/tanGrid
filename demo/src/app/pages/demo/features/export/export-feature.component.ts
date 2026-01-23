import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Employee {
	id: number;
	name: string;
	email: string;
	department: string;
	salary: number;
	joinDate: string;
}

@Component({
	selector: 'ngsd-export-feature',
	standalone: true,
	imports: [CommonModule, TanGrid, CodeViewerComponent],
	templateUrl: './export-feature.component.html',
	styleUrls: ['./export-feature.component.scss'],
})
export class ExportFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	employees: Employee[] = [
		{ id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering', salary: 75000, joinDate: '2020-01-15' },
		{ id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Marketing', salary: 65000, joinDate: '2019-03-20' },
		{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', department: 'Sales', salary: 70000, joinDate: '2021-06-10' },
		{ id: 4, name: 'Alice Williams', email: 'alice@example.com', department: 'Engineering', salary: 80000, joinDate: '2018-11-05' },
		{ id: 5, name: 'Charlie Brown', email: 'charlie@example.com', department: 'HR', salary: 60000, joinDate: '2022-02-14' },
		{ id: 6, name: 'Diana Prince', email: 'diana@example.com', department: 'Marketing', salary: 68000, joinDate: '2020-09-30' },
		{ id: 7, name: 'Edward Norton', email: 'edward@example.com', department: 'Engineering', salary: 85000, joinDate: '2019-07-22' },
		{ id: 8, name: 'Fiona Apple', email: 'fiona@example.com', department: 'Sales', salary: 72000, joinDate: '2021-04-18' },
	];

	columns: TanGridColumn<Employee>[] = [
		{
			id: 'id',
			header: 'ID',
			accessorKey: 'id',
			sortable: true,
		},
		{
			id: 'name',
			header: 'Name',
			accessorKey: 'name',
			sortable: true,
		},
		{
			id: 'email',
			header: 'Email',
			accessorKey: 'email',
			sortable: true,
		},
		{
			id: 'department',
			header: 'Department',
			accessorKey: 'department',
			sortable: true,
		},
		{
			id: 'salary',
			header: 'Salary',
			accessorKey: 'salary',
			sortable: true,
			accessorFn: (row) => `$${row.salary.toLocaleString()}`,
		},
		{
			id: 'joinDate',
			header: 'Join Date',
			accessorKey: 'joinDate',
			sortable: true,
		},
	];

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  joinDate: string;
}

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid
      [data]="employees"
      [columns]="columns"
      [exportable]="true"
      [exportFormats]="['csv', 'excel', 'pdf']"
      [selectionMode]="'multiple'"
    ></tan-grid>
  \`
})
export class EmployeeTableComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering', salary: 75000, joinDate: '2020-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Marketing', salary: 65000, joinDate: '2019-03-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', department: 'Sales', salary: 70000, joinDate: '2021-06-10' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', department: 'Engineering', salary: 80000, joinDate: '2018-11-05' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', department: 'HR', salary: 60000, joinDate: '2022-02-14' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', department: 'Marketing', salary: 68000, joinDate: '2020-09-30' },
    { id: 7, name: 'Edward Norton', email: 'edward@example.com', department: 'Engineering', salary: 85000, joinDate: '2019-07-22' },
    { id: 8, name: 'Fiona Apple', email: 'fiona@example.com', department: 'Sales', salary: 72000, joinDate: '2021-04-18' },
  ];

  columns: TanGridColumn<Employee>[] = [
    {
      id: 'name',
      header: 'Name',
      accessorKey: 'name',
      sortable: true,
    },
    {
      id: 'email',
      header: 'Email',
      accessorKey: 'email',
      sortable: true,
    },
    {
      id: 'department',
      header: 'Department',
      accessorKey: 'department',
      sortable: true,
    },
    {
      id: 'salary',
      header: 'Salary',
      accessorKey: 'salary',
      sortable: true,
      accessorFn: (row) => \`$\${row.salary.toLocaleString()}\`,
    },
    {
      id: 'joinDate',
      header: 'Join Date',
      accessorKey: 'joinDate',
      sortable: true,
    },
  ];
}

// Note: For Excel and PDF export, you need to install optional dependencies:
// npm install xlsx          (for Excel export)
// npm install jspdf jspdf-autotable  (for PDF export)
// CSV export works without any additional dependencies.`;
}

