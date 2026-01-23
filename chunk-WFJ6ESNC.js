import{a as x}from"./chunk-NWN36NCE.js";import{a as T}from"./chunk-VCEQSUYG.js";import{a as _}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as a,Jb as v,La as o,Ya as g,aa as p,bb as d,cb as b,db as m,fa as f,hb as s,mb as n,nb as t,ob as c,ub as h,uc as y,vb as C}from"./chunk-5NTUSMKZ.js";function w(e,u){e&1&&(n(0,"span"),a(1,"Hide Code"),t(),c(2,"span",11))}function A(e,u){e&1&&(n(0,"span"),a(1,"Show Code"),t(),c(2,"span",12))}function F(e,u){if(e&1&&c(0,"ngsd-code-viewer",10),e&2){let r=C();m("code",r.code)}}var M=(()=>{class e{constructor(){this.tableThemeService=p(T),this.showCode=g(!1),this.tableTheme=this.tableThemeService.theme,this.financials=[{id:1,account:"Cash",debit:1e4,credit:0,balance:1e4},{id:2,account:"Accounts Receivable",debit:5e3,credit:2e3,balance:3e3},{id:3,account:"Inventory",debit:15e3,credit:5e3,balance:1e4},{id:4,account:"Equipment",debit:25e3,credit:0,balance:25e3},{id:5,account:"Accounts Payable",debit:0,credit:8e3,balance:-8e3}],this.columns=[{header:"ID",accessorKey:"id",align:"left"},{header:"Account",accessorKey:"account",align:"left"},{header:"Debit",accessorKey:"debit",align:"right"},{header:"Credit",accessorKey:"credit",align:"right"},{header:"Balance",accessorKey:"balance",align:"right"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Financial {
  id: number;
  account: string;
  debit: number;
  credit: number;
  balance: number;
}

@Component({
  selector: 'app-financial-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="financials" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class FinancialTableComponent {
  financials: Financial[] = [
    { id: 1, account: 'Cash', debit: 10000, credit: 0, balance: 10000 },
    { id: 2, account: 'Accounts Receivable', debit: 5000, credit: 2000, balance: 3000 },
    { id: 3, account: 'Inventory', debit: 15000, credit: 5000, balance: 10000 },
    { id: 4, account: 'Equipment', debit: 25000, credit: 0, balance: 25000 },
    { id: 5, account: 'Accounts Payable', debit: 0, credit: 8000, balance: -8000 },
  ];
  
  columns: TanGridColumn<Financial>[] = [
    { header: 'ID', accessorKey: 'id', align: 'left' },
    { header: 'Account', accessorKey: 'account', align: 'left' },
    { header: 'Debit', accessorKey: 'debit', align: 'right' },
    { header: 'Credit', accessorKey: 'credit', align: 'right' },
    { header: 'Balance', accessorKey: 'balance', align: 'right' },
  ];
}`}static{this.\u0275fac=function(l){return new(l||e)}}static{this.\u0275cmp=f({type:e,selectors:[["ngsd-column-alignment-feature"]],standalone:!0,features:[v],decls:17,vars:7,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Column Alignment"),t(),n(4,"p",3),a(5," Control text alignment within columns. Left-align text columns for readability, right-align numeric columns for easy comparison, or center-align for balanced visual presentation. "),t(),n(6,"button",4),h("click",function(){return i.showCode.set(!i.showCode())}),d(7,w,3,0)(8,A,3,0),t()(),n(9,"div",5)(10,"h2",6),a(11,"Real-World Example: Financial Ledger"),t(),n(12,"p",7),a(13," A financial ledger table demonstrating proper column alignment. Text columns (ID, Account) are left-aligned for readability, while numeric columns (Debit, Credit, Balance) are right-aligned to make it easier to compare values and perform mental calculations. This is a standard practice in accounting and financial applications. "),t(),n(14,"div",8),c(15,"tan-grid",9),t(),d(16,F,1,1,"ngsd-code-viewer",10),t()()),l&2&&(o(6),b("aria-expanded",i.showCode()),o(),s(i.showCode()?7:8),o(8),m("data",i.financials)("columns",i.columns)("pagination",!1)("theme",i.tableTheme()),o(),s(i.showCode()?16:-1))},dependencies:[_,x,y]})}}return e})();export{M as ColumnAlignmentFeatureComponent};
