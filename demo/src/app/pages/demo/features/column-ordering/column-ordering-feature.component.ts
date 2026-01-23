import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { TableThemeService } from '../../../../services/table-theme.service';

interface User {
	id: number;
	name: string;
	email: string;
	role: string;
	status: string;
	createdAt: string;
}

@Component({
	selector: 'ngsd-column-ordering-feature',
	standalone: true,
	imports: [CommonModule, TanGrid, CodeViewerComponent],
	templateUrl: './column-ordering-feature.component.html',
	styleUrls: ['./column-ordering-feature.component.scss'],
})
export class ColumnOrderingFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	users: User[] = [
		{ id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-15' },
		{ id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Pending', createdAt: '2024-02-03' },
		{ id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Inactive', createdAt: '2024-02-20' },
		{ id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Editor', status: 'Active', createdAt: '2024-03-01' },
		{ id: 5, name: 'Emma Brown', email: 'emma@example.com', role: 'Admin', status: 'Active', createdAt: '2024-03-12' },
	];

	columns: TanGridColumn<User>[] = [
		{ header: 'ID', accessorKey: 'id', width: '80px' },
		{ header: 'Name', accessorKey: 'name', width: '200px' },
		{ header: 'Email', accessorKey: 'email', width: '260px' },
		{ header: 'Role', accessorKey: 'role', width: '120px' },
		{ header: 'Status', accessorKey: 'status', width: '120px' },
		{ header: 'Created At', accessorKey: 'createdAt', width: '140px' },
	];

	columnOrder = signal<string[]>([]);

	onColumnOrderChange(order: string[]): void {
		this.columnOrder.set(order);
	}

	getColumnLabel(columnId: string): string {
		const column = this.columns.find((col) => {
			const id = col.id || String(col.accessorKey || '');
			return id === columnId;
		});

		if (!column) {
			return columnId;
		}

		if (typeof column.header === 'string') {
			return column.header;
		}

		return String(column.header);
	}

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

@Component({
  selector: 'app-column-ordering-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid
      [data]="users"
      [columns]="columns"
      [reorderable]="true"
      [pagination]="false"
    ></tan-grid>
  \`
})
export class ColumnOrderingTableComponent {
  users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-15' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Pending', createdAt: '2024-02-03' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Inactive', createdAt: '2024-02-20' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Editor', status: 'Active', createdAt: '2024-03-01' },
    { id: 5, name: 'Emma Brown', email: 'emma@example.com', role: 'Admin', status: 'Active', createdAt: '2024-03-12' },
  ];

  columns: TanGridColumn<User>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Email', accessorKey: 'email' },
    { header: 'Role', accessorKey: 'role' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Created At', accessorKey: 'createdAt' },
  ];
}`;
}

