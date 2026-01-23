import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Employee {
	id: number;
	name: string;
	email: string;
	department: string;
	role: string;
	salary: number;
	status: string;
}

@Component({
	selector: 'ngsd-column-visibility-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './column-visibility-feature.component.html',
	styleUrls: ['./column-visibility-feature.component.scss'],
})
export class ColumnVisibilityFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	employees: Employee[] = [
		{ id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering', role: 'Senior Developer', salary: 120000, status: 'Active' },
		{ id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Marketing', role: 'Marketing Manager', salary: 95000, status: 'Active' },
		{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', department: 'Sales', role: 'Sales Rep', salary: 75000, status: 'Active' },
		{ id: 4, name: 'Alice Brown', email: 'alice@example.com', department: 'HR', role: 'HR Manager', salary: 88000, status: 'On Leave' },
		{ id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', department: 'Engineering', role: 'Developer', salary: 100000, status: 'Active' },
	];

	allColumns: TanGridColumn<Employee>[] = [
		{ header: 'ID', accessorKey: 'id' },
		{ header: 'Name', accessorKey: 'name' },
		{ header: 'Email', accessorKey: 'email' },
		{ header: 'Department', accessorKey: 'department' },
		{ header: 'Role', accessorKey: 'role' },
		{ header: 'Salary', accessorKey: 'salary' },
		{ header: 'Status', accessorKey: 'status' },
	];

	visibleColumns = signal<TanGridColumn<Employee>[]>([]);

	constructor() {
		// Initially show all columns
		this.visibleColumns.set([...this.allColumns]);
	}

	toggleColumn(columnKey: string | undefined) {
		if (!columnKey) return;
		
		this.visibleColumns.update((cols) => {
			const column = this.allColumns.find((c) => c.accessorKey === columnKey);
			if (!column) return cols;

			const isVisible = cols.some((c) => c.accessorKey === columnKey);
			if (isVisible) {
				// Hide column
				return cols.filter((c) => c.accessorKey !== columnKey);
			} else {
				// Show column - insert at original position
				const originalIndex = this.allColumns.findIndex((c) => c.accessorKey === columnKey);
				const newCols = [...cols];
				newCols.splice(originalIndex, 0, column);
				return newCols;
			}
		});
	}

	isColumnVisible(columnKey: string | undefined): boolean {
		if (!columnKey) return false;
		return this.visibleColumns().some((c) => c.accessorKey === columnKey);
	}

	code = `import { Component, signal } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-employees-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <div class="column-controls">
      <label *ngFor="let col of allColumns">
        <input
          type="checkbox"
          [checked]="isColumnVisible(col.accessorKey)"
          (change)="toggleColumn(col.accessorKey)"
        />
        {{ col.header }}
      </label>
    </div>
    
    <tan-grid 
      [data]="employees" 
      [columns]="visibleColumns()"
    ></tan-grid>
  \`
})
export class EmployeesTableComponent {
  allColumns: TanGridColumn<Employee>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Email', accessorKey: 'email' },
    // ... more columns
  ];

  visibleColumns = signal<TanGridColumn<Employee>[]>([]);

  toggleColumn(columnKey: string | undefined) {
    // Show/hide columns dynamically
    if (!columnKey) return;
    // ... implementation
  }
}`;
}

