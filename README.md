<p align="center">
  <a href="https://infinity2zero.github.io/tanGrid/">
    <img src="demo/src/public/images/tanGrid-logo.png" alt="tanGrid Logo" width="250" />
  </a>
</p>

<p align="center">
  <a href="https://infinity2zero.github.io/tanGrid/">
    <img src="https://img.shields.io/badge/Docs-Demo-blue?style=for-the-badge&logo=github" alt="Docs & Demo" />
  </a>
</p>

# <span style="color:#0B2447">tan</span><span style="color:#20B2AA">Grid</span>

A powerful, feature-rich, and highly customizable data table component for Angular, built on top of the headless UI library [TanStack Table](https://tanstack.com/table/v8).

## Introduction

`TanGrid` provides a production-grade data table solution that combines the power and flexibility of TanStack Table with the ease of use of a pre-built Angular component. It is designed to handle complex data scenarios with ease, offering features like virtual scrolling, column reordering, server-side operations, and extensive theming capabilities out of the box.

Key design principles:
- **Headless Core**: Leverages TanStack Table for logic, ensuring robustness and flexibility.
- **Performance**: Optimized for large datasets with virtual scrolling support via `@tanstack/angular-virtual`.
- **Developer Experience**: Extensive API with typed interfaces and intuitive configuration.
- **Modern Angular**: Built with Standalone Components and Signals for optimal performance.

## Key Features

- **🚀 High Performance**: Virtual scrolling support for rendering thousands of rows efficiently.
- **🔄 Sorting & Filtering**: Multi-column sorting and global/column-specific filtering.
- **📄 Pagination**: Built-in pagination with customizable page sizes.
- **👆 Selection**: Single and multiple row selection modes.
- **↔️ Column Reordering**: Drag-and-drop column reordering using SortableJS.
- **📌 Column Pinning**: Pin columns to the left or right.
- **✏️ Inline Editing**: Edit cell values directly within the table.
- **📂 Row Expansion**: Expandable rows for showing detailed information.
- **📤 Exporting**: Built-in support for exporting data to CSV, Excel, and PDF.
- **🎨 Theming**: Multiple built-in themes (Material, Bootstrap, Ant Design) and SCSS customization.
- **🌐 Server-side Support**: Full support for server-side sorting, filtering, and pagination.

## Installation

Install the package and its required peer dependencies:

```bash
npm install tangrid @tanstack/angular-table @tanstack/angular-virtual sortablejs
```

Ensure you also have `@angular/cdk` installed if you plan to use specific features that might rely on it (though the core virtual scroll now uses TanStack Virtual).

```bash
npm install @angular/cdk
```

## Basic Usage

Import `TanGrid` in your component:

```typescript
import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [TanGrid],
  template: `
    <tan-grid
      [data]="users"
      [columns]="columns"
      [pagination]="true"
      [sorting]="true"
      [filtering]="true"
      globalFilterPlaceholder="Search users..."
    ></tan-grid>
  `,
})
export class UsersTableComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    // ... more data
  ];

  columns: TanGridColumn<User>[] = [
    { header: 'ID', accessorKey: 'id', width: '50px' },
    { header: 'Name', accessorKey: 'name', sortable: true, filterable: true },
    { header: 'Email', accessorKey: 'email' },
    { 
      header: 'Role', 
      accessorKey: 'role',
      cell: (ctx) => `<span class="badge">${ctx.row.role}</span>` // Or use a TemplateRef
    },
  ];
}
```

## Theming

The default theme is included with the component. For Material, Bootstrap, Ant, or Ant-alt themes, add the optional theme CSS to your global styles:

**angular.json:**
```json
"styles": [
  "node_modules/tangrid/styles/themes/material.css",
  "node_modules/tangrid/styles/themes/bootstrap.css"
]
```

**Or in `styles.scss`:**
```scss
@import 'tangrid/styles/themes/material.css';
@import 'tangrid/styles/themes/bootstrap.css';
```

Use the `[theme]` input to switch: `theme="default"` | `theme="material"` | `theme="bootstrap"` | `theme="ant"` | `theme="ant-alt"`.

## API Reference

### `<tan-grid>` Component

#### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `data` | `T[]` | `[]` | Array of data objects to display. |
| `columns` | `TanGridColumn<T>[]` | `[]` | Column definitions. |
| `pagination` | `boolean` | `false` | Enable pagination. |
| `sorting` | `boolean` | `false` | Enable sorting. |
| `filtering` | `boolean` | `false` | Enable filtering. |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author
Created by **infinity2zero**.
