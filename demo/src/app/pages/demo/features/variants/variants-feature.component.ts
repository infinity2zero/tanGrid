import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Transaction {
	id: number;
	date: string;
	description: string;
	amount: number;
	category: string;
}

@Component({
	selector: 'ngsd-variants-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './variants-feature.component.html',
	styleUrls: ['./variants-feature.component.scss'],
})
export class VariantsFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal<{ striped: boolean; bordered: boolean; hoverable: boolean; compact: boolean }>({
		striped: false,
		bordered: false,
		hoverable: false,
		compact: false,
	});
	tableTheme = this.tableThemeService.theme;

	transactions: Transaction[] = [
		{ id: 1, date: '2024-01-15', description: 'Grocery Shopping', amount: -125.50, category: 'Food' },
		{ id: 2, date: '2024-01-16', description: 'Salary Deposit', amount: 5000.00, category: 'Income' },
		{ id: 3, date: '2024-01-17', description: 'Gas Station', amount: -45.00, category: 'Transport' },
		{ id: 4, date: '2024-01-18', description: 'Restaurant', amount: -85.75, category: 'Food' },
		{ id: 5, date: '2024-01-19', description: 'Freelance Work', amount: 1200.00, category: 'Income' },
	];

	columns: TanGridColumn<Transaction>[] = [
		{ header: 'ID', accessorKey: 'id' },
		{ header: 'Date', accessorKey: 'date' },
		{ header: 'Description', accessorKey: 'description' },
		{ header: 'Amount', accessorKey: 'amount' },
		{ header: 'Category', accessorKey: 'category' },
	];

	toggleCode(variant: 'striped' | 'bordered' | 'hoverable' | 'compact') {
		this.showCode.update((state) => ({ ...state, [variant]: !state[variant] }));
	}

	code = `import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <!-- Striped table -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [striped]="true"
    ></tan-grid>
    
    <!-- Bordered table -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [bordered]="true"
    ></tan-grid>
    
    <!-- Hoverable table -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [hoverable]="true"
    ></tan-grid>
    
    <!-- Compact table -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [compact]="true"
    ></tan-grid>
    
    <!-- Combine multiple variants -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [striped]="true"
      [bordered]="true"
      [hoverable]="true"
    ></tan-grid>
  \`
})
export class TransactionsTableComponent {
  transactions: Transaction[] = [ /* ... */ ];
  columns: TanGridColumn<Transaction>[] = [ /* ... */ ];
}`;
}

