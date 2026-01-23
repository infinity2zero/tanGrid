import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngsd-features',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="docs-content">
      <h1>Features Guide</h1>
      <p class="lead">Deep dive into the powerful features of TanGrid.</p>
      
      <section>
        <h2>Sorting & Filtering</h2>
        <p>
          Sorting and filtering are enabled by default for all columns when you enable them on the table level. 
          You can also control them per-column.
        </p>
        <div class="code-block">
          <pre><code>&lt;tan-grid
  [data]="users"
  [columns]="columns"
  [sorting]="true"
  [filtering]="true"
&gt;&lt;/tan-grid&gt;</code></pre>
        </div>
        <p>Per-column configuration:</p>
        <div class="code-block">
          <pre><code>{{ '{' }}
  accessorKey: 'actions',
  sortable: false,
  filterable: false
{{ '}' }}</code></pre>
        </div>
      </section>

      <section>
        <h2>Virtual Scrolling</h2>
        <p>
          For handling large datasets (e.g., 10,000+ rows), enable virtual scrolling. 
          This renders only the rows currently visible in the viewport, significantly improving performance.
        </p>
        <div class="code-block">
          <pre><code>&lt;tan-grid
  [data]="largeDataset"
  [columns]="columns"
  [virtualScroll]="true"
  [rowHeight]="48"
  [virtualScrollBufferSize]="5"
  [virtualScrollViewportHeight]="500"
&gt;&lt;/tan-grid&gt;</code></pre>
        </div>
        <p><strong>Note:</strong> You must specify a fixed <code>rowHeight</code> and ideally a <code>virtualScrollViewportHeight</code>.</p>
      </section>

      <section>
        <h2>Column Reordering</h2>
        <p>Enable drag-and-drop column reordering by setting <code>[reorderable]="true"</code>.</p>
        <div class="code-block">
          <pre><code>&lt;tan-grid
  [data]="data"
  [columns]="columns"
  [reorderable]="true"
  (columnOrderChange)="onOrderChange($event)"
&gt;&lt;/tan-grid&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>Column Pinning</h2>
        <p>Pin columns to the left or right to keep them visible while scrolling horizontally.</p>
        <div class="code-block">
          <pre><code>&lt;tan-grid
  [data]="data"
  [columns]="columns"
  [pinnedLeft]="['id', 'name']"
  [pinnedRight]="['actions']"
&gt;&lt;/tan-grid&gt;</code></pre>
        </div>
        <p>You can also enable UI controls for pinning in headers via <code>[enablePinning]="true"</code>.</p>
      </section>

      <section>
        <h2>Inline Editing</h2>
        <p>Enable editing globally or per-column.</p>
        <div class="code-block">
          <pre><code>// Column definition
{{ '{' }}
  accessorKey: 'email',
  editable: true,
  editType: 'email', // text, number, date, etc.
  editValidator: (val) => val.includes('&#64;') ? true : 'Invalid'
{{ '}' }}</code></pre>
        </div>
        <div class="code-block">
          <pre><code>&lt;tan-grid
  [editable]="true"
  (cellEditChange)="onSave($event)"
&gt;&lt;/tan-grid&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>Row Expansion</h2>
        <p>Show detailed information by expanding rows.</p>
        <div class="code-block">
          <pre><code>&lt;tan-grid
  [expandable]="true"
  [expandedRowTemplate]="detailTemplate"
&gt;&lt;/tan-grid&gt;

&lt;ng-template #detailTemplate let-row&gt;
  &lt;div class="p-4"&gt;
    &lt;h3&gt;Details for {{ '{' }}{{ '{' }} row.name {{ '}' }}{{ '}' }}&lt;/h3&gt;
    &lt;p&gt;Additional info...&lt;/p&gt;
  &lt;/div&gt;
&lt;/ng-template&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>Pagination</h2>
        <p>Built-in client-side pagination or server-side support.</p>
        <div class="code-block">
          <pre><code>&lt;tan-grid
  [pagination]="true"
  [pageSize]="10"
  [pageSizeOptions]="[10, 25, 50]"
&gt;&lt;/tan-grid&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>Server-side Data</h2>
        <p>
          Handle large datasets by moving pagination, sorting, and filtering to the server.
          Set the corresponding mode to <code>'server'</code> and listen for change events.
        </p>
        <div class="code-block">
          <pre><code>&lt;tan-grid
  [data]="serverData"
  [totalItems]="totalRecords"
  [paginationMode]="'server'"
  [sortingMode]="'server'"
  [filteringMode]="'server'"
  (paginationChange)="loadPage($event)"
  (sortChange)="loadSorted($event)"
  (filterChange)="loadFiltered($event)"
&gt;&lt;/tan-grid&gt;</code></pre>
        </div>
      </section>

      <div class="next-steps">
        <a routerLink="/docs/theming" class="btn-link">Next: Theming & Customization <span class="mdi mdi-arrow-right"></span></a>
      </div>
    </div>
  `,
  styles: [`
    
  `]
})
export class FeaturesComponent {}
