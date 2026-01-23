import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngsd-getting-started',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="docs-content">
      <h1>Getting Started</h1>
      <p class="lead">
        A powerful, feature-rich, and highly customizable data table component for Angular, built on top of the headless UI library TanStack Table.
      </p>

      <section>
        <h2>Introduction</h2>
        <p>
          <code>TanGrid</code> provides a production-grade data table solution that combines the power and flexibility of TanStack Table with the ease of use of a pre-built Angular component. It is designed to handle complex data scenarios with ease.
        </p>
        <h3>Key Features</h3>
        <ul class="feature-list">
          <li><span class="mdi mdi-rocket-launch"></span> <strong>High Performance:</strong> Virtual scrolling support for rendering thousands of rows efficiently.</li>
          <li><span class="mdi mdi-refresh"></span> <strong>Sorting & Filtering:</strong> Multi-column sorting and global/column-specific filtering.</li>
          <li><span class="mdi mdi-file-document-outline"></span> <strong>Pagination:</strong> Built-in pagination with customizable page sizes.</li>
          <li><span class="mdi mdi-arrow-left-right"></span> <strong>Column Reordering:</strong> Drag-and-drop column reordering using SortableJS.</li>
          <li><span class="mdi mdi-pin"></span> <strong>Column Pinning:</strong> Pin columns to the left or right.</li>
          <li><span class="mdi mdi-pencil"></span> <strong>Inline Editing:</strong> Edit cell values directly within the table.</li>
          <li><span class="mdi mdi-palette"></span> <strong>Theming:</strong> Multiple built-in themes and extensive SCSS customization.</li>
        </ul>
      </section>

      <section>
        <h2>Prerequisites</h2>
        <ul>
          <li>Angular 17+</li>
          <li>Node.js 18+</li>
        </ul>
      </section>

      <section>
        <h2>Installation</h2>
        <p>Install the package and its required peer dependencies:</p>
        <div class="code-block">
          <pre><code>npm install tangrid &#64;tanstack/angular-table &#64;tanstack/angular-virtual sortablejs</code></pre>
        </div>
        <p>If you plan to use features that rely on Angular CDK (optional but recommended):</p>
        <div class="code-block">
          <pre><code>npm install &#64;angular/cdk</code></pre>
        </div>
      </section>

      <section>
        <h2>Setup</h2>
        <p>1. Import the styles in your global styles file (e.g., <code>styles.scss</code>):</p>
        <div class="code-block">
          <pre><code>&#64;import 'tangrid/styles/main';</code></pre>
        </div>

        <p>2. Import the <code>TanGrid</code> component in your standalone component:</p>
        <div class="code-block">
          <pre><code>import {{ '{' }} Component {{ '}' }} from '&#64;angular/core';
import {{ '{' }} TanGrid, TanGridColumn {{ '}' }} from 'tangrid';

interface User {{ '{' }}
  id: number;
  name: string;
  email: string;
  role: string;
{{ '}' }}

&#64;Component({{ '{' }}
  selector: 'app-users-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    &lt;tan-grid
      [data]="users"
      [columns]="columns"
      [pagination]="true"
      [sorting]="true"
      [filtering]="true"
    &gt;&lt;/tan-grid&gt;
  \`,
{{ '}' }})
export class UsersTableComponent {{ '{' }}
  users: User[] = [
    {{ '{' }} id: 1, name: 'John Doe', email: 'john&#64;example.com', role: 'Admin' {{ '}' }},
    {{ '{' }} id: 2, name: 'Jane Smith', email: 'jane&#64;example.com', role: 'User' {{ '}' }},
  ];

  columns: TanGridColumn&lt;User&gt;[] = [
    {{ '{' }} header: 'ID', accessorKey: 'id', width: '50px' {{ '}' }},
    {{ '{' }} header: 'Name', accessorKey: 'name', sortable: true, filterable: true {{ '}' }},
    {{ '{' }} header: 'Email', accessorKey: 'email' {{ '}' }},
    {{ '{' }} 
      header: 'Role', 
      accessorKey: 'role',
      cell: (ctx) => \`<span class="badge">\${{ '{' }}ctx.row.role{{ '}' }}</span>\` 
    {{ '}' }},
  ];
{{ '}' }}</code></pre>
        </div>
      </section>
      
      <div class="next-steps">
        <a routerLink="/docs/core-concepts" class="btn-link">Next: Core Concepts <span class="mdi mdi-arrow-right"></span></a>
      </div>
    </div>
  `,
  styles: [`
    
  `]
})
export class GettingStartedComponent {}