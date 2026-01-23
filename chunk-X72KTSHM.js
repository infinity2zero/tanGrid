import{h as p}from"./chunk-N2OXIYGH.js";import{Bb as e,Eb as o,Hb as d,Jb as s,La as r,fa as m,mb as n,nb as t,ob as i,uc as c}from"./chunk-5NTUSMKZ.js";var f=(()=>{class l{static{this.\u0275fac=function(a){return new(a||l)}}static{this.\u0275cmp=m({type:l,selectors:[["ngsd-getting-started"]],standalone:!0,features:[s],decls:101,vars:24,consts:[[1,"docs-content"],[1,"lead"],[1,"feature-list"],[1,"mdi","mdi-rocket-launch"],[1,"mdi","mdi-refresh"],[1,"mdi","mdi-file-document-outline"],[1,"mdi","mdi-arrow-left-right"],[1,"mdi","mdi-pin"],[1,"mdi","mdi-pencil"],[1,"mdi","mdi-palette"],[1,"code-block"],[1,"badge"],[1,"next-steps"],["routerLink","/docs/core-concepts",1,"btn-link"],[1,"mdi","mdi-arrow-right"]],template:function(a,g){a&1&&(n(0,"div",0)(1,"h1"),e(2,"Getting Started"),t(),n(3,"p",1),e(4," A powerful, feature-rich, and highly customizable data table component for Angular, built on top of the headless UI library TanStack Table. "),t(),n(5,"section")(6,"h2"),e(7,"Introduction"),t(),n(8,"p")(9,"code"),e(10,"TanGrid"),t(),e(11," provides a production-grade data table solution that combines the power and flexibility of TanStack Table with the ease of use of a pre-built Angular component. It is designed to handle complex data scenarios with ease. "),t(),n(12,"h3"),e(13,"Key Features"),t(),n(14,"ul",2)(15,"li"),i(16,"span",3),n(17,"strong"),e(18,"High Performance:"),t(),e(19," Virtual scrolling support for rendering thousands of rows efficiently."),t(),n(20,"li"),i(21,"span",4),n(22,"strong"),e(23,"Sorting & Filtering:"),t(),e(24," Multi-column sorting and global/column-specific filtering."),t(),n(25,"li"),i(26,"span",5),n(27,"strong"),e(28,"Pagination:"),t(),e(29," Built-in pagination with customizable page sizes."),t(),n(30,"li"),i(31,"span",6),n(32,"strong"),e(33,"Column Reordering:"),t(),e(34," Drag-and-drop column reordering using SortableJS."),t(),n(35,"li"),i(36,"span",7),n(37,"strong"),e(38,"Column Pinning:"),t(),e(39," Pin columns to the left or right."),t(),n(40,"li"),i(41,"span",8),n(42,"strong"),e(43,"Inline Editing:"),t(),e(44," Edit cell values directly within the table."),t(),n(45,"li"),i(46,"span",9),n(47,"strong"),e(48,"Theming:"),t(),e(49," Multiple built-in themes and extensive SCSS customization."),t()()(),n(50,"section")(51,"h2"),e(52,"Prerequisites"),t(),n(53,"ul")(54,"li"),e(55,"Angular 17+"),t(),n(56,"li"),e(57,"Node.js 18+"),t()()(),n(58,"section")(59,"h2"),e(60,"Installation"),t(),n(61,"p"),e(62,"Install the package and its required peer dependencies:"),t(),n(63,"div",10)(64,"pre")(65,"code"),e(66,"npm install tangrid @tanstack/angular-table @tanstack/angular-virtual sortablejs"),t()()(),n(67,"p"),e(68,"If you plan to use features that rely on Angular CDK (optional but recommended):"),t(),n(69,"div",10)(70,"pre")(71,"code"),e(72,"npm install @angular/cdk"),t()()()(),n(73,"section")(74,"h2"),e(75,"Setup"),t(),n(76,"p"),e(77,"1. Import the styles in your global styles file (e.g., "),n(78,"code"),e(79,"styles.scss"),t(),e(80,"):"),t(),n(81,"div",10)(82,"pre")(83,"code"),e(84,"@import 'tangrid/styles/main';"),t()()(),n(85,"p"),e(86,"2. Import the "),n(87,"code"),e(88,"TanGrid"),t(),e(89," component in your standalone component:"),t(),n(90,"div",10)(91,"pre")(92,"code"),e(93),n(94,"span",11),e(95),t(),e(96),t()()()(),n(97,"div",12)(98,"a",13),e(99,"Next: Core Concepts "),i(100,"span",14),t()()()),a&2&&(r(93),d(["import ","{"," Component ","}",` from '@angular/core';
import `,"{"," TanGrid, TanGridColumn ","}",` from 'tangrid';

interface User `,"{",`
  id: number;
  name: string;
  email: string;
  role: string;
`,"}",`

@Component(`,"{",`
  selector: 'app-users-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid
      [data]="users"
      [columns]="columns"
      [pagination]="true"
      [sorting]="true"
      [filtering]="true"
    ></tan-grid>
  \`,
`,"}",`)
export class UsersTableComponent `,"{",`
  users: User[] = [
    `,"{"," id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' ","}",`,
    `,"{"," id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' ","}",`,
  ];

  columns: TanGridColumn<User>[] = [
    `,"{"," header: 'ID', accessorKey: 'id', width: '50px' ","}",`,
    `,"{"," header: 'Name', accessorKey: 'name', sortable: true, filterable: true ","}",`,
    `,"{"," header: 'Email', accessorKey: 'email' ","}",`,
    `,"{",` 
      header: 'Role', 
      accessorKey: 'role',
      cell: (ctx) => \``]),r(2),o("$","{","ctx.row.role","}",""),r(),o("` \n    ","}",`,
  ];
`,"}",""))},dependencies:[c,p]})}}return l})();export{f as GettingStartedComponent};
