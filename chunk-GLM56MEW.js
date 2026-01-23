import{a as v}from"./chunk-NWN36NCE.js";import{a as x}from"./chunk-VCEQSUYG.js";import{a as k}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as r,Jb as y,La as a,Ya as g,aa as u,bb as d,cb as w,db as l,fa as h,hb as m,mb as i,nb as e,ob as n,ub as b,uc as C,vb as f}from"./chunk-5NTUSMKZ.js";function z(t,p){t&1&&(i(0,"span"),r(1,"Hide Code"),e(),n(2,"span",13))}function E(t,p){t&1&&(i(0,"span"),r(1,"Show Code"),e(),n(2,"span",14))}function K(t,p){if(t&1&&n(0,"ngsd-code-viewer",12),t&2){let c=f();l("code",c.code)}}var A=(()=>{class t{constructor(){this.tableThemeService=u(x),this.showCode=g(!1),this.tableTheme=this.tableThemeService.theme,this.products=[{id:1,name:'Laptop Pro 15"',description:"High-performance laptop with 16GB RAM",category:"Electronics",price:1299.99,stock:15,sku:"LAP-001"},{id:2,name:"Wireless Mouse",description:"Ergonomic wireless mouse with precision tracking",category:"Electronics",price:29.99,stock:50,sku:"MOU-002"},{id:3,name:"Mechanical Keyboard",description:"RGB backlit mechanical keyboard",category:"Electronics",price:149.99,stock:30,sku:"KEY-003"},{id:4,name:'4K Monitor 27"',description:"Ultra HD 4K monitor with HDR support",category:"Electronics",price:399.99,stock:20,sku:"MON-004"},{id:5,name:"Noise-Cancelling Headphones",description:"Premium wireless headphones with active noise cancellation",category:"Electronics",price:199.99,stock:25,sku:"HEA-005"}],this.columns=[{header:"ID",accessorKey:"id",width:"60px",resizable:!0},{header:"Name",accessorKey:"name",width:"200px",resizable:!0},{header:"Description",accessorKey:"description",width:"300px",resizable:!0},{header:"Category",accessorKey:"category",width:"120px",resizable:!0},{header:"Price",accessorKey:"price",width:"100px",resizable:!0},{header:"Stock",accessorKey:"stock",width:"80px",resizable:!0},{header:"SKU",accessorKey:"sku",width:"100px",resizable:!0}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  sku: string;
}

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="products" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class ProductsTableComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop Pro 15"', description: 'High-performance laptop with 16GB RAM', category: 'Electronics', price: 1299.99, stock: 15, sku: 'LAP-001' },
    { id: 2, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse with precision tracking', category: 'Electronics', price: 29.99, stock: 50, sku: 'MOU-002' },
    { id: 3, name: 'Mechanical Keyboard', description: 'RGB backlit mechanical keyboard', category: 'Electronics', price: 149.99, stock: 30, sku: 'KEY-003' },
    { id: 4, name: '4K Monitor 27"', description: 'Ultra HD 4K monitor with HDR support', category: 'Electronics', price: 399.99, stock: 20, sku: 'MON-004' },
    { id: 5, name: 'Noise-Cancelling Headphones', description: 'Premium wireless headphones with active noise cancellation', category: 'Electronics', price: 199.99, stock: 25, sku: 'HEA-005' },
  ];
  
  columns: TanGridColumn<Product>[] = [
    { header: 'ID', accessorKey: 'id', width: '60px', resizable: true },
    { header: 'Name', accessorKey: 'name', width: '200px', resizable: true },
    { header: 'Description', accessorKey: 'description', width: '300px', resizable: true },
    { header: 'Category', accessorKey: 'category', width: '120px', resizable: true },
    { header: 'Price', accessorKey: 'price', width: '100px', resizable: true },
    { header: 'Stock', accessorKey: 'stock', width: '80px', resizable: true },
    { header: 'SKU', accessorKey: 'sku', width: '100px', resizable: true },
  ];
}`}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=h({type:t,selectors:[["ngsd-column-resizing-feature"]],standalone:!0,features:[y],decls:22,vars:7,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[1,"demo-info"],[1,"mdi","mdi-lightbulb-on-outline"],[3,"data","columns","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(s,o){s&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Column Resizing"),e(),i(4,"p",3),r(5," Allow users to resize columns by dragging the column borders. Perfect for tables with varying content lengths where users need to adjust column widths to optimize their view. "),e(),i(6,"button",4),b("click",function(){return o.showCode.set(!o.showCode())}),d(7,z,3,0)(8,E,3,0),e()(),i(9,"div",5)(10,"h2",6),r(11,"Real-World Example: Product Catalog with Resizable Columns"),e(),i(12,"p",7),r(13," A product management table where users can drag column borders to resize them. This is essential for data-heavy tables where users need to see more or less of specific columns. Hover over column borders and drag to resize. Perfect for spreadsheets, data grids, or any table where column width flexibility is important. "),e(),i(14,"div",8)(15,"div",9),n(16,"span",10),i(17,"strong"),r(18,"Tip:"),e(),r(19," Hover over the column borders and drag to resize. All columns in this example are resizable. "),e(),n(20,"tan-grid",11),e(),d(21,K,1,1,"ngsd-code-viewer",12),e()()),s&2&&(a(6),w("aria-expanded",o.showCode()),a(),m(o.showCode()?7:8),a(13),l("data",o.products)("columns",o.columns)("pagination",!1)("theme",o.tableTheme()),a(),m(o.showCode()?21:-1))},dependencies:[k,v,C]})}}return t})();export{A as ColumnResizingFeatureComponent};
