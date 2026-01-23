import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Document {
	id: number;
	title: string;
	author: string;
	date: string;
	size: string;
	type: string;
}

@Component({
	selector: 'ngsd-column-width-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './column-width-feature.component.html',
	styleUrls: ['./column-width-feature.component.scss'],
})
export class ColumnWidthFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	documents: Document[] = [
		{ id: 1, title: 'Project Proposal', author: 'John Doe', date: '2024-01-15', size: '2.5 MB', type: 'PDF' },
		{ id: 2, title: 'Meeting Notes', author: 'Jane Smith', date: '2024-01-16', size: '150 KB', type: 'DOCX' },
		{ id: 3, title: 'Budget Report', author: 'Bob Johnson', date: '2024-01-17', size: '1.2 MB', type: 'XLSX' },
		{ id: 4, title: 'Design Mockups', author: 'Alice Brown', date: '2024-01-18', size: '5.8 MB', type: 'ZIP' },
		{ id: 5, title: 'Presentation', author: 'Charlie Wilson', date: '2024-01-19', size: '3.1 MB', type: 'PPTX' },
	];

	columns: TanGridColumn<Document>[] = [
		{ header: 'ID', accessorKey: 'id', width: '60px' },
		{ header: 'Title', accessorKey: 'title', width: '300px', minWidth: '200px' },
		{ header: 'Author', accessorKey: 'author', width: '150px' },
		{ header: 'Date', accessorKey: 'date', width: '120px' },
		{ header: 'Size', accessorKey: 'size', width: '100px' },
		{ header: 'Type', accessorKey: 'type', width: '80px', maxWidth: '100px' },
	];

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-documents-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="documents" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class DocumentsTableComponent {
  documents: Document[] = [ /* ... */ ];
  
  columns: TanGridColumn<Document>[] = [
    { header: 'ID', accessorKey: 'id', width: '60px' },
    { header: 'Title', accessorKey: 'title', width: '300px', minWidth: '200px' },
    { header: 'Author', accessorKey: 'author', width: '150px' },
    { header: 'Date', accessorKey: 'date', width: '120px' },
    { header: 'Size', accessorKey: 'size', width: '100px' },
    { header: 'Type', accessorKey: 'type', width: '80px', maxWidth: '100px' },
  ];
}`;
}

