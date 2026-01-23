import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngsd-recipes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="docs-content">
      <h1>Recipes / Patterns</h1>
      <p class="lead">Common usage patterns and advanced examples.</p>
      
      <section>
        <h2>Custom Cell Renderer</h2>
        <p>Use Angular templates to render custom content in cells, such as status badges or action buttons.</p>
        <div class="code-block">
          <pre><code>// In your component
&#64;Component({{ '{' }}
  template: \`
    &lt;tan-grid [data]="data" [columns]="columns"&gt;
      &lt;ng-template #statusCell let-row="row"&gt;
        &lt;span [class]="'badge ' + row.status"&gt;
          {{ '{' }}{{ '{' }} row.status {{ '}' }}{{ '}' }}
        &lt;/span&gt;
      &lt;/ng-template&gt;
    &lt;/tan-grid&gt;
  \`
{{ '}' }})
export class MyComponent {{ '{' }}
  &#64;ViewChild('statusCell') statusCell: TemplateRef&lt;any&gt;;

  ngOnInit() {{ '{' }}
    this.columns = [
      {{ '{' }}
        accessorKey: 'status',
        header: 'Status',
        cell: this.statusCell // Pass the template ref
      {{ '}' }}
    ];
  {{ '}' }}
{{ '}' }}</code></pre>
        </div>
      </section>

      <section>
        <h2>Row Selection</h2>
        <p>Enable checkbox selection for rows and handle selection changes.</p>
        <div class="code-block">
            <pre><code>&lt;tan-grid
  [data]="users"
  [columns]="columns"
  [enableRowSelection]="true"
  (selectionChange)="onSelectionChange($event)"
&gt;&lt;/tan-grid&gt;

// Component logic
onSelectionChange(selectedRows: User[]) {{ '{' }}
  console.log('Selected users:', selectedRows);
{{ '}' }}</code></pre>
        </div>
      </section>

      <section>
        <h2>Server-Side Pagination</h2>
        <p>Handle data fetching manually when page changes.</p>
        <div class="code-block">
          <pre><code>onPageChange(event: PageEvent) {{ '{' }}
  this.loading = true;
  this.apiService.getUsers(event.pageIndex, event.pageSize)
    .subscribe(response => {{ '{' }}
      this.data = response.items;
      this.total = response.total;
      this.loading = false;
    {{ '}' }});
{{ '}' }}</code></pre>
        </div>
      </section>
      
       <div class="next-steps">
        <a routerLink="/demo" class="btn-link">Back to Live Demo <span class="mdi mdi-arrow-right"></span></a>
      </div>
    </div>
  `,
  styles: []
})
export class RecipesComponent {}