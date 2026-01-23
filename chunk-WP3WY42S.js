import{a as F}from"./chunk-NWN36NCE.js";import{a as D}from"./chunk-VCEQSUYG.js";import{a as k}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as l,Cb as T,Jb as V,La as s,Ya as h,aa as b,bb as g,cb as w,db as d,fa as v,hb as y,kb as K,lb as S,mb as a,nb as o,oa as _,ob as c,pa as x,sb as E,ub as C,uc as M,vb as u}from"./chunk-5NTUSMKZ.js";var I=(n,m)=>m.accessorKey;function R(n,m){n&1&&(a(0,"span"),l(1,"Hide Code"),o(),c(2,"span",15))}function O(n,m){n&1&&(a(0,"span"),l(1,"Show Code"),o(),c(2,"span",16))}function G(n,m){if(n&1){let e=E();a(0,"label",12)(1,"input",17),C("change",function(){let i=_(e).$implicit,p=u();return x(p.toggleColumn(i.accessorKey))}),o(),a(2,"span"),l(3),o()()}if(n&2){let e=m.$implicit,t=u();s(),d("checked",t.isColumnVisible(e.accessorKey)),s(2),T(e.header)}}function H(n,m){if(n&1&&c(0,"ngsd-code-viewer",14),n&2){let e=u();d("code",e.code)}}var L=(()=>{class n{constructor(){this.tableThemeService=b(D),this.showCode=h(!1),this.tableTheme=this.tableThemeService.theme,this.employees=[{id:1,name:"John Doe",email:"john@example.com",department:"Engineering",role:"Senior Developer",salary:12e4,status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",department:"Marketing",role:"Marketing Manager",salary:95e3,status:"Active"},{id:3,name:"Bob Johnson",email:"bob@example.com",department:"Sales",role:"Sales Rep",salary:75e3,status:"Active"},{id:4,name:"Alice Brown",email:"alice@example.com",department:"HR",role:"HR Manager",salary:88e3,status:"On Leave"},{id:5,name:"Charlie Wilson",email:"charlie@example.com",department:"Engineering",role:"Developer",salary:1e5,status:"Active"}],this.allColumns=[{header:"ID",accessorKey:"id"},{header:"Name",accessorKey:"name"},{header:"Email",accessorKey:"email"},{header:"Department",accessorKey:"department"},{header:"Role",accessorKey:"role"},{header:"Salary",accessorKey:"salary"},{header:"Status",accessorKey:"status"}],this.visibleColumns=h([]),this.code=`import { Component, signal } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CommonModule } from '@angular/common';

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  salary: number;
  status: string;
}

@Component({
  selector: 'app-employees-table',
  standalone: true,
  imports: [TanGrid, CommonModule],
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
  employees: Employee[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering', role: 'Senior Developer', salary: 120000, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Marketing', role: 'Marketing Manager', salary: 95000, status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', department: 'Sales', role: 'Sales Rep', salary: 75000, status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', department: 'HR', role: 'HR Manager', salary: 88000, status: 'On Leave' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', department: 'Engineering', role: 'Developer', salary: 100000, status: 'Active' },
  ];

  allColumns: TanGridColumn<Employee>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Email', accessorKey: 'email' },
    { header: 'Department', accessorKey: 'department' },
    { header: 'Role', accessorKey: 'role' },
    { header: 'Salary', accessorKey: 'salary' },
    { header: 'Status', accessorKey: 'status' },
  ];

  visibleColumns = signal<TanGridColumn<Employee>[]>([]);

  constructor() {
    // Initially show all columns
    this.visibleColumns.set([...this.allColumns]);
  }

  toggleColumn(columnKey: string | undefined) {
    if (!columnKey) return;
    
    this.visibleColumns.update((cols) => {
      const column = this.allColumns.find((c) => c.accessorKey === columnKey);
      if (!column) return cols;

      const isVisible = cols.some((c) => c.accessorKey === columnKey);
      if (isVisible) {
        // Hide column
        return cols.filter((c) => c.accessorKey !== columnKey);
      } else {
        // Show column - insert at original position
        const originalIndex = this.allColumns.findIndex((c) => c.accessorKey === columnKey);
        const newCols = [...cols];
        newCols.splice(originalIndex, 0, column);
        return newCols;
      }
    });
  }

  isColumnVisible(columnKey: string | undefined): boolean {
    if (!columnKey) return false;
    return this.visibleColumns().some((c) => c.accessorKey === columnKey);
  }
}`,this.visibleColumns.set([...this.allColumns])}toggleColumn(e){e&&this.visibleColumns.update(t=>{let i=this.allColumns.find(r=>r.accessorKey===e);if(!i)return t;if(t.some(r=>r.accessorKey===e))return t.filter(r=>r.accessorKey!==e);{let r=this.allColumns.findIndex(A=>A.accessorKey===e),f=[...t];return f.splice(r,0,i),f}})}isColumnVisible(e){return e?this.visibleColumns().some(t=>t.accessorKey===e):!1}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=v({type:n,selectors:[["ngsd-column-visibility-feature"]],standalone:!0,features:[V],decls:23,vars:7,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[1,"column-controls"],[2,"margin","0 0 1rem 0","font-size","1rem","font-weight","600"],[1,"column-controls__list"],[1,"column-controls__item"],[3,"data","columns","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],["type","checkbox",3,"change","checked"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),l(3,"Column Visibility"),o(),a(4,"p",3),l(5," Show or hide columns dynamically based on user preferences or application state. Perfect for customizable views, responsive tables, or when you need to focus on specific data columns. "),o(),a(6,"button",4),C("click",function(){return i.showCode.set(!i.showCode())}),g(7,R,3,0)(8,O,3,0),o()(),a(9,"div",5)(10,"h2",6),l(11,"Real-World Example: Employee Directory with Column Toggle"),o(),a(12,"p",7),l(13," An employee management table where users can show or hide columns based on their needs. This is common in admin panels, dashboards, or any application where users need to customize their view. Use checkboxes to toggle column visibility in real-time. "),o(),a(14,"div",8)(15,"div",9)(16,"h3",10),l(17,"Toggle Columns:"),o(),a(18,"div",11),K(19,G,4,2,"label",12,I),o()(),c(21,"tan-grid",13),o(),g(22,H,1,1,"ngsd-code-viewer",14),o()()),t&2&&(s(6),w("aria-expanded",i.showCode()),s(),y(i.showCode()?7:8),s(12),S(i.allColumns),s(2),d("data",i.employees)("columns",i.visibleColumns())("pagination",!1)("theme",i.tableTheme()),s(),y(i.showCode()?22:-1))},dependencies:[k,F,M],styles:[".column-controls[_ngcontent-%COMP%]{margin-bottom:var(--ngs-spacing-xl);padding:var(--ngs-spacing-lg);background:var(--ngs-bg-secondary);border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius)}.column-controls__list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--ngs-spacing-md)}.column-controls__item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--ngs-spacing-xs);cursor:pointer;font-size:var(--ngs-font-size-sm);color:var(--ngs-text-primary)}.column-controls__item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{cursor:pointer}"]})}}return n})();export{L as ColumnVisibilityFeatureComponent};
