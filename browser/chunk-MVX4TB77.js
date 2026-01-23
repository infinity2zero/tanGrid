import{h as g}from"./chunk-N2OXIYGH.js";import{Bb as e,Eb as l,Gb as m,Jb as s,La as r,fa as o,mb as n,nb as t,ob as d,uc as c}from"./chunk-5NTUSMKZ.js";var h=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275cmp=o({type:i,selectors:[["ngsd-features"]],standalone:!0,features:[s],decls:112,vars:8,consts:[[1,"docs-content"],[1,"lead"],[1,"code-block"],[1,"next-steps"],["routerLink","/docs/theming",1,"btn-link"],[1,"mdi","mdi-arrow-right"]],template:function(a,u){a&1&&(n(0,"div",0)(1,"h1"),e(2,"Features Guide"),t(),n(3,"p",1),e(4,"Deep dive into the powerful features of TanGrid."),t(),n(5,"section")(6,"h2"),e(7,"Sorting & Filtering"),t(),n(8,"p"),e(9," Sorting and filtering are enabled by default for all columns when you enable them on the table level. You can also control them per-column. "),t(),n(10,"div",2)(11,"pre")(12,"code"),e(13,`<tan-grid
  [data]="users"
  [columns]="columns"
  [sorting]="true"
  [filtering]="true"
></tan-grid>`),t()()(),n(14,"p"),e(15,"Per-column configuration:"),t(),n(16,"div",2)(17,"pre")(18,"code"),e(19),t()()()(),n(20,"section")(21,"h2"),e(22,"Virtual Scrolling"),t(),n(23,"p"),e(24," For handling large datasets (e.g., 10,000+ rows), enable virtual scrolling. This renders only the rows currently visible in the viewport, significantly improving performance. "),t(),n(25,"div",2)(26,"pre")(27,"code"),e(28,`<tan-grid
  [data]="largeDataset"
  [columns]="columns"
  [virtualScroll]="true"
  [rowHeight]="48"
  [virtualScrollBufferSize]="5"
  [virtualScrollViewportHeight]="500"
></tan-grid>`),t()()(),n(29,"p")(30,"strong"),e(31,"Note:"),t(),e(32," You must specify a fixed "),n(33,"code"),e(34,"rowHeight"),t(),e(35," and ideally a "),n(36,"code"),e(37,"virtualScrollViewportHeight"),t(),e(38,"."),t()(),n(39,"section")(40,"h2"),e(41,"Column Reordering"),t(),n(42,"p"),e(43,"Enable drag-and-drop column reordering by setting "),n(44,"code"),e(45,'[reorderable]="true"'),t(),e(46,"."),t(),n(47,"div",2)(48,"pre")(49,"code"),e(50,`<tan-grid
  [data]="data"
  [columns]="columns"
  [reorderable]="true"
  (columnOrderChange)="onOrderChange($event)"
></tan-grid>`),t()()()(),n(51,"section")(52,"h2"),e(53,"Column Pinning"),t(),n(54,"p"),e(55,"Pin columns to the left or right to keep them visible while scrolling horizontally."),t(),n(56,"div",2)(57,"pre")(58,"code"),e(59,`<tan-grid
  [data]="data"
  [columns]="columns"
  [pinnedLeft]="['id', 'name']"
  [pinnedRight]="['actions']"
></tan-grid>`),t()()(),n(60,"p"),e(61,"You can also enable UI controls for pinning in headers via "),n(62,"code"),e(63,'[enablePinning]="true"'),t(),e(64,"."),t()(),n(65,"section")(66,"h2"),e(67,"Inline Editing"),t(),n(68,"p"),e(69,"Enable editing globally or per-column."),t(),n(70,"div",2)(71,"pre")(72,"code"),e(73),t()()(),n(74,"div",2)(75,"pre")(76,"code"),e(77,`<tan-grid
  [editable]="true"
  (cellEditChange)="onSave($event)"
></tan-grid>`),t()()()(),n(78,"section")(79,"h2"),e(80,"Row Expansion"),t(),n(81,"p"),e(82,"Show detailed information by expanding rows."),t(),n(83,"div",2)(84,"pre")(85,"code"),e(86),t()()()(),n(87,"section")(88,"h2"),e(89,"Pagination"),t(),n(90,"p"),e(91,"Built-in client-side pagination or server-side support."),t(),n(92,"div",2)(93,"pre")(94,"code"),e(95,`<tan-grid
  [pagination]="true"
  [pageSize]="10"
  [pageSizeOptions]="[10, 25, 50]"
></tan-grid>`),t()()()(),n(96,"section")(97,"h2"),e(98,"Server-side Data"),t(),n(99,"p"),e(100," Handle large datasets by moving pagination, sorting, and filtering to the server. Set the corresponding mode to "),n(101,"code"),e(102,"'server'"),t(),e(103," and listen for change events. "),t(),n(104,"div",2)(105,"pre")(106,"code"),e(107,`<tan-grid
  [data]="serverData"
  [totalItems]="totalRecords"
  [paginationMode]="'server'"
  [sortingMode]="'server'"
  [filteringMode]="'server'"
  (paginationChange)="loadPage($event)"
  (sortChange)="loadSorted($event)"
  (filterChange)="loadFiltered($event)"
></tan-grid>`),t()()()(),n(108,"div",3)(109,"a",4),e(110,"Next: Theming & Customization "),d(111,"span",5),t()()()),a&2&&(r(19),l("","{",`
  accessorKey: 'actions',
  sortable: false,
  filterable: false
`,"}",""),r(54),l(`// Column definition
`,"{",`
  accessorKey: 'email',
  editable: true,
  editType: 'email', // text, number, date, etc.
  editValidator: (val) => val.includes('@') ? true : 'Invalid'
`,"}",""),r(13),m(`<tan-grid
  [expandable]="true"
  [expandedRowTemplate]="detailTemplate"
></tan-grid>

<ng-template #detailTemplate let-row>
  <div class="p-4">
    <h3>Details for `,"{","","{"," row.name ","}","","}",`</h3>
    <p>Additional info...</p>
  </div>
</ng-template>`))},dependencies:[c,g]})}}return i})();export{h as FeaturesComponent};
