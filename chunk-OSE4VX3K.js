import{a as D}from"./chunk-354T46RR.js";import{a as M}from"./chunk-VCEQSUYG.js";import{a as F}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as l,Cb as V,Jb as K,La as r,Ya as h,aa as b,bb as g,cb as w,db as d,fa as v,hb as C,kb as S,lb as T,mb as a,nb as o,oa as _,ob as c,pa as x,sb as E,ub as y,uc as k,vb as p}from"./chunk-5NTUSMKZ.js";var G=(t,m)=>m.accessorKey;function O(t,m){t&1&&(a(0,"span"),l(1,"Hide Code"),o(),c(2,"span",15))}function P(t,m){t&1&&(a(0,"span"),l(1,"Show Code"),o(),c(2,"span",16))}function z(t,m){if(t&1){let e=E();a(0,"label",12)(1,"input",17),y("change",function(){let i=_(e).$implicit,u=p();return x(u.toggleColumn(i.accessorKey))}),o(),a(2,"span"),l(3),o()()}if(t&2){let e=m.$implicit,n=p();r(),d("checked",n.isColumnVisible(e.accessorKey)),r(2),V(e.header)}}function I(t,m){if(t&1&&c(0,"ngsd-code-viewer",14),t&2){let e=p();d("code",e.code)}}var W=(()=>{class t{constructor(){this.tableThemeService=b(M),this.showCode=h(!1),this.tableTheme=this.tableThemeService.theme,this.employees=[{id:1,name:"John Doe",email:"john@example.com",department:"Engineering",role:"Senior Developer",salary:12e4,status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",department:"Marketing",role:"Marketing Manager",salary:95e3,status:"Active"},{id:3,name:"Bob Johnson",email:"bob@example.com",department:"Sales",role:"Sales Rep",salary:75e3,status:"Active"},{id:4,name:"Alice Brown",email:"alice@example.com",department:"HR",role:"HR Manager",salary:88e3,status:"On Leave"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",department:"Engineering",role:"Developer",salary:1e5,status:"Active"}],this.allColumns=[{header:"ID",accessorKey:"id"},{header:"Name",accessorKey:"name"},{header:"Email",accessorKey:"email"},{header:"Department",accessorKey:"department"},{header:"Role",accessorKey:"role"},{header:"Salary",accessorKey:"salary"},{header:"Status",accessorKey:"status"}],this.visibleColumns=h([]),this.code=`import { Component, signal } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-employees-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <div class="column-controls">
      <label *ngFor="let col of allColumns">
        <input
          type="checkbox"
          [checked]="isColumnVisible(col.accessorKey)"
          (change)="toggleColumn(col.accessorKey)"
        />
        {{ col.header }}
      </label>
    </div>
    
    <tan-grid 
      [data]="employees" 
      [columns]="visibleColumns()"
    ></tan-grid>
  \`
})
export class EmployeesTableComponent {
  allColumns: TanGridColumn<Employee>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Email', accessorKey: 'email' },
    // ... more columns
  ];

  visibleColumns = signal<TanGridColumn<Employee>[]>([]);

  toggleColumn(columnKey: string | undefined) {
    // Show/hide columns dynamically
    if (!columnKey) return;
    // ... implementation
  }
}`,this.visibleColumns.set([...this.allColumns])}toggleColumn(e){e&&this.visibleColumns.update(n=>{let i=this.allColumns.find(s=>s.accessorKey===e);if(!i)return n;if(n.some(s=>s.accessorKey===e))return n.filter(s=>s.accessorKey!==e);{let s=this.allColumns.findIndex(A=>A.accessorKey===e),f=[...n];return f.splice(s,0,i),f}})}isColumnVisible(e){return e?this.visibleColumns().some(n=>n.accessorKey===e):!1}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=v({type:t,selectors:[["ngsd-column-visibility-feature"]],standalone:!0,features:[K],decls:23,vars:7,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[1,"column-controls"],[2,"margin","0 0 1rem 0","font-size","1rem","font-weight","600"],[1,"column-controls__list"],[1,"column-controls__item"],[3,"data","columns","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],["type","checkbox",3,"change","checked"]],template:function(n,i){n&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),l(3,"Column Visibility"),o(),a(4,"p",3),l(5," Show or hide columns dynamically based on user preferences or application state. Perfect for customizable views, responsive tables, or when you need to focus on specific data columns. "),o(),a(6,"button",4),y("click",function(){return i.showCode.set(!i.showCode())}),g(7,O,3,0)(8,P,3,0),o()(),a(9,"div",5)(10,"h2",6),l(11,"Real-World Example: Employee Directory with Column Toggle"),o(),a(12,"p",7),l(13," An employee management table where users can show or hide columns based on their needs. This is common in admin panels, dashboards, or any application where users need to customize their view. Use checkboxes to toggle column visibility in real-time. "),o(),a(14,"div",8)(15,"div",9)(16,"h3",10),l(17,"Toggle Columns:"),o(),a(18,"div",11),S(19,z,4,2,"label",12,G),o()(),c(21,"tan-grid",13),o(),g(22,I,1,1,"ngsd-code-viewer",14),o()()),n&2&&(r(6),w("aria-expanded",i.showCode()),r(),C(i.showCode()?7:8),r(12),T(i.allColumns),r(2),d("data",i.employees)("columns",i.visibleColumns())("pagination",!1)("theme",i.tableTheme()),r(),C(i.showCode()?22:-1))},dependencies:[F,D,k],styles:[".column-controls[_ngcontent-%COMP%]{margin-bottom:var(--ngs-spacing-xl);padding:var(--ngs-spacing-lg);background:var(--ngs-bg-secondary);border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius)}.column-controls__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--ngs-spacing-md)}.column-controls__item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--ngs-spacing-xs);cursor:pointer;font-size:var(--ngs-font-size-sm);color:var(--ngs-text-primary)}.column-controls__item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{cursor:pointer}"]})}}return t})();export{W as ColumnVisibilityFeatureComponent};
