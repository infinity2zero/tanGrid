import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Item {
	id: number;
	name: string;
}

@Component({
	selector: 'ngsd-empty-state-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './empty-state-feature.component.html',
	styleUrls: ['./empty-state-feature.component.scss'],
})
export class EmptyStateFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal<{ default: boolean; custom: boolean }>({ default: false, custom: false });
	tableTheme = this.tableThemeService.theme;

	emptyData: Item[] = [];
	columns: TanGridColumn<Item>[] = [
		{ header: 'ID', accessorKey: 'id' },
		{ header: 'Name', accessorKey: 'name' },
	];

	toggleCode(type: 'default' | 'custom') {
		this.showCode.update((state) => ({ ...state, [type]: !state[type] }));
	}

	code = `import { Component, TemplateRef } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-items-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <!-- Default empty state -->
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      emptyMessage="No items found"
    ></tan-grid>
    
    <!-- Custom empty state template -->
    <ng-template #emptyTemplate>
      <div class="empty-state">
        <div class="empty-state__icon"><span class="mdi mdi-inbox-remove-outline"></span></div>
        <h3>No items yet</h3>
        <p>Get started by adding your first item.</p>
        <button>Add Item</button>
      </div>
    </ng-template>
    
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      [emptyTemplate]="emptyTemplate"
    ></tan-grid>
  \`
})
export class ItemsTableComponent {
  columns: TanGridColumn<Item>[] = [ /* ... */ ];
}`;
}
