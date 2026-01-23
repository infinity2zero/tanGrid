import{h as u}from"./chunk-N2OXIYGH.js";import{Bb as n,Eb as r,Gb as d,Hb as c,Jb as m,La as o,fa as s,mb as e,nb as t,ob as l,uc as p}from"./chunk-5NTUSMKZ.js";var C=(()=>{class a{static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275cmp=s({type:a,selectors:[["ngsd-recipes"]],standalone:!0,features:[m],decls:36,vars:18,consts:[[1,"docs-content"],[1,"lead"],[1,"code-block"],[1,"next-steps"],["routerLink","/demo",1,"btn-link"],[1,"mdi","mdi-arrow-right"]],template:function(i,h){i&1&&(e(0,"div",0)(1,"h1"),n(2,"Recipes / Patterns"),t(),e(3,"p",1),n(4,"Common usage patterns and advanced examples."),t(),e(5,"section")(6,"h2"),n(7,"Custom Cell Renderer"),t(),e(8,"p"),n(9,"Use Angular templates to render custom content in cells, such as status badges or action buttons."),t(),e(10,"div",2)(11,"pre")(12,"code"),n(13),t()()()(),e(14,"section")(15,"h2"),n(16,"Row Selection"),t(),e(17,"p"),n(18,"Enable checkbox selection for rows and handle selection changes."),t(),e(19,"div",2)(20,"pre")(21,"code"),n(22),t()()()(),e(23,"section")(24,"h2"),n(25,"Server-Side Pagination"),t(),e(26,"p"),n(27,"Handle data fetching manually when page changes."),t(),e(28,"div",2)(29,"pre")(30,"code"),n(31),t()()()(),e(32,"div",3)(33,"a",4),n(34,"Back to Live Demo "),l(35,"span",5),t()()()),i&2&&(o(13),c([`// In your component
@Component(`,"{",`
  template: \`
    <tan-grid [data]="data" [columns]="columns">
      <ng-template #statusCell let-row="row">
        <span [class]="'badge ' + row.status">
          `,"{","","{"," row.status ","}","","}",`
        </span>
      </ng-template>
    </tan-grid>
  \`
`,"}",`)
export class MyComponent `,"{",`
  @ViewChild('statusCell') statusCell: TemplateRef<any>;

  ngOnInit() `,"{",`
    this.columns = [
      `,"{",`
        accessorKey: 'status',
        header: 'Status',
        cell: this.statusCell // Pass the template ref
      `,"}",`
    ];
  `,"}",`
`,"}",""]),o(9),r(`<tan-grid
  [data]="users"
  [columns]="columns"
  [enableRowSelection]="true"
  (selectionChange)="onSelectionChange($event)"
></tan-grid>

// Component logic
onSelectionChange(selectedRows: User[]) `,"{",`
  console.log('Selected users:', selectedRows);
`,"}",""),o(9),d("onPageChange(event: PageEvent) ","{",`
  this.loading = true;
  this.apiService.getUsers(event.pageIndex, event.pageSize)
    .subscribe(response => `,"{",`
      this.data = response.items;
      this.total = response.total;
      this.loading = false;
    `,"}",`);
`,"}",""))},dependencies:[p,u],encapsulation:2})}}return a})();export{C as RecipesComponent};
