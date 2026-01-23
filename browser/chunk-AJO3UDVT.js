import{a as R}from"./chunk-354T46RR.js";import{a as Q}from"./chunk-VCEQSUYG.js";import{a as K}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as l,Cb as _,Db as P,Jb as E,Kb as O,La as s,Mb as V,Ob as $,Pb as k,Ya as b,aa as x,bb as u,cb as I,db as m,fa as y,hb as v,mb as o,nb as a,nc as L,oa as c,ob as f,oc as N,pa as h,pc as U,sb as D,sc as A,ub as S,uc as H,vb as T,xb as F,yb as M,zb as z}from"./chunk-5NTUSMKZ.js";var q=["statusTemplate"],B=()=>[5,10,20];function G(i,p){i&1&&(o(0,"span"),l(1,"Hide Code"),a(),f(2,"span",15))}function j(i,p){i&1&&(o(0,"span"),l(1,"Show Code"),a(),f(2,"span",16))}function J(i,p){if(i&1&&(o(0,"span",17),l(1),a()),i&2){let e=p.row;m("ngClass",e.status.toLowerCase()),s(),_(e.status)}}function W(i,p){if(i&1&&(o(0,"div",18)(1,"span",19),l(2),V(3,"date"),a(),o(4,"span"),l(5),a()()),i&2){let e=p.$implicit;s(2),P("[",$(3,2,e.time,"HH:mm:ss"),"]"),s(3),_(e.message)}}function X(i,p){i&1&&(o(0,"div"),l(1,"No activity yet."),a())}function Y(i,p){if(i&1&&f(0,"ngsd-code-viewer",14),i&2){let e=T();m("code",e.code)}}var le=(()=>{class i{constructor(){this.tableThemeService=x(Q),this.showCode=b(!1),this.tableTheme=this.tableThemeService.theme,this.data=[],this.loading=!1,this.totalItems=0,this.pageIndex=0,this.pageSize=10,this.logs=[],this.allUsers=Array.from({length:100},(e,n)=>({id:n+1,name:`User ${n+1}`,email:`user${n+1}@example.com`,role:["Admin","User","Editor","Viewer"][n%4],status:["Active","Inactive","Pending"][n%3]})),this.columns=[],this.code=`
// HTML
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

// TS
export class ServerSideDataComponent {
  data: User[] = [];
  loading = false;
  totalItems = 0;
  pageIndex = 0;
  pageSize = 10;

  loadData(params: any) {
    this.loading = true;
    this.apiService.getUsers(params).subscribe(response => {
      this.data = response.data;
      this.totalItems = response.total;
      this.loading = false;
    });
  }

  onPaginationChange(event: TanGridPagination) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData({ page: this.pageIndex, size: this.pageSize });
  }
  
  // ... implement onSortChange and onFilterChange similarly
}
  `}ngOnInit(){this.columns=[{header:"ID",accessorKey:"id",width:"60px"},{header:"Name",accessorKey:"name",sortable:!0,filterable:!0},{header:"Email",accessorKey:"email",sortable:!0,filterable:!0},{header:"Role",accessorKey:"role",sortable:!0,filterable:!0},{header:"Status",accessorKey:"status",cell:this.statusTemplate}],this.loadData()}onPaginationChange(e){this.pageIndex=e.pageIndex,this.pageSize=e.pageSize,this.log(`Pagination changed: Page ${e.pageIndex+1}, Size ${e.pageSize}`),this.loadData()}onSortChange(e){this.log(`Sorting changed: ${e.columnId} ${e.direction}`),this.loadData(e)}onFilterChange(e){this.log(`Filters changed: ${JSON.stringify(e)}`),this.loadData(void 0,e)}loadData(e,n){this.loading=!0,this.log("Fetching data from server..."),setTimeout(()=>{let t=[...this.allUsers];n&&n.length>0&&n.forEach(d=>{t=t.filter(g=>(g[d.columnId]?.toString().toLowerCase()).includes(d.value.toString().toLowerCase()))}),e&&t.sort((d,g)=>{let C=d[e.columnId],w=g[e.columnId];return C<w?e.direction==="asc"?-1:1:C>w?e.direction==="asc"?1:-1:0}),this.totalItems=t.length;let r=this.pageIndex*this.pageSize;this.data=t.slice(r,r+this.pageSize),this.loading=!1,this.log(`Data loaded. Returned ${this.data.length} items.`)},800)}log(e){this.logs.unshift({time:new Date,message:e}),this.logs.length>20&&this.logs.pop()}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=y({type:i,selectors:[["ngsd-server-side-data-feature"]],viewQuery:function(n,t){if(n&1&&F(q,7),n&2){let r;M(r=z())&&(t.statusTemplate=r.first)}},standalone:!0,features:[E],decls:24,vars:20,consts:[["statusTemplate",""],[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__preview"],[1,"controls"],["type","checkbox",3,"change","checked"],[3,"paginationChange","sortChange","filterChange","data","columns","loading","pagination","paginationMode","totalItems","pageSize","pageSizeOptions","sorting","sortingMode","filtering","filteringMode","theme"],[1,"log-panel"],["class","log-entry",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],[1,"badge",3,"ngClass"],[1,"log-entry"],[1,"timestamp"]],template:function(n,t){if(n&1){let r=D();o(0,"div",1)(1,"div",2)(2,"h1",3),l(3,"Server-side Data"),a(),o(4,"p",4),l(5," Handle data operations on the server. This example simulates a backend API with artificial delay. Try sorting, filtering, and navigating pages to see the server requests. "),a(),o(6,"button",5),S("click",function(){return c(r),h(t.showCode.set(!t.showCode()))}),u(7,G,3,0)(8,j,3,0),a()(),o(9,"div",6)(10,"div",7)(11,"div",8)(12,"label")(13,"input",9),S("change",function(){return c(r),h(t.loading=!t.loading)}),a(),l(14," Force Loading State "),a()(),u(15,J,2,2,"ng-template",null,0,k),o(17,"tan-grid",10),S("paginationChange",function(g){return c(r),h(t.onPaginationChange(g))})("sortChange",function(g){return c(r),h(t.onSortChange(g))})("filterChange",function(g){return c(r),h(t.onFilterChange(g))}),a(),o(18,"div",11)(19,"h4"),l(20,"Server Logs (Simulated)"),a(),u(21,W,6,5,"div",12)(22,X,2,0,"div",13),a()(),u(23,Y,1,1,"ngsd-code-viewer",14),a()()}n&2&&(s(6),I("aria-expanded",t.showCode()),s(),v(t.showCode()?7:8),s(6),m("checked",t.loading),s(4),m("data",t.data)("columns",t.columns)("loading",t.loading)("pagination",!0)("paginationMode","server")("totalItems",t.totalItems)("pageSize",t.pageSize)("pageSizeOptions",O(19,B))("sorting",!0)("sortingMode","server")("filtering",!0)("filteringMode","server")("theme",t.tableTheme()),s(4),m("ngForOf",t.logs),s(),m("ngIf",t.logs.length===0),s(),v(t.showCode()?23:-1))},dependencies:[H,L,N,U,A,K,R],styles:[".controls[_ngcontent-%COMP%]{margin-bottom:20px;padding:15px;background:#f8f9fa;border-radius:4px;border:1px solid #dee2e6}.controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-weight:500;cursor:pointer}.log-panel[_ngcontent-%COMP%]{margin-top:20px;padding:15px;background:#1e1e1e;color:#fff;border-radius:4px;height:200px;overflow-y:auto;font-family:monospace;font-size:12px}.log-panel[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 10px;color:#aaa;font-size:14px;border-bottom:1px solid #333;padding-bottom:5px}.log-panel[_ngcontent-%COMP%]   .log-entry[_ngcontent-%COMP%]{margin-bottom:4px}.log-panel[_ngcontent-%COMP%]   .log-entry[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%]{color:#888;margin-right:10px}"]})}}return i})();export{le as ServerSideDataFeatureComponent};
