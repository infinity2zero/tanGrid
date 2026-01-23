import{a as S}from"./chunk-354T46RR.js";import{a as T}from"./chunk-VCEQSUYG.js";import{a as x}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as o,Eb as F,Jb as y,La as a,Ya as c,aa as h,bb as d,cb as v,db as p,fa as C,hb as m,kb as _,lb as b,mb as r,nb as i,ob as u,ub as f,uc as w,vb as g}from"./chunk-5NTUSMKZ.js";var D=(e,l)=>l.columnId;function k(e,l){e&1&&(r(0,"span"),o(1,"Hide Code"),i(),u(2,"span",12))}function M(e,l){e&1&&(r(0,"span"),o(1,"Show Code"),i(),u(2,"span",13))}function A(e,l){if(e&1&&(r(0,"span",14),o(1),i()),e&2){let t=l.$implicit;a(),F("",t.columnId,": ",t.value,"")}}function P(e,l){if(e&1&&(r(0,"div",9)(1,"strong"),o(2,"Active Filters:"),i(),_(3,A,2,2,"span",14,D),i()),e&2){let t=g();a(3),b(t.activeFilters())}}function G(e,l){if(e&1&&u(0,"ngsd-code-viewer",11),e&2){let t=g();p("code",t.code)}}var z=(()=>{class e{constructor(){this.tableThemeService=h(T),this.showCode=c(!1),this.activeFilters=c([]),this.tableTheme=this.tableThemeService.theme,this.orders=[{id:1,customer:"John Doe",product:"Laptop",amount:1299.99,status:"Shipped",date:"2024-01-15"},{id:2,customer:"Jane Smith",product:"Mouse",amount:29.99,status:"Delivered",date:"2024-01-14"},{id:3,customer:"Bob Johnson",product:"Keyboard",amount:149.99,status:"Processing",date:"2024-01-16"},{id:4,customer:"Alice Brown",product:"Monitor",amount:399.99,status:"Pending",date:"2024-01-17"},{id:5,customer:"Charlie Wilson",product:"Headphones",amount:199.99,status:"Shipped",date:"2024-01-15"},{id:6,customer:"Diana Prince",product:"Laptop",amount:1299.99,status:"Delivered",date:"2024-01-13"},{id:7,customer:"Eve Davis",product:"Mouse",amount:29.99,status:"Cancelled",date:"2024-01-18"},{id:8,customer:"Frank Miller",product:"Keyboard",amount:149.99,status:"Processing",date:"2024-01-16"}],this.columns=[{header:"ID",accessorKey:"id"},{header:"Customer",accessorKey:"customer",filterable:!0},{header:"Product",accessorKey:"product",filterable:!0},{header:"Amount",accessorKey:"amount",filterable:!0,filterFn:(t,s)=>{let n=Number(s);return!isNaN(n)&&t.amount>=n}},{header:"Status",accessorKey:"status",filterable:!0},{header:"Date",accessorKey:"date",filterable:!0}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn, TanGridFilter } from 'tangrid';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="orders" 
      [columns]="columns"
      [filtering]="true"
      (filterChange)="onFilterChange($event)"
    ></tan-grid>
  \`
})
export class OrdersTableComponent {
  orders: Order[] = [ /* ... */ ];
  
  columns: TanGridColumn<Order>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Customer', accessorKey: 'customer', filterable: true },
    { header: 'Product', accessorKey: 'product', filterable: true },
    { 
      header: 'Amount', 
      accessorKey: 'amount', 
      filterable: true,
      filterFn: (row, filterValue) => {
        // Custom filter: show orders >= filterValue
        const amount = Number(filterValue);
        return !isNaN(amount) && row.amount >= amount;
      }
    },
    { header: 'Status', accessorKey: 'status', filterable: true },
  ];

  onFilterChange(filters: TanGridFilter[]) {
    // Handle filter changes
    console.log('Active filters:', filters);
  }
}`}onFilterChange(t){this.activeFilters.set(t),console.log("Active filters:",t)}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=C({type:e,selectors:[["ngsd-column-filtering-feature"]],standalone:!0,features:[y],decls:18,vars:9,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[1,"demo-info"],[3,"filterChange","data","columns","filtering","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],[1,"filter-badge"]],template:function(s,n){s&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),o(3,"Per-Column Filtering"),i(),r(4,"p",3),o(5," Enable individual column filters to allow users to filter data by specific columns. Supports both default text filtering and custom filter functions for advanced filtering logic like numeric ranges, date ranges, or complex conditions. "),i(),r(6,"button",4),f("click",function(){return n.showCode.set(!n.showCode())}),d(7,k,3,0)(8,M,3,0),i()(),r(9,"div",5)(10,"h2",6),o(11,"Real-World Example: Order Management with Column Filters"),i(),r(12,"p",7),o(13,' An order management table with per-column filtering. Each filterable column has its own filter input. The "Amount" column uses a custom filter function to show orders greater than or equal to the entered value. This is different from global search - it allows users to filter by specific columns independently, which is essential for complex data analysis. '),i(),r(14,"div",8),d(15,P,5,0,"div",9),r(16,"tan-grid",10),f("filterChange",function(K){return n.onFilterChange(K)}),i()(),d(17,G,1,1,"ngsd-code-viewer",11),i()()),s&2&&(a(6),v("aria-expanded",n.showCode()),a(),m(n.showCode()?7:8),a(8),m(n.activeFilters().length>0?15:-1),a(),p("data",n.orders)("columns",n.columns)("filtering",!0)("pagination",!1)("theme",n.tableTheme()),a(),m(n.showCode()?17:-1))},dependencies:[x,S,w],styles:[".filter-badge[_ngcontent-%COMP%]{display:inline-block;padding:var(--ngs-spacing-xs) var(--ngs-spacing-sm);margin-left:var(--ngs-spacing-xs);background:var(--ngs-primary-light);color:var(--ngs-primary-dark);border-radius:var(--ngs-border-radius);font-size:var(--ngs-font-size-xs);font-weight:var(--ngs-font-weight-medium)}"]})}}return e})();export{z as ColumnFilteringFeatureComponent};
