import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngsd-core-concepts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="docs-content">
      <h1>Core Concepts</h1>
      <p class="lead">Understanding the fundamental building blocks of TanGrid.</p>
      
      <section>
        <h2>Architecture</h2>
        <p>
          The library is built on a "Headless UI" philosophy using <a href="https://tanstack.com/table/v8" target="_blank">TanStack Table</a>. 
          This means the core logic (sorting, filtering, pagination state) is decoupled from the rendering. 
          <code>TanGrid</code> wraps this logic in a comprehensive Angular component that handles the UI rendering while exposing the power of the headless core.
        </p>
      </section>

      <section>
        <h2>Data Model</h2>
        <p>The table is generic <code>&lt;T&gt;</code>, ensuring strict type safety. You pass an array of objects to the <code>[data]</code> input.</p>
        <div class="code-block">
          <pre><code>// Your data interface
interface User {{ '{' }}
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
{{ '}' }}

// In your component
users: User[] = [
  {{ '{' }} id: 1, name: 'John', email: 'john&#64;example.com', role: 'admin' {{ '}' }},
  // ...
];</code></pre>
        </div>
      </section>

      <section>
        <h2>Column Definitions</h2>
        <p>Columns define how your data is displayed and interacted with. The <code>TanGridColumn&lt;T&gt;</code> interface is your primary tool for configuration.</p>
        
        <h3>Basic Column</h3>
        <div class="code-block">
          <pre><code>columns: TanGridColumn&lt;User&gt;[] = [
  {{ '{' }}
    accessorKey: 'name', // key in User interface
    header: 'Full Name',
  {{ '}' }}
];</code></pre>
        </div>

        <h3>Advanced Configuration</h3>
        <p>Columns support a wide range of options:</p>
        <ul class="docs-list">
          <li><strong>accessorKey</strong>: The property name in your data object.</li>
          <li><strong>accessorFn</strong>: A function to derive the cell value (<code>row => row.firstName + ' ' + row.lastName</code>).</li>
          <li><strong>header</strong>: String or TemplateRef for the header.</li>
          <li><strong>cell</strong>: TemplateRef for custom cell rendering.</li>
          <li><strong>width / minWidth / maxWidth</strong>: CSS values for column sizing.</li>
          <li><strong>sortable / filterable</strong>: Enable features per column.</li>
          <li><strong>editable</strong>: Enable inline editing for the column.</li>
          <li><strong>visible</strong>: Control initial visibility.</li>
          <li><strong>pinnable</strong>: Control if the column can be pinned.</li>
        </ul>
      </section>

      <section>
        <h2>Signals & Performance</h2>
        <p>
          Internally, the library uses Angular Signals for state management (e.g., selection, expansion, sorting state). 
          This ensures fine-grained reactivity and OnPush change detection compliance, leading to excellent performance even with frequent updates.
        </p>
      </section>

      <div class="next-steps">
        <a routerLink="/docs/features" class="btn-link">Next: Features Guide <span class="mdi mdi-arrow-right"></span></a>
      </div>
    </div>
  `,
  styles: []
})
export class CoreConceptsComponent {}