import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngsd-api',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="docs-content">
      <h1>API Reference</h1>
      <p class="lead">Detailed documentation for the TanGrid component inputs, outputs, and types.</p>
      
      <section>
        <h2>Inputs</h2>
        <div class="api-table-container">
          <table class="api-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>[data]</code></td>
                <td><code>T[]</code></td>
                <td><code>[]</code></td>
                <td>The array of data to display in the table.</td>
              </tr>
              <tr>
                <td><code>[columns]</code></td>
                <td><code>TanGridColumn&lt;T&gt;[]</code></td>
                <td><code>[]</code></td>
                <td>Configuration for table columns.</td>
              </tr>
              <tr>
                <td><code>[loading]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Whether to show the loading overlay.</td>
              </tr>
              <tr>
                <td><code>[compact]</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>Reduces padding for a denser layout.</td>
              </tr>
              <tr>
                <td><code>[striped]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Adds alternating background colors to rows.</td>
              </tr>
              <tr>
                <td><code>[bordered]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Adds borders to cells and the table container.</td>
              </tr>
              <tr>
                <td><code>[hoverable]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Highlights rows on hover.</td>
              </tr>
              <tr>
                <td><code>[theme]</code></td>
                <td><code>'default' | 'material' | 'bootstrap' | 'ant'</code></td>
                <td><code>'default'</code></td>
                <td>Sets the visual theme of the table.</td>
              </tr>
               <tr>
                <td><code>[pagination]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enables pagination.</td>
              </tr>
              <tr>
                <td><code>[pageSize]</code></td>
                <td><code>number</code></td>
                <td><code>10</code></td>
                <td>Number of items per page.</td>
              </tr>
              <tr>
                <td><code>[sorting]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enables column sorting.</td>
              </tr>
              <tr>
                <td><code>[filtering]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enables column filtering.</td>
              </tr>
               <tr>
                <td><code>[globalSearch]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enables global search functionality.</td>
              </tr>
              <tr>
                <td><code>[virtualScroll]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enables virtual scrolling for large datasets.</td>
              </tr>
              <tr>
                <td><code>[rowHeight]</code></td>
                <td><code>number</code></td>
                <td><code>48</code></td>
                <td>Fixed row height in pixels for virtual scrolling.</td>
              </tr>
              <tr>
                <td><code>[reorderable]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enables drag-and-drop column reordering.</td>
              </tr>
              <tr>
                <td><code>[expandable]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enables row expansion.</td>
              </tr>
              <tr>
                <td><code>[virtualScrollBufferSize]</code></td>
                <td><code>number</code></td>
                <td><code>5</code></td>
                <td>Number of extra items to render outside the viewport.</td>
              </tr>
              <tr>
                <td><code>[virtualScrollViewportHeight]</code></td>
                <td><code>number</code></td>
                <td><code>400</code></td>
                <td>Height of the scrollable viewport in pixels.</td>
              </tr>
              <tr>
                <td><code>[pinnedLeft]</code></td>
                <td><code>string[]</code></td>
                <td><code>[]</code></td>
                <td>List of column IDs to pin to the left.</td>
              </tr>
              <tr>
                <td><code>[pinnedRight]</code></td>
                <td><code>string[]</code></td>
                <td><code>[]</code></td>
                <td>List of column IDs to pin to the right.</td>
              </tr>
              <tr>
                <td><code>[editable]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enables global inline editing.</td>
              </tr>
              <tr>
                <td><code>[enableRowSelection]</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Enables checkbox row selection.</td>
              </tr>
              <tr>
                <td><code>[pageSizeOptions]</code></td>
                <td><code>number[]</code></td>
                <td><code>[10, 20, 50]</code></td>
                <td>Options for items per page selector.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Outputs</h2>
        <div class="api-table-container">
          <table class="api-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>(rowClick)</code></td>
                <td><code>EventEmitter&lt;T&gt;</code></td>
                <td>Emitted when a row is clicked. Returns the row data.</td>
              </tr>
              <tr>
                <td><code>(selectionChange)</code></td>
                <td><code>EventEmitter&lt;T[]&gt;</code></td>
                <td>Emitted when row selection changes. Returns selected rows.</td>
              </tr>
              <tr>
                <td><code>(sortChange)</code></td>
                <td><code>EventEmitter&lt;SortEvent&gt;</code></td>
                <td>Emitted when sorting changes.</td>
              </tr>
               <tr>
                <td><code>(pageChange)</code></td>
                <td><code>EventEmitter&lt;PageEvent&gt;</code></td>
                <td>Emitted when page changes.</td>
              </tr>
              <tr>
                <td><code>(cellEditChange)</code></td>
                <td><code>EventEmitter&lt;any&gt;</code></td>
                <td>Emitted when a cell value is edited.</td>
              </tr>
              <tr>
                <td><code>(columnOrderChange)</code></td>
                <td><code>EventEmitter&lt;string[]&gt;</code></td>
                <td>Emitted when column order changes.</td>
              </tr>
              <tr>
                <td><code>(rowExpandChange)</code></td>
                <td><code>EventEmitter&lt;any&gt;</code></td>
                <td>Emitted when a row is expanded or collapsed.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
       <div class="next-steps">
        <a routerLink="/docs/recipes" class="btn-link">Next: Recipes / Patterns <span class="mdi mdi-arrow-right"></span></a>
      </div>
    </div>
  `,
  styles: []
})
export class ApiComponent {}
