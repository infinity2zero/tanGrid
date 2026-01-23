import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn, TanGridSort } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Employee {
	id: number;
	name: string;
	department: string;
	salary: number;
	joinDate: string;
}

@Component({
	selector: 'ngsd-sorting-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './sorting-feature.component.html',
	styleUrls: ['./sorting-feature.component.scss'],
})
export class SortingFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal<{ client: boolean; server: boolean }>({ client: false, server: false });
	serverSortInfo = signal<TanGridSort | null>(null);
	tableTheme = this.tableThemeService.theme;

	employees: Employee[] = [
		{ id: 1, name: 'John Doe', department: 'Engineering', salary: 95000, joinDate: '2020-01-15' },
		{ id: 2, name: 'Jane Smith', department: 'Marketing', salary: 75000, joinDate: '2019-03-20' },
		{ id: 3, name: 'Bob Johnson', department: 'Sales', salary: 65000, joinDate: '2021-06-10' },
		{ id: 4, name: 'Alice Williams', department: 'Engineering', salary: 110000, joinDate: '2018-11-05' },
		{ id: 5, name: 'Charlie Brown', department: 'HR', salary: 70000, joinDate: '2022-02-28' },
		{ id: 6, name: 'Diana Prince', department: 'Marketing', salary: 80000, joinDate: '2020-09-12' },
		{ id: 7, name: 'Eve Davis', department: 'Engineering', salary: 105000, joinDate: '2019-07-22' },
		{ id: 8, name: 'Frank Miller', department: 'Sales', salary: 72000, joinDate: '2021-04-18' },
	];

	clientColumns: TanGridColumn<Employee>[] = [
		{ header: 'ID', accessorKey: 'id', sortable: true },
		{ header: 'Name', accessorKey: 'name', sortable: true },
		{ header: 'Department', accessorKey: 'department', sortable: true },
		{ header: 'Salary', accessorKey: 'salary', sortable: true },
		{ header: 'Join Date', accessorKey: 'joinDate', sortable: true },
	];

	serverColumns: TanGridColumn<Employee>[] = [
		{ header: 'ID', accessorKey: 'id', sortable: true },
		{ header: 'Name', accessorKey: 'name', sortable: true },
		{ header: 'Department', accessorKey: 'department', sortable: true },
		{ header: 'Salary', accessorKey: 'salary', sortable: true },
		{ header: 'Join Date', accessorKey: 'joinDate', sortable: true },
	];

	toggleCode(type: 'client' | 'server') {
		this.showCode.update((state) => ({ ...state, [type]: !state[type] }));
	}

	onServerSort(sort: TanGridSort) {
		this.serverSortInfo.set(sort);
		console.log('Server sort requested:', sort);
	}

	clientCode = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="employees" 
      [columns]="columns"
      sortingMode="client"
    ></tan-grid>
  \`
})
export class EmployeeTableComponent {
  employees: Employee[] = [ /* ... */ ];
  
  columns: TanGridColumn<Employee>[] = [
    { header: 'ID', accessorKey: 'id', sortable: true },
    { header: 'Name', accessorKey: 'name', sortable: true },
    { header: 'Department', accessorKey: 'department', sortable: true },
    { header: 'Salary', accessorKey: 'salary', sortable: true },
  ];
}`;

	serverCode = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn, TanGridSort } from 'tangrid';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="employees" 
      [columns]="columns"
      sortingMode="server"
      (sortChange)="onSortChange($event)"
    ></tan-grid>
  \`
})
export class EmployeeTableComponent {
  employees: Employee[] = [ /* ... */ ];
  
  columns: TanGridColumn<Employee>[] = [
    { header: 'ID', accessorKey: 'id', sortable: true },
    { header: 'Name', accessorKey: 'name', sortable: true },
    // ... more columns
  ];

  onSortChange(sort: TanGridSort) {
    // Make API call with sort parameters
    this.loadEmployees(sort.columnId, sort.direction);
  }
}`;
}

