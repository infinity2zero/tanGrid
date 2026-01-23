import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Financial {
	id: number;
	account: string;
	debit: number;
	credit: number;
	balance: number;
}

@Component({
	selector: 'ngsd-column-alignment-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './column-alignment-feature.component.html',
	styleUrls: ['./column-alignment-feature.component.scss'],
})
export class ColumnAlignmentFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal(false);
	tableTheme = this.tableThemeService.theme;

	financials: Financial[] = [
		{ id: 1, account: 'Cash', debit: 10000, credit: 0, balance: 10000 },
		{ id: 2, account: 'Accounts Receivable', debit: 5000, credit: 2000, balance: 3000 },
		{ id: 3, account: 'Inventory', debit: 15000, credit: 5000, balance: 10000 },
		{ id: 4, account: 'Equipment', debit: 25000, credit: 0, balance: 25000 },
		{ id: 5, account: 'Accounts Payable', debit: 0, credit: 8000, balance: -8000 },
	];

	columns: TanGridColumn<Financial>[] = [
		{ header: 'ID', accessorKey: 'id', align: 'left' },
		{ header: 'Account', accessorKey: 'account', align: 'left' },
		{ header: 'Debit', accessorKey: 'debit', align: 'right' },
		{ header: 'Credit', accessorKey: 'credit', align: 'right' },
		{ header: 'Balance', accessorKey: 'balance', align: 'right' },
	];

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Financial {
  id: number;
  account: string;
  debit: number;
  credit: number;
  balance: number;
}

@Component({
  selector: 'app-financial-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="financials" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class FinancialTableComponent {
  financials: Financial[] = [
    { id: 1, account: 'Cash', debit: 10000, credit: 0, balance: 10000 },
    { id: 2, account: 'Accounts Receivable', debit: 5000, credit: 2000, balance: 3000 },
    { id: 3, account: 'Inventory', debit: 15000, credit: 5000, balance: 10000 },
    { id: 4, account: 'Equipment', debit: 25000, credit: 0, balance: 25000 },
    { id: 5, account: 'Accounts Payable', debit: 0, credit: 8000, balance: -8000 },
  ];
  
  columns: TanGridColumn<Financial>[] = [
    { header: 'ID', accessorKey: 'id', align: 'left' },
    { header: 'Account', accessorKey: 'account', align: 'left' },
    { header: 'Debit', accessorKey: 'debit', align: 'right' },
    { header: 'Credit', accessorKey: 'credit', align: 'right' },
    { header: 'Balance', accessorKey: 'balance', align: 'right' },
  ];
}`;
}

