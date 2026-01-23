import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Task {
	id: number;
	title: string;
	assignee: string;
	priority: string;
	status: string;
	dueDate: string;
}

@Component({
	selector: 'ngsd-selection-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './selection-feature.component.html',
	styleUrls: ['./selection-feature.component.scss'],
})
export class SelectionFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal<{ single: boolean; multiple: boolean }>({ single: false, multiple: false });
	selectedRows = signal<Task[]>([]);
	tableTheme = this.tableThemeService.theme;

	tasks: Task[] = [
		{ id: 1, title: 'Design homepage', assignee: 'Alice', priority: 'High', status: 'In Progress', dueDate: '2024-01-15' },
		{ id: 2, title: 'Implement API', assignee: 'Bob', priority: 'Medium', status: 'Todo', dueDate: '2024-01-20' },
		{ id: 3, title: 'Write tests', assignee: 'Charlie', priority: 'High', status: 'Done', dueDate: '2024-01-10' },
		{ id: 4, title: 'Code review', assignee: 'Diana', priority: 'Low', status: 'In Progress', dueDate: '2024-01-18' },
		{ id: 5, title: 'Deploy to staging', assignee: 'Eve', priority: 'Medium', status: 'Todo', dueDate: '2024-01-25' },
	];

	columns: TanGridColumn<Task>[] = [
		{ header: 'ID', accessorKey: 'id' },
		{ header: 'Title', accessorKey: 'title' },
		{ header: 'Assignee', accessorKey: 'assignee' },
		{ header: 'Priority', accessorKey: 'priority' },
		{ header: 'Status', accessorKey: 'status' },
		{ header: 'Due Date', accessorKey: 'dueDate' },
	];

	toggleCode(type: 'single' | 'multiple') {
		this.showCode.update((state) => ({ ...state, [type]: !state[type] }));
	}

	onSelectionChange(rows: Task[]) {
		this.selectedRows.set(rows);
	}

	getSelectedTitles(): string {
		return this.selectedRows()
			.map((r) => r.title)
			.join(', ');
	}

	singleCode = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Task {
  id: number;
  title: string;
  assignee: string;
  priority: string;
  status: string;
  dueDate: string;
}

@Component({
  selector: 'app-tasks-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="tasks" 
      [columns]="columns"
      selectionMode="single"
      (selectionChange)="onSelectionChange($event)"
    ></tan-grid>
  \`
})
export class TasksTableComponent {
  tasks: Task[] = [
    { id: 1, title: 'Design homepage', assignee: 'Alice', priority: 'High', status: 'In Progress', dueDate: '2024-01-15' },
    { id: 2, title: 'Implement API', assignee: 'Bob', priority: 'Medium', status: 'Todo', dueDate: '2024-01-20' },
    { id: 3, title: 'Write tests', assignee: 'Charlie', priority: 'High', status: 'Done', dueDate: '2024-01-10' },
    { id: 4, title: 'Code review', assignee: 'Diana', priority: 'Low', status: 'In Progress', dueDate: '2024-01-18' },
    { id: 5, title: 'Deploy to staging', assignee: 'Eve', priority: 'Medium', status: 'Todo', dueDate: '2024-01-25' },
  ];
  
  columns: TanGridColumn<Task>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Title', accessorKey: 'title' },
    { header: 'Assignee', accessorKey: 'assignee' },
    { header: 'Priority', accessorKey: 'priority' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Due Date', accessorKey: 'dueDate' },
  ];

  onSelectionChange(rows: Task[]) {
    // Handle single selection
    console.log('Selected task:', rows[0]);
  }
}`;

	multipleCode = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Task {
  id: number;
  title: string;
  assignee: string;
  priority: string;
  status: string;
  dueDate: string;
}

@Component({
  selector: 'app-tasks-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="tasks" 
      [columns]="columns"
      selectionMode="multiple"
      (selectionChange)="onSelectionChange($event)"
    ></tan-grid>
  \`
})
export class TasksTableComponent {
  tasks: Task[] = [
    { id: 1, title: 'Design homepage', assignee: 'Alice', priority: 'High', status: 'In Progress', dueDate: '2024-01-15' },
    { id: 2, title: 'Implement API', assignee: 'Bob', priority: 'Medium', status: 'Todo', dueDate: '2024-01-20' },
    { id: 3, title: 'Write tests', assignee: 'Charlie', priority: 'High', status: 'Done', dueDate: '2024-01-10' },
    { id: 4, title: 'Code review', assignee: 'Diana', priority: 'Low', status: 'In Progress', dueDate: '2024-01-18' },
    { id: 5, title: 'Deploy to staging', assignee: 'Eve', priority: 'Medium', status: 'Todo', dueDate: '2024-01-25' },
  ];
  
  columns: TanGridColumn<Task>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Title', accessorKey: 'title' },
    { header: 'Assignee', accessorKey: 'assignee' },
    { header: 'Priority', accessorKey: 'priority' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Due Date', accessorKey: 'dueDate' },
  ];

  onSelectionChange(rows: Task[]) {
    // Handle multiple selection
    console.log('Selected tasks:', rows);
    // Perform bulk actions: delete, archive, etc.
  }
}`;
}

