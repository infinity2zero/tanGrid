import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ngsd-theming',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="docs-content">
      <h1>Theming & Customization</h1>
      <p class="lead">Customize every aspect of the table using built-in themes or CSS variables.</p>
      
      <section>
        <h2>Built-in Themes</h2>
        <p>The library comes with several pre-configured themes. You can switch between them using the <code>[theme]</code> input.</p>
        <div class="code-block">
          <pre><code>&lt;tan-grid theme="default"&gt;&lt;/tan-grid&gt;
&lt;tan-grid theme="material"&gt;&lt;/tan-grid&gt;
&lt;tan-grid theme="bootstrap"&gt;&lt;/tan-grid&gt;
&lt;tan-grid theme="ant"&gt;&lt;/tan-grid&gt;</code></pre>
        </div>
      </section>

      <section>
        <h2>CSS Variables</h2>
        <p>TanGrid uses a comprehensive set of CSS variables for styling. You can override these globally in your <code>styles.scss</code> or within a specific scope.</p>
        
        <div class="api-table-container">
          <table class="api-table">
            <thead>
              <tr>
                <th>Variable</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>--ngs-primary</code></td>
                <td>Primary brand color</td>
                <td><span class="color-swatch" style="background: #0070f3"></span> #0070f3</td>
              </tr>
              <tr>
                <td><code>--ngs-primary-hover</code></td>
                <td>Primary color on hover</td>
                <td><span class="color-swatch" style="background: #0060df"></span> #0060df</td>
              </tr>
              <tr>
                <td><code>--ngs-border-radius</code></td>
                <td>Border radius for containers and buttons</td>
                <td>0 (Sharp)</td>
              </tr>
              <tr>
                <td><code>--ngs-bg-primary</code></td>
                <td>Main background color</td>
                <td>#ffffff</td>
              </tr>
              <tr>
                 <td><code>--ngs-bg-secondary</code></td>
                 <td>Secondary background (headers, stripes)</td>
                 <td>#fafafa</td>
              </tr>
              <tr>
                <td><code>--ngs-border-color</code></td>
                <td>Border color</td>
                <td>#eaeaea</td>
              </tr>
               <tr>
                <td><code>--ngs-text-primary</code></td>
                <td>Primary text color</td>
                <td>#000000</td>
              </tr>
               <tr>
                <td><code>--ngs-text-secondary</code></td>
                <td>Secondary text color</td>
                <td>#666666</td>
              </tr>
               <tr>
                <td><code>--ngs-spacing-md</code></td>
                <td>Base spacing unit</td>
                <td>0.5rem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Dark Mode</h2>
        <p>The component is dark-mode ready. Simply update the variables inside a dark theme class.</p>
        <div class="code-block">
          <pre><code>body.dark-theme {{ '{' }}
  --ngs-bg-primary: #111111;
  --ngs-bg-secondary: #1a1a1a;
  --ngs-text-primary: #ffffff;
  --ngs-text-secondary: #a0a0a0;
  --ngs-border-color: #333333;
  --ngs-primary: #3291ff;
{{ '}' }}</code></pre>
        </div>
      </section>

      <div class="next-steps">
        <a routerLink="/docs/api" class="btn-link">Next: API Reference <span class="mdi mdi-arrow-right"></span></a>
      </div>
    </div>
  `,
  styles: []
})
export class ThemingComponent {}
