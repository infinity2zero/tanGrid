import{a as T}from"./chunk-NWN36NCE.js";import{a as b}from"./chunk-VCEQSUYG.js";import{a as _}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as r,Jb as S,La as i,Ya as f,aa as u,bb as c,cb as C,db as l,fa as h,hb as d,mb as o,nb as a,ob as s,ub as g,uc as v,vb as y}from"./chunk-5NTUSMKZ.js";function w(t,p){t&1&&(o(0,"span"),r(1,"Hide Code"),a(),s(2,"span",11))}function x(t,p){t&1&&(o(0,"span"),r(1,"Show Code"),a(),s(2,"span",12))}function E(t,p){if(t&1&&s(0,"ngsd-code-viewer",10),t&2){let m=y();l("code",m.code)}}var M=(()=>{class t{constructor(){this.tableThemeService=u(b),this.showCode=f(!1),this.tableTheme=this.tableThemeService.theme,this.customers=Array.from({length:30},(m,e)=>({id:e+1,name:`Customer ${String.fromCharCode(65+e%26)}${e>25?Math.floor(e/26):""}`,email:`customer${e+1}@example.com`,phone:`+1-555-${String(e+1e3).slice(1)}`,company:["Acme Corp","Tech Solutions","Global Inc","Startup Co","Enterprise Ltd"][e%5],status:["Active","Inactive","Pending"][e%3]})),this.columns=[{header:"ID",accessorKey:"id"},{header:"Name",accessorKey:"name"},{header:"Email",accessorKey:"email"},{header:"Phone",accessorKey:"phone"},{header:"Company",accessorKey:"company"},{header:"Status",accessorKey:"status"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
}

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="customers" 
      [columns]="columns"
      [globalSearch]="true"
      [pageSize]="10"
    ></tan-grid>
  \`
})
export class CustomersTableComponent {
  customers: Customer[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: \`Customer \${String.fromCharCode(65 + (i % 26))}\${i > 25 ? Math.floor(i / 26) : ''}\`,
    email: \`customer\${i + 1}@example.com\`,
    phone: \`+1-555-\${String(i + 1000).slice(1)}\`,
    company: ['Acme Corp', 'Tech Solutions', 'Global Inc', 'Startup Co', 'Enterprise Ltd'][i % 5],
    status: ['Active', 'Inactive', 'Pending'][i % 3],
  }));
  
  columns: TanGridColumn<Customer>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Email', accessorKey: 'email' },
    { header: 'Phone', accessorKey: 'phone' },
    { header: 'Company', accessorKey: 'company' },
    { header: 'Status', accessorKey: 'status' },
  ];
}`}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ngsd-search-feature"]],standalone:!0,features:[S],decls:17,vars:8,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","globalSearch","pageSize","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Global Search"),a(),o(4,"p",3),r(5," Enable users to search across all columns simultaneously with a single search input. Perfect for customer directories, product catalogs, or any dataset where users need to quickly find specific records. "),a(),o(6,"button",4),g("click",function(){return n.showCode.set(!n.showCode())}),c(7,w,3,0)(8,x,3,0),a()(),o(9,"div",5)(10,"h2",6),r(11,"Real-World Example: Customer Directory"),a(),o(12,"p",7),r(13," A customer management table with 30 customers. Users can search by name, email, phone, company, or status. The search filters results in real-time as you type, making it easy to find specific customers in large datasets. "),a(),o(14,"div",8),s(15,"tan-grid",9),a(),c(16,E,1,1,"ngsd-code-viewer",10),a()()),e&2&&(i(6),C("aria-expanded",n.showCode()),i(),d(n.showCode()?7:8),i(8),l("data",n.customers)("columns",n.columns)("globalSearch",!0)("pageSize",10)("theme",n.tableTheme()),i(),d(n.showCode()?16:-1))},dependencies:[_,T,v]})}}return t})();export{M as SearchFeatureComponent};
