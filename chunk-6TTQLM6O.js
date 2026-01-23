import{a as w}from"./chunk-354T46RR.js";import{a as D}from"./chunk-VCEQSUYG.js";import{a as S}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as t,Jb as b,Kb as C,La as r,Ya as h,aa as u,bb as d,cb as y,db as s,fa as x,hb as p,mb as a,nb as e,ob as l,ub as f,uc as g,vb as E}from"./chunk-5NTUSMKZ.js";var v=()=>["csv","excel","pdf"];function F(o,c){o&1&&(a(0,"span"),t(1,"Hide Code"),e(),l(2,"span",12))}function _(o,c){o&1&&(a(0,"span"),t(1,"Show Code"),e(),l(2,"span",13))}function j(o,c){if(o&1&&l(0,"ngsd-code-viewer",10),o&2){let i=E();s("code",i.code)}}var N=(()=>{class o{constructor(){this.tableThemeService=u(D),this.showCode=h(!1),this.tableTheme=this.tableThemeService.theme,this.employees=[{id:1,name:"John Doe",email:"john@example.com",department:"Engineering",salary:75e3,joinDate:"2020-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",department:"Marketing",salary:65e3,joinDate:"2019-03-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",department:"Sales",salary:7e4,joinDate:"2021-06-10"},{id:4,name:"Alice Williams",email:"alice@example.com",department:"Engineering",salary:8e4,joinDate:"2018-11-05"},{id:5,name:"Charlie Brown",email:"charlie@example.com",department:"HR",salary:6e4,joinDate:"2022-02-14"},{id:6,name:"Diana Prince",email:"diana@example.com",department:"Marketing",salary:68e3,joinDate:"2020-09-30"},{id:7,name:"Edward Norton",email:"edward@example.com",department:"Engineering",salary:85e3,joinDate:"2019-07-22"},{id:8,name:"Fiona Apple",email:"fiona@example.com",department:"Sales",salary:72e3,joinDate:"2021-04-18"}],this.columns=[{id:"id",header:"ID",accessorKey:"id",sortable:!0},{id:"name",header:"Name",accessorKey:"name",sortable:!0},{id:"email",header:"Email",accessorKey:"email",sortable:!0},{id:"department",header:"Department",accessorKey:"department",sortable:!0},{id:"salary",header:"Salary",accessorKey:"salary",sortable:!0,accessorFn:i=>`$${i.salary.toLocaleString()}`},{id:"joinDate",header:"Join Date",accessorKey:"joinDate",sortable:!0}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  joinDate: string;
}

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid
      [data]="employees"
      [columns]="columns"
      [exportable]="true"
      [exportFormats]="['csv', 'excel', 'pdf']"
      [selectionMode]="'multiple'"
    ></tan-grid>
  \`
})
export class EmployeeTableComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering', salary: 75000, joinDate: '2020-01-15' },
    // ... more employees
  ];

  columns: TanGridColumn<Employee>[] = [
    {
      id: 'name',
      header: 'Name',
      accessorKey: 'name',
      sortable: true,
    },
    {
      id: 'email',
      header: 'Email',
      accessorKey: 'email',
      sortable: true,
    },
    {
      id: 'department',
      header: 'Department',
      accessorKey: 'department',
      sortable: true,
    },
    {
      id: 'salary',
      header: 'Salary',
      accessorKey: 'salary',
      sortable: true,
      accessorFn: (row) => \`$\${row.salary.toLocaleString()}\`,
    },
  ];
}

// Note: For Excel and PDF export, you need to install optional dependencies:
// npm install xlsx          (for Excel export)
// npm install jspdf jspdf-autotable  (for PDF export)
// CSV export works without any additional dependencies.`}static{this.\u0275fac=function(m){return new(m||o)}}static{this.\u0275cmp=x({type:o,selectors:[["ngsd-export-feature"]],standalone:!0,features:[b],decls:33,vars:13,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","exportable","exportFormats","striped","bordered","hoverable","selectionMode","theme"],[3,"code"],[1,"feature-note"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(m,n){m&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),t(3,"Export Functionality"),e(),a(4,"p",3),t(5," Export table data to CSV, Excel (XLSX), or PDF formats. Export all data, current page, or selected rows only. "),e(),a(6,"button",4),f("click",function(){return n.showCode.set(!n.showCode())}),d(7,F,3,0)(8,_,3,0),e()(),a(9,"div",5)(10,"h2",6),t(11,"Real-World Example: Employee Directory"),e(),a(12,"p",7),t(13," An employee directory table with export functionality. Use the export buttons (CSV, Excel, PDF) in the toolbar above the table to export data. CSV export works out of the box, while Excel and PDF require optional dependencies. "),e(),a(14,"div",8),l(15,"tan-grid",9),e(),d(16,j,1,1,"ngsd-code-viewer",10),e(),a(17,"div",11)(18,"p")(19,"strong"),t(20,"Note:"),e(),t(21," CSV export works without any additional dependencies. For Excel and PDF export, you need to install optional dependencies:"),e(),a(22,"ul")(23,"li")(24,"code"),t(25,"npm install xlsx"),e(),t(26," - for Excel (XLSX) export"),e(),a(27,"li")(28,"code"),t(29,"npm install jspdf jspdf-autotable"),e(),t(30," - for PDF export"),e()(),a(31,"p"),t(32,"If the libraries are not installed, Excel and PDF exports will automatically fall back to CSV format."),e()()()),m&2&&(r(6),y("aria-expanded",n.showCode()),r(),p(n.showCode()?7:8),r(8),s("data",n.employees)("columns",n.columns)("exportable",!0)("exportFormats",C(12,v))("striped",!0)("bordered",!0)("hoverable",!0)("selectionMode","multiple")("theme",n.tableTheme()),r(),p(n.showCode()?16:-1))},dependencies:[g,S,w]})}}return o})();export{N as ExportFeatureComponent};
