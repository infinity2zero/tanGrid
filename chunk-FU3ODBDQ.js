import{a as w}from"./chunk-324QTZIF.js";import{a as T}from"./chunk-VCEQSUYG.js";import{a as j}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as o,Eb as b,Jb as _,La as i,Ya as g,a as S,aa as v,b as C,bb as m,cb as D,db as c,fa as f,hb as p,mb as a,nb as t,ob as l,ub as h,uc as E,vb as y}from"./chunk-5NTUSMKZ.js";function x(e,d){e&1&&(a(0,"span"),o(1,"Hide Code"),t(),l(2,"span",13))}function k(e,d){e&1&&(a(0,"span"),o(1,"Show Code"),t(),l(2,"span",14))}function M(e,d){if(e&1&&l(0,"ngsd-code-viewer",10),e&2){let n=y();c("code",n.clientCode)}}function F(e,d){if(e&1&&(a(0,"div",11),o(1),t()),e&2){let n=d;i(),b(' Last sort: Column "',n.columnId,'" - ',n.direction.toUpperCase()," ")}}function I(e,d){if(e&1&&l(0,"ngsd-code-viewer",10),e&2){let n=y();c("code",n.serverCode)}}var N=(()=>{class e{constructor(){this.tableThemeService=v(T),this.showCode=g({client:!1,server:!1}),this.serverSortInfo=g(null),this.tableTheme=this.tableThemeService.theme,this.employees=[{id:1,name:"John Doe",department:"Engineering",salary:95e3,joinDate:"2020-01-15"},{id:2,name:"Jane Smith",department:"Marketing",salary:75e3,joinDate:"2019-03-20"},{id:3,name:"Bob Johnson",department:"Sales",salary:65e3,joinDate:"2021-06-10"},{id:4,name:"Alice Williams",department:"Engineering",salary:11e4,joinDate:"2018-11-05"},{id:5,name:"Charlie Brown",department:"HR",salary:7e4,joinDate:"2022-02-28"},{id:6,name:"Diana Prince",department:"Marketing",salary:8e4,joinDate:"2020-09-12"},{id:7,name:"Eve Davis",department:"Engineering",salary:105e3,joinDate:"2019-07-22"},{id:8,name:"Frank Miller",department:"Sales",salary:72e3,joinDate:"2021-04-18"}],this.clientColumns=[{header:"ID",accessorKey:"id",sortable:!0},{header:"Name",accessorKey:"name",sortable:!0},{header:"Department",accessorKey:"department",sortable:!0},{header:"Salary",accessorKey:"salary",sortable:!0},{header:"Join Date",accessorKey:"joinDate",sortable:!0}],this.serverColumns=[{header:"ID",accessorKey:"id",sortable:!0},{header:"Name",accessorKey:"name",sortable:!0},{header:"Department",accessorKey:"department",sortable:!0},{header:"Salary",accessorKey:"salary",sortable:!0},{header:"Join Date",accessorKey:"joinDate",sortable:!0}],this.clientCode=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Employee {
  id: number;
  name: string;
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
      sortingMode="client"
    ></tan-grid>
  \`
})
export class EmployeeTableComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', department: 'Engineering', salary: 95000, joinDate: '2020-01-15' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', salary: 75000, joinDate: '2019-03-20' },
    { id: 3, name: 'Bob Johnson', department: 'Sales', salary: 65000, joinDate: '2021-06-10' },
    { id: 4, name: 'Alice Williams', department: 'Engineering', salary: 110000, joinDate: '2018-11-05' },
    { id: 5, name: 'Charlie Brown', department: 'HR', salary: 70000, joinDate: '2022-02-28' },
    { id: 6, name: 'Diana Prince', department: 'Marketing', salary: 80000, joinDate: '2020-09-12' },
    { id: 7, name: 'Eve Davis', department: 'Engineering', salary: 105000, joinDate: '2019-07-22' },
    { id: 8, name: 'Frank Miller', department: 'Sales', salary: 72000, joinDate: '2021-04-18' },
  ];
  
  columns: TanGridColumn<Employee>[] = [
    { header: 'ID', accessorKey: 'id', sortable: true },
    { header: 'Name', accessorKey: 'name', sortable: true },
    { header: 'Department', accessorKey: 'department', sortable: true },
    { header: 'Salary', accessorKey: 'salary', sortable: true },
    { header: 'Join Date', accessorKey: 'joinDate', sortable: true },
  ];
}`,this.serverCode=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn, TanGridSort } from 'tangrid';

interface Employee {
  id: number;
  name: string;
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
      sortingMode="server"
      (sortChange)="onServerSort($event)"
    ></tan-grid>
  \`
})
export class EmployeeTableComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', department: 'Engineering', salary: 95000, joinDate: '2020-01-15' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', salary: 75000, joinDate: '2019-03-20' },
    { id: 3, name: 'Bob Johnson', department: 'Sales', salary: 65000, joinDate: '2021-06-10' },
    { id: 4, name: 'Alice Williams', department: 'Engineering', salary: 110000, joinDate: '2018-11-05' },
    { id: 5, name: 'Charlie Brown', department: 'HR', salary: 70000, joinDate: '2022-02-28' },
    { id: 6, name: 'Diana Prince', department: 'Marketing', salary: 80000, joinDate: '2020-09-12' },
    { id: 7, name: 'Eve Davis', department: 'Engineering', salary: 105000, joinDate: '2019-07-22' },
    { id: 8, name: 'Frank Miller', department: 'Sales', salary: 72000, joinDate: '2021-04-18' },
  ];
  
  columns: TanGridColumn<Employee>[] = [
    { header: 'ID', accessorKey: 'id', sortable: true },
    { header: 'Name', accessorKey: 'name', sortable: true },
    { header: 'Department', accessorKey: 'department', sortable: true },
    { header: 'Salary', accessorKey: 'salary', sortable: true },
    { header: 'Join Date', accessorKey: 'joinDate', sortable: true },
  ];

  onServerSort(sort: TanGridSort) {
    console.log('Server sort requested:', sort);
    // In a real app, you would fetch sorted data from the server here
  }
}`}toggleCode(n){this.showCode.update(s=>C(S({},s),{[n]:!s[n]}))}onServerSort(n){this.serverSortInfo.set(n),console.log("Server sort requested:",n)}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=f({type:e,selectors:[["ngsd-sorting-feature"]],standalone:!0,features:[_],decls:26,vars:11,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],["sortingMode","client",3,"data","columns","theme"],[3,"code"],[1,"demo-info"],["sortingMode","server",3,"sortChange","data","columns","theme"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(s,r){if(s&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),o(3,"Sorting"),t(),a(4,"p",3),o(5," Enable sorting on any column with client-side or server-side sorting. Click column headers to sort ascending, click again for descending, and once more to clear sorting. "),t(),a(6,"button",4),h("click",function(){return r.toggleCode("client")}),m(7,x,3,0)(8,k,3,0),t()(),a(9,"div",5)(10,"h2",6),o(11,"Client-Side Sorting"),t(),a(12,"p",7),o(13," Perfect for small to medium datasets where all data is loaded upfront. Sorting happens instantly in the browser without server requests. Ideal for employee directories, product catalogs, or any dataset under 10,000 rows. "),t(),a(14,"div",8),l(15,"tan-grid",9),t(),m(16,M,1,1,"ngsd-code-viewer",10),t(),a(17,"div",5)(18,"h2",6),o(19,"Server-Side Sorting"),t(),a(20,"p",7),o(21," For large datasets or when data needs to be sorted on the server. Clicking a column header triggers a sort event that you can handle to make API calls. This is essential for databases with millions of records or when sorting requires complex business logic. "),t(),a(22,"div",8),m(23,F,2,2,"div",11),a(24,"tan-grid",12),h("sortChange",function(K){return r.onServerSort(K)}),t()(),m(25,I,1,1,"ngsd-code-viewer",10),t()()),s&2){let u;i(6),D("aria-expanded",r.showCode().client),i(),p(r.showCode().client?7:8),i(8),c("data",r.employees)("columns",r.clientColumns)("theme",r.tableTheme()),i(),p(r.showCode().client?16:-1),i(7),p((u=r.serverSortInfo())?23:-1,u),i(),c("data",r.employees)("columns",r.serverColumns)("theme",r.tableTheme()),i(),p(r.showCode().server?25:-1)}},dependencies:[j,w,E]})}}return e})();export{N as SortingFeatureComponent};
