import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Notification {
	id: number;
	title: string;
	message: string;
	type: string;
	timestamp: string;
	read: boolean;
}

@Component({
	selector: 'ngsd-row-events-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './row-events-feature.component.html',
	styleUrls: ['./row-events-feature.component.scss'],
})
export class RowEventsFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal<{ click: boolean; dblclick: boolean }>({ click: false, dblclick: false });
	lastEvent = signal<string>('');
	tableTheme = this.tableThemeService.theme;

	notifications: Notification[] = [
		{ id: 1, title: 'New Message', message: 'You have a new message from John', type: 'info', timestamp: '2024-01-15 10:30', read: false },
		{ id: 2, title: 'Task Completed', message: 'Your task has been completed', type: 'success', timestamp: '2024-01-15 09:15', read: true },
		{ id: 3, title: 'Payment Received', message: 'Payment of $500 received', type: 'success', timestamp: '2024-01-14 16:45', read: false },
		{ id: 4, title: 'Reminder', message: 'Don\'t forget the meeting at 3 PM', type: 'warning', timestamp: '2024-01-14 14:20', read: true },
		{ id: 5, title: 'System Update', message: 'System will be updated tonight', type: 'info', timestamp: '2024-01-13 18:00', read: false },
	];

	columns: TanGridColumn<Notification>[] = [
		{ header: 'ID', accessorKey: 'id' },
		{ header: 'Title', accessorKey: 'title' },
		{ header: 'Message', accessorKey: 'message' },
		{ header: 'Type', accessorKey: 'type' },
		{ header: 'Timestamp', accessorKey: 'timestamp' },
		{ header: 'Read', accessorKey: 'read' },
	];

	toggleCode(type: 'click' | 'dblclick') {
		this.showCode.update((state) => ({ ...state, [type]: !state[type] }));
	}

	onRowClick(event: { row: Notification; index: number }) {
		this.lastEvent.set(`Clicked row ${event.index + 1}: "${event.row.title}"`);
		console.log('Row clicked:', event);
	}

	onRowDblClick(event: { row: Notification; index: number }) {
		this.lastEvent.set(`Double-clicked row ${event.index + 1}: "${event.row.title}" - Opening details...`);
		console.log('Row double-clicked:', event);
	}

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-notifications-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="notifications" 
      [columns]="columns"
      (rowClick)="onRowClick($event)"
      (rowDblClick)="onRowDblClick($event)"
    ></tan-grid>
  \`
})
export class NotificationsTableComponent {
  notifications: Notification[] = [ /* ... */ ];
  
  columns: TanGridColumn<Notification>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Title', accessorKey: 'title' },
    // ... more columns
  ];

  onRowClick(event: { row: Notification; index: number }) {
    // Mark as read, show preview, etc.
    console.log('Row clicked:', event);
  }

  onRowDblClick(event: { row: Notification; index: number }) {
    // Open details modal, navigate to detail page, etc.
    console.log('Row double-clicked:', event);
    this.openDetails(event.row);
  }
}`;
}

