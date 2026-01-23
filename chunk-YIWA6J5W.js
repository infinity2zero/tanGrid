import{a as R}from"./chunk-NWN36NCE.js";import{a as N}from"./chunk-VCEQSUYG.js";import{a as L}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as l,Cb as _,Db as E,Jb as z,Kb as O,La as s,Mb as V,Ob as A,Pb as $,Ya as D,aa as w,bb as h,cb as x,db as p,fa as b,hb as C,mb as r,nb as n,nc as G,oa as c,ob as f,oc as U,pa as u,pc as k,sb as I,sc as K,ub as v,uc as H,vb as T,xb as F,yb as P,zb as M}from"./chunk-5NTUSMKZ.js";var B=["statusTemplate"],Q=()=>[5,10,20];function q(i,m){i&1&&(r(0,"span"),l(1,"Hide Code"),n(),f(2,"span",15))}function j(i,m){i&1&&(r(0,"span"),l(1,"Show Code"),n(),f(2,"span",16))}function J(i,m){if(i&1&&(r(0,"span",17),l(1),n()),i&2){let e=m.row;p("ngClass",e.status.toLowerCase()),s(),_(e.status)}}function W(i,m){if(i&1&&(r(0,"div",18)(1,"span",19),l(2),V(3,"date"),n(),r(4,"span"),l(5),n()()),i&2){let e=m.$implicit;s(2),E("[",A(3,2,e.time,"HH:mm:ss"),"]"),s(3),_(e.message)}}function X(i,m){i&1&&(r(0,"div"),l(1,"No activity yet."),n())}function Y(i,m){if(i&1&&f(0,"ngsd-code-viewer",14),i&2){let e=T();p("code",e.code)}}var le=(()=>{class i{constructor(){this.tableThemeService=w(N),this.showCode=D(!1),this.tableTheme=this.tableThemeService.theme,this.data=[],this.loading=!1,this.totalItems=0,this.pageIndex=0,this.pageSize=10,this.logs=[],this.allUsers=Array.from({length:100},(e,a)=>({id:a+1,name:`User ${a+1}`,email:`user${a+1}@example.com`,role:["Admin","User","Editor","Viewer"][a%4],status:["Active","Inactive","Pending"][a%3]})),this.columns=[],this.code=`import { Component, OnInit } from '@angular/core';
import { TanGrid, TanGridColumn, TanGridPagination, TanGridSort, TanGridFilter } from 'tangrid';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-server-data-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid
      [data]="data"
      [columns]="columns"
      [loading]="loading"
      [pagination]="true"
      [paginationMode]="'server'"
      [totalItems]="totalItems"
      [pageSize]="pageSize"
      [sorting]="true"
      [sortingMode]="'server'"
      [filtering]="true"
      [filteringMode]="'server'"
      (paginationChange)="onPaginationChange($event)"
      (sortChange)="onSortChange($event)"
      (filterChange)="onFilterChange($event)"
    ></tan-grid>
  \`
})
export class ServerSideDataComponent implements OnInit {
  // Table State
  data: User[] = [];
  loading = false;
  totalItems = 0;
  pageIndex = 0;
  pageSize = 10;
  
  columns: TanGridColumn<User>[] = [
    { header: 'ID', accessorKey: 'id', width: '60px' },
    { header: 'Name', accessorKey: 'name', sortable: true, filterable: true },
    { header: 'Email', accessorKey: 'email', sortable: true, filterable: true },
    { header: 'Role', accessorKey: 'role', sortable: true, filterable: true },
    { header: 'Status', accessorKey: 'status' },
  ];

  // Mock Database
  private allUsers: User[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: \`User \${i + 1}\`,
    email: \`user\${i + 1}@example.com\`,
    role: ['Admin', 'User', 'Editor', 'Viewer'][i % 4],
    status: ['Active', 'Inactive', 'Pending'][i % 3],
  }));

  ngOnInit() {
    this.loadData();
  }

  // Handle Pagination
  onPaginationChange(event: TanGridPagination) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  // Handle Sorting
  onSortChange(event: TanGridSort) {
    this.loadData(event);
  }

  // Handle Filtering
  onFilterChange(event: TanGridFilter[]) {
    this.loadData(undefined, event);
  }

  // Simulate Server Request
  loadData(sort?: TanGridSort, filters?: TanGridFilter[]) {
    this.loading = true;

    // Simulate network delay
    setTimeout(() => {
      let filteredData = [...this.allUsers];

      // Apply Filters (Server-side simulation)
      if (filters && filters.length > 0) {
        filters.forEach(filter => {
          filteredData = filteredData.filter(user => {
            const val = (user as any)[filter.columnId]?.toString().toLowerCase();
            return val.includes(filter.value.toString().toLowerCase());
          });
        });
      }

      // Apply Sorting (Server-side simulation)
      if (sort) {
        filteredData.sort((a, b) => {
          const valA = (a as any)[sort.columnId];
          const valB = (b as any)[sort.columnId];
          if (valA < valB) return sort.direction === 'asc' ? -1 : 1;
          if (valA > valB) return sort.direction === 'asc' ? 1 : -1;
          return 0;
        });
      }

      // Apply Pagination (Server-side simulation)
      this.totalItems = filteredData.length;
      const start = this.pageIndex * this.pageSize;
      this.data = filteredData.slice(start, start + this.pageSize);
      
      this.loading = false;
    }, 800);
  }
}`}ngOnInit(){this.columns=[{header:"ID",accessorKey:"id",width:"60px"},{header:"Name",accessorKey:"name",sortable:!0,filterable:!0},{header:"Email",accessorKey:"email",sortable:!0,filterable:!0},{header:"Role",accessorKey:"role",sortable:!0,filterable:!0},{header:"Status",accessorKey:"status",cell:this.statusTemplate}],this.loadData()}onPaginationChange(e){this.pageIndex=e.pageIndex,this.pageSize=e.pageSize,this.log(`Pagination changed: Page ${e.pageIndex+1}, Size ${e.pageSize}`),this.loadData()}onSortChange(e){this.log(`Sorting changed: ${e.columnId} ${e.direction}`),this.loadData(e)}onFilterChange(e){this.log(`Filters changed: ${JSON.stringify(e)}`),this.loadData(void 0,e)}loadData(e,a){this.loading=!0,this.log("Fetching data from server..."),setTimeout(()=>{let t=[...this.allUsers];a&&a.length>0&&a.forEach(d=>{t=t.filter(g=>(g[d.columnId]?.toString().toLowerCase()).includes(d.value.toString().toLowerCase()))}),e&&t.sort((d,g)=>{let S=d[e.columnId],y=g[e.columnId];return S<y?e.direction==="asc"?-1:1:S>y?e.direction==="asc"?1:-1:0}),this.totalItems=t.length;let o=this.pageIndex*this.pageSize;this.data=t.slice(o,o+this.pageSize),this.loading=!1,this.log(`Data loaded. Returned ${this.data.length} items.`)},800)}log(e){this.logs.unshift({time:new Date,message:e}),this.logs.length>20&&this.logs.pop()}static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275cmp=b({type:i,selectors:[["ngsd-server-side-data-feature"]],viewQuery:function(a,t){if(a&1&&F(B,7),a&2){let o;P(o=M())&&(t.statusTemplate=o.first)}},standalone:!0,features:[z],decls:24,vars:20,consts:[["statusTemplate",""],[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__preview"],[1,"controls"],["type","checkbox",3,"change","checked"],[3,"paginationChange","sortChange","filterChange","data","columns","loading","pagination","paginationMode","totalItems","pageSize","pageSizeOptions","sorting","sortingMode","filtering","filteringMode","theme"],[1,"log-panel"],["class","log-entry",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],[1,"badge",3,"ngClass"],[1,"log-entry"],[1,"timestamp"]],template:function(a,t){if(a&1){let o=I();r(0,"div",1)(1,"div",2)(2,"h1",3),l(3,"Server-side Data"),n(),r(4,"p",4),l(5," Handle data operations on the server. This example simulates a backend API with artificial delay. Try sorting, filtering, and navigating pages to see the server requests. "),n(),r(6,"button",5),v("click",function(){return c(o),u(t.showCode.set(!t.showCode()))}),h(7,q,3,0)(8,j,3,0),n()(),r(9,"div",6)(10,"div",7)(11,"div",8)(12,"label")(13,"input",9),v("change",function(){return c(o),u(t.loading=!t.loading)}),n(),l(14," Force Loading State "),n()(),h(15,J,2,2,"ng-template",null,0,$),r(17,"tan-grid",10),v("paginationChange",function(g){return c(o),u(t.onPaginationChange(g))})("sortChange",function(g){return c(o),u(t.onSortChange(g))})("filterChange",function(g){return c(o),u(t.onFilterChange(g))}),n(),r(18,"div",11)(19,"h4"),l(20,"Server Logs (Simulated)"),n(),h(21,W,6,5,"div",12)(22,X,2,0,"div",13),n()(),h(23,Y,1,1,"ngsd-code-viewer",14),n()()}a&2&&(s(6),x("aria-expanded",t.showCode()),s(),C(t.showCode()?7:8),s(6),p("checked",t.loading),s(4),p("data",t.data)("columns",t.columns)("loading",t.loading)("pagination",!0)("paginationMode","server")("totalItems",t.totalItems)("pageSize",t.pageSize)("pageSizeOptions",O(19,Q))("sorting",!0)("sortingMode","server")("filtering",!0)("filteringMode","server")("theme",t.tableTheme()),s(4),p("ngForOf",t.logs),s(),p("ngIf",t.logs.length===0),s(),C(t.showCode()?23:-1))},dependencies:[H,G,U,k,K,L,R],styles:[".controls[_ngcontent-%COMP%]{margin-bottom:20px;padding:15px;background:#f8f9fa;border-radius:4px;border:1px solid #dee2e6}.controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-weight:500;cursor:pointer}.log-panel[_ngcontent-%COMP%]{margin-top:20px;padding:15px;background:#1e1e1e;color:#fff;border-radius:4px;height:200px;overflow-y:auto;font-family:monospace;font-size:12px}.log-panel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 10px;color:#aaa;font-size:14px;border-bottom:1px solid #333;padding-bottom:5px}.log-panel[_ngcontent-%COMP%]   .log-entry[_ngcontent-%COMP%]{margin-bottom:4px}.log-panel[_ngcontent-%COMP%]   .log-entry[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]{color:#888;margin-right:10px}"]})}}return i})();export{le as ServerSideDataFeatureComponent};
