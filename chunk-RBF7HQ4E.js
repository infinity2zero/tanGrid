import{a as E}from"./chunk-324QTZIF.js";import{a as S}from"./chunk-VCEQSUYG.js";import{a as A}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as i,Db as w,Jb as O,La as d,Ya as l,aa as C,bb as c,cb as _,db as u,fa as v,hb as p,jb as b,kb as x,lb as y,mb as n,nb as e,ob as m,ub as g,uc as T,vb as h}from"./chunk-5NTUSMKZ.js";function F(t,s){t&1&&(n(0,"span"),i(1,"Hide Code"),e(),m(2,"span",18))}function K(t,s){t&1&&(n(0,"span"),i(1,"Show Code"),e(),m(2,"span",19))}function M(t,s){if(t&1&&(n(0,"span",15),i(1),e()),t&2){let o=s.$implicit,a=h();d(),w(" ",a.getColumnLabel(o)," ")}}function z(t,s){t&1&&(n(0,"span",16),i(1," Drag a column header to see the current column order here. "),e())}function P(t,s){if(t&1&&m(0,"ngsd-code-viewer",17),t&2){let o=h();u("code",o.code)}}var j=(()=>{class t{constructor(){this.tableThemeService=C(S),this.showCode=l(!1),this.tableTheme=this.tableThemeService.theme,this.users=[{id:1,name:"Alice Johnson",email:"alice@example.com",role:"Admin",status:"Active",createdAt:"2024-01-15"},{id:2,name:"Bob Smith",email:"bob@example.com",role:"Editor",status:"Pending",createdAt:"2024-02-03"},{id:3,name:"Carol Davis",email:"carol@example.com",role:"Viewer",status:"Inactive",createdAt:"2024-02-20"},{id:4,name:"David Wilson",email:"david@example.com",role:"Editor",status:"Active",createdAt:"2024-03-01"},{id:5,name:"Emma Brown",email:"emma@example.com",role:"Admin",status:"Active",createdAt:"2024-03-12"}],this.columns=[{header:"ID",accessorKey:"id",width:"80px"},{header:"Name",accessorKey:"name",width:"200px"},{header:"Email",accessorKey:"email",width:"260px"},{header:"Role",accessorKey:"role",width:"120px"},{header:"Status",accessorKey:"status",width:"120px"},{header:"Created At",accessorKey:"createdAt",width:"140px"}],this.columnOrder=l([]),this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

@Component({
  selector: 'app-column-ordering-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid
      [data]="users"
      [columns]="columns"
      [reorderable]="true"
      [pagination]="false"
    ></tan-grid>
  \`
})
export class ColumnOrderingTableComponent {
  users: User[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-15' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor', status: 'Pending', createdAt: '2024-02-03' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Viewer', status: 'Inactive', createdAt: '2024-02-20' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', role: 'Editor', status: 'Active', createdAt: '2024-03-01' },
    { id: 5, name: 'Emma Brown', email: 'emma@example.com', role: 'Admin', status: 'Active', createdAt: '2024-03-12' },
  ];

  columns: TanGridColumn<User>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Email', accessorKey: 'email' },
    { header: 'Role', accessorKey: 'role' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Created At', accessorKey: 'createdAt' },
  ];
}`}onColumnOrderChange(o){this.columnOrder.set(o)}getColumnLabel(o){let a=this.columns.find(r=>(r.id||String(r.accessorKey||""))===o);return a?typeof a.header=="string"?a.header:String(a.header):o}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=v({type:t,selectors:[["ngsd-column-ordering-feature"]],standalone:!0,features:[O],decls:31,vars:13,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[1,"demo-info"],[1,"mdi","mdi-lightbulb-on-outline"],[3,"columnOrderChange","data","columns","reorderable","pagination","sorting","filtering","bordered","hoverable","theme"],[1,"column-ordering-info"],[1,"column-ordering-info__hint"],[1,"column-ordering-info__list"],[1,"column-ordering-info__item"],[1,"column-ordering-info__empty"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(a,r){a&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Column Ordering"),e(),n(4,"p",3),i(5," Reorder columns by dragging the table headers. This is useful when different users prefer different column arrangements for the same dataset, such as prioritizing name, status, or dates depending on their workflow. "),e(),n(6,"button",4),g("click",function(){return r.showCode.set(!r.showCode())}),c(7,F,3,0)(8,K,3,0),e()(),n(9,"div",5)(10,"h2",6),i(11,"Interactive Demo: Drag Headers To Reorder Columns"),e(),n(12,"p",7),i(13," Drag and drop the table headers to change the column order. The current order is shown below the table so you can see exactly how the layout changes as you drag. This pattern is ideal for user-configurable dashboards and data grids. "),e(),n(14,"div",8)(15,"div",9),m(16,"span",10),n(17,"strong"),i(18,"Tip:"),e(),i(19," Click and drag any column header to a new position. The table updates instantly, and the current column order is displayed below. "),e(),n(20,"tan-grid",11),g("columnOrderChange",function(D){return r.onColumnOrderChange(D)}),e(),n(21,"div",12)(22,"h3"),i(23,"Current Column Order"),e(),n(24,"p",13),i(25," Order is based on column IDs. This is what you can persist in your application to restore a user's preferred layout. "),e(),n(26,"div",14),x(27,M,2,1,"span",15,b,!1,z,2,0,"span",16),e()()(),c(30,P,1,1,"ngsd-code-viewer",17),e()()),a&2&&(d(6),_("aria-expanded",r.showCode()),d(),p(r.showCode()?7:8),d(13),u("data",r.users)("columns",r.columns)("reorderable",!0)("pagination",!1)("sorting",!0)("filtering",!0)("bordered",!0)("hoverable",!0)("theme",r.tableTheme()),d(7),y(r.columnOrder()),d(3),p(r.showCode()?30:-1))},dependencies:[T,A,E],styles:[".column-ordering-info[_ngcontent-%COMP%]{margin-top:var(--ngs-spacing-lg);padding:var(--ngs-spacing-md);border-radius:var(--ngs-border-radius);border:1px dashed var(--ngs-border-color);background-color:var(--ngs-bg-secondary)}.column-ordering-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 var(--ngs-spacing-sm);font-size:var(--ngs-font-size-md)}.column-ordering-info__hint[_ngcontent-%COMP%]{margin:0 0 var(--ngs-spacing-sm);color:var(--ngs-text-secondary);font-size:var(--ngs-font-size-sm)}.column-ordering-info__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--ngs-spacing-xs)}.column-ordering-info__item[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;padding:var(--ngs-spacing-xs) var(--ngs-spacing-sm);border-radius:var(--ngs-border-radius-sm);background-color:var(--ngs-bg-primary);border:1px solid var(--ngs-border-color);font-size:var(--ngs-font-size-sm)}.column-ordering-info__empty[_ngcontent-%COMP%]{color:var(--ngs-text-secondary);font-size:var(--ngs-font-size-sm)}"]})}}return t})();export{j as ColumnOrderingFeatureComponent};
