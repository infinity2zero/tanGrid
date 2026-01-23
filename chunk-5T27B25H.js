import{a as E}from"./chunk-324QTZIF.js";import{a as _}from"./chunk-VCEQSUYG.js";import{a as S}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as i,Jb as w,La as r,Ya as v,a as h,aa as f,b as g,bb as c,cb as y,db as s,fa as b,hb as m,mb as a,nb as e,ob as d,ub as C,uc as T,vb as u}from"./chunk-5NTUSMKZ.js";function x(n,p){n&1&&(a(0,"span"),i(1,"Hide Code"),e(),d(2,"span",15))}function F(n,p){n&1&&(a(0,"span"),i(1,"Show Code"),e(),d(2,"span",16))}function V(n,p){if(n&1&&d(0,"ngsd-code-viewer",10),n&2){let o=u();s("code",o.code)}}function k(n,p){if(n&1&&d(0,"ngsd-code-viewer",10),n&2){let o=u();s("code",o.code)}}function D(n,p){if(n&1&&d(0,"ngsd-code-viewer",10),n&2){let o=u();s("code",o.code)}}function K(n,p){if(n&1&&d(0,"ngsd-code-viewer",10),n&2){let o=u();s("code",o.code)}}var P=(()=>{class n{constructor(){this.tableThemeService=f(_),this.showCode=v({striped:!1,bordered:!1,hoverable:!1,compact:!1}),this.tableTheme=this.tableThemeService.theme,this.transactions=[{id:1,date:"2024-01-15",description:"Grocery Shopping",amount:-125.5,category:"Food"},{id:2,date:"2024-01-16",description:"Salary Deposit",amount:5e3,category:"Income"},{id:3,date:"2024-01-17",description:"Gas Station",amount:-45,category:"Transport"},{id:4,date:"2024-01-18",description:"Restaurant",amount:-85.75,category:"Food"},{id:5,date:"2024-01-19",description:"Freelance Work",amount:1200,category:"Income"}],this.columns=[{header:"ID",accessorKey:"id"},{header:"Date",accessorKey:"date"},{header:"Description",accessorKey:"description"},{header:"Amount",accessorKey:"amount"},{header:"Category",accessorKey:"category"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  category: string;
}

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <!-- Striped table -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [striped]="true"
    ></tan-grid>
    
    <!-- Bordered table -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [bordered]="true"
    ></tan-grid>
    
    <!-- Hoverable table -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [hoverable]="true"
    ></tan-grid>
    
    <!-- Compact table -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [compact]="true"
    ></tan-grid>
    
    <!-- Combine multiple variants -->
    <tan-grid 
      [data]="transactions" 
      [columns]="columns"
      [striped]="true"
      [bordered]="true"
      [hoverable]="true"
    ></tan-grid>
  \`
})
export class TransactionsTableComponent {
  transactions: Transaction[] = [
    { id: 1, date: '2024-01-15', description: 'Grocery Shopping', amount: -125.50, category: 'Food' },
    { id: 2, date: '2024-01-16', description: 'Salary Deposit', amount: 5000.00, category: 'Income' },
    { id: 3, date: '2024-01-17', description: 'Gas Station', amount: -45.00, category: 'Transport' },
    { id: 4, date: '2024-01-18', description: 'Restaurant', amount: -85.75, category: 'Food' },
    { id: 5, date: '2024-01-19', description: 'Freelance Work', amount: 1200.00, category: 'Income' },
  ];
  
  columns: TanGridColumn<Transaction>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Date', accessorKey: 'date' },
    { header: 'Description', accessorKey: 'description' },
    { header: 'Amount', accessorKey: 'amount' },
    { header: 'Category', accessorKey: 'category' },
  ];
}`}toggleCode(o){this.showCode.update(l=>g(h({},l),{[o]:!l[o]}))}static{this.\u0275fac=function(l){return new(l||n)}}static{this.\u0275cmp=b({type:n,selectors:[["ngsd-variants-feature"]],standalone:!0,features:[w],decls:48,vars:33,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","striped","pagination","theme"],[3,"code"],[3,"data","columns","bordered","pagination","theme"],[3,"data","columns","hoverable","pagination","theme"],[3,"data","columns","compact","pagination","theme"],[3,"data","columns","striped","bordered","hoverable","pagination","theme"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(l,t){l&1&&(a(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Table Variants"),e(),a(4,"p",3),i(5," Customize the appearance of your table with built-in variants: striped rows, borders, hover effects, and compact spacing. Mix and match these options to create the perfect table style for your application. "),e(),a(6,"button",4),C("click",function(){return t.toggleCode("striped")}),c(7,x,3,0)(8,F,3,0),e()(),a(9,"div",5)(10,"h2",6),i(11,"Striped Table"),e(),a(12,"p",7),i(13," Alternating row colors make it easier to scan across rows, especially in wide tables. Perfect for financial data, transaction lists, or any dense tabular information. "),e(),a(14,"div",8),d(15,"tan-grid",9),e(),c(16,V,1,1,"ngsd-code-viewer",10),e(),a(17,"div",5)(18,"h2",6),i(19,"Bordered Table"),e(),a(20,"p",7),i(21," Clear borders around cells help define data boundaries. Ideal for forms, data entry tables, or when you need strong visual separation between cells. "),e(),a(22,"div",8),d(23,"tan-grid",11),e(),c(24,k,1,1,"ngsd-code-viewer",10),e(),a(25,"div",5)(26,"h2",6),i(27,"Hoverable Table"),e(),a(28,"p",7),i(29," Rows highlight on hover to provide visual feedback and improve interactivity. Essential for clickable rows or when users need to identify which row they're interacting with. "),e(),a(30,"div",8),d(31,"tan-grid",12),e(),c(32,D,1,1,"ngsd-code-viewer",10),e(),a(33,"div",5)(34,"h2",6),i(35,"Compact Table"),e(),a(36,"p",7),i(37," Reduced padding and font size for displaying more data in less space. Perfect for dashboards, reports, or when screen real estate is limited. "),e(),a(38,"div",8),d(39,"tan-grid",13),e(),c(40,K,1,1,"ngsd-code-viewer",10),e(),a(41,"div",5)(42,"h2",6),i(43,"Combined Variants"),e(),a(44,"p",7),i(45," Combine multiple variants for a polished, professional look. This example shows striped, bordered, and hoverable styles working together. "),e(),a(46,"div",8),d(47,"tan-grid",14),e()()()),l&2&&(r(6),y("aria-expanded",t.showCode().striped),r(),m(t.showCode().striped?7:8),r(8),s("data",t.transactions)("columns",t.columns)("striped",!0)("pagination",!1)("theme",t.tableTheme()),r(),m(t.showCode().striped?16:-1),r(7),s("data",t.transactions)("columns",t.columns)("bordered",!0)("pagination",!1)("theme",t.tableTheme()),r(),m(t.showCode().bordered?24:-1),r(7),s("data",t.transactions)("columns",t.columns)("hoverable",!0)("pagination",!1)("theme",t.tableTheme()),r(),m(t.showCode().hoverable?32:-1),r(7),s("data",t.transactions)("columns",t.columns)("compact",!0)("pagination",!1)("theme",t.tableTheme()),r(),m(t.showCode().compact?40:-1),r(7),s("data",t.transactions)("columns",t.columns)("striped",!0)("bordered",!0)("hoverable",!0)("pagination",!1)("theme",t.tableTheme()))},dependencies:[S,E,T]})}}return n})();export{P as VariantsFeatureComponent};
