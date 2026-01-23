import { Component, signal, inject } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { TableThemeService } from '../../../../services/table-theme.service';

interface Data {
	id: number;
	name: string;
	value: string;
}

@Component({
	selector: 'ngsd-loading-feature',
	standalone: true,
	imports: [TanGrid, CodeViewerComponent, CommonModule],
	templateUrl: './loading-feature.component.html',
	styleUrls: ['./loading-feature.component.scss'],
})
export class LoadingFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	showCode = signal<{ spinner: boolean; placeholder: boolean; custom: boolean }>({
		spinner: false,
		placeholder: false,
		custom: false,
	});

	loading = signal(true);
	tableTheme = this.tableThemeService.theme;
	columns: TanGridColumn<Data>[] = [
		{ header: 'ID', accessorKey: 'id' },
		{ header: 'Name', accessorKey: 'name' },
		{ header: 'Value', accessorKey: 'value' },
	];

	toggleCode(type: 'spinner' | 'placeholder' | 'custom') {
		this.showCode.update((state) => ({ ...state, [type]: !state[type] }));
	}

	code = `import { Component, signal } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <!-- Spinner loader -->
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      [loading]="loading()"
      loadingType="spinner"
    ></tan-grid>
    
    <!-- Placeholder (skeleton) loader -->
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      [loading]="loading()"
      loadingType="placeholder"
      [placeholderRows]="5"
    ></tan-grid>
    
    <!-- Custom template loader -->
    <ng-template #customLoader>
      <div class="custom-loading">
        <p>Loading your data...</p>
      </div>
    </ng-template>
    
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      [loading]="loading()"
      loadingType="template"
      [loadingTemplate]="customLoader"
    ></tan-grid>
  \`
})
export class DataTableComponent {
  loading = signal(true);
  columns: TanGridColumn<Data>[] = [ /* ... */ ];
}`;
}
