import{a as w}from"./chunk-NWN36NCE.js";import{a as S}from"./chunk-VCEQSUYG.js";import{a as x}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as o,Jb as b,Kb as _,La as i,Ya as h,aa as p,bb as g,cb as f,db as m,fa as u,hb as c,mb as r,nb as n,ob as s,ub as v,uc as y,vb as C}from"./chunk-5NTUSMKZ.js";var P=()=>[5,10,20,50];function T(e,l){e&1&&(r(0,"span"),o(1,"Hide Code"),n(),s(2,"span",11))}function M(e,l){e&1&&(r(0,"span"),o(1,"Show Code"),n(),s(2,"span",12))}function O(e,l){if(e&1&&s(0,"ngsd-code-viewer",10),e&2){let d=C();m("code",d.code)}}var I=(()=>{class e{constructor(){this.tableThemeService=p(S),this.showCode=h(!1),this.tableTheme=this.tableThemeService.theme,this.orders=Array.from({length:47},(d,t)=>({id:t+1,customer:`Customer ${String.fromCharCode(65+t%26)}`,product:["Laptop","Mouse","Keyboard","Monitor","Headphones"][t%5],amount:Math.floor(Math.random()*1e3)+50,status:["Pending","Processing","Shipped","Delivered"][t%4],date:new Date(2024,0,t+1).toISOString().split("T")[0]})),this.columns=[{header:"Order ID",accessorKey:"id"},{header:"Customer",accessorKey:"customer"},{header:"Product",accessorKey:"product"},{header:"Amount",accessorKey:"amount"},{header:"Status",accessorKey:"status"},{header:"Date",accessorKey:"date"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Order {
  id: number;
  customer: string;
  product: string;
  amount: number;
  status: string;
  date: string;
}

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="orders" 
      [columns]="columns"
      [pageSize]="10"
      [pageSizeOptions]="[5, 10, 20, 50]"
    ></tan-grid>
  \`
})
export class OrdersTableComponent {
  orders: Order[] = Array.from({ length: 47 }, (_, i) => ({
    id: i + 1,
    customer: \`Customer \${String.fromCharCode(65 + (i % 26))}\`,
    product: ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones'][i % 5],
    amount: Math.floor(Math.random() * 1000) + 50,
    status: ['Pending', 'Processing', 'Shipped', 'Delivered'][i % 4],
    date: new Date(2024, 0, i + 1).toISOString().split('T')[0],
  }));
  
  columns: TanGridColumn<Order>[] = [
    { header: 'Order ID', accessorKey: 'id' },
    { header: 'Customer', accessorKey: 'customer' },
    { header: 'Product', accessorKey: 'product' },
    { header: 'Amount', accessorKey: 'amount' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Date', accessorKey: 'date' },
  ];
}`}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=u({type:e,selectors:[["ngsd-pagination-feature"]],standalone:!0,features:[b],decls:17,vars:9,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","pageSize","pageSizeOptions","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(t,a){t&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),o(3,"Pagination"),n(),r(4,"p",3),o(5," Break large datasets into manageable pages with customizable page sizes. The pagination control shows the current range, total items, and provides navigation controls. "),n(),r(6,"button",4),v("click",function(){return a.showCode.set(!a.showCode())}),g(7,T,3,0)(8,M,3,0),n()(),r(9,"div",5)(10,"h2",6),o(11,"Real-World Example: Order Management System"),n(),r(12,"p",7),o(13,' A typical e-commerce order management table with 47 orders. Users can navigate through pages and adjust the number of items per page (5, 10, 20, or 50). The pagination shows "X - Y (pageSize) of Total Items" on the left, with page controls and page size selector on the right. '),n(),r(14,"div",8),s(15,"tan-grid",9),n(),g(16,O,1,1,"ngsd-code-viewer",10),n()()),t&2&&(i(6),f("aria-expanded",a.showCode()),i(),c(a.showCode()?7:8),i(8),m("data",a.orders)("columns",a.columns)("pageSize",10)("pageSizeOptions",_(8,P))("theme",a.tableTheme()),i(),c(a.showCode()?16:-1))},dependencies:[x,w,y],styles:[".feature-header[_ngcontent-%COMP%]{margin-bottom:var(--ngs-spacing-3xl)}.feature-title[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-3xl);font-weight:var(--ngs-font-weight-bold);margin:0 0 var(--ngs-spacing-md) 0;color:var(--ngs-text-primary)}.feature-description[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-lg);color:var(--ngs-text-secondary);line-height:1.7;margin:0 0 var(--ngs-spacing-lg) 0}.feature-toggle-code[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--ngs-spacing-xs);padding:var(--ngs-spacing-sm) var(--ngs-spacing-md);background:var(--ngs-primary);border:1px solid var(--ngs-primary);border-radius:var(--ngs-border-radius);cursor:pointer;font-size:var(--ngs-font-size-sm);color:var(--ngs-text-inverse);transition:var(--ngs-transition-base);font-weight:var(--ngs-font-weight-medium)}.feature-toggle-code[_ngcontent-%COMP%]:hover{background:var(--ngs-primary-hover);border-color:var(--ngs-primary-hover)}.feature-example[_ngcontent-%COMP%]{background:var(--ngs-bg-primary);border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius);overflow:hidden;margin-bottom:var(--ngs-spacing-2xl)}.feature-example__title[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-xl);font-weight:var(--ngs-font-weight-semibold);margin:0 0 var(--ngs-spacing-xs) 0;padding:var(--ngs-spacing-lg) var(--ngs-spacing-xl);background:var(--ngs-bg-secondary);border-bottom:1px solid var(--ngs-border-color);color:var(--ngs-text-primary)}.feature-example__description[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-base);color:var(--ngs-text-secondary);margin:0 0 var(--ngs-spacing-lg) 0;padding:0 var(--ngs-spacing-xl);line-height:1.6}.feature-example__preview[_ngcontent-%COMP%]{padding:var(--ngs-spacing-xl);background:var(--ngs-bg-primary)}"]})}}return e})();export{I as PaginationFeatureComponent};
