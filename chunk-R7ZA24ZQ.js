import{a as E}from"./chunk-324QTZIF.js";import{a as _}from"./chunk-VCEQSUYG.js";import{a as T}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as i,Jb as b,La as n,Ya as y,aa as u,bb as d,cb as f,db as m,fa as h,hb as l,mb as o,nb as t,ob as r,ub as g,uc as v,vb as C}from"./chunk-5NTUSMKZ.js";function k(e,p){e&1&&(o(0,"span"),i(1,"Hide Code"),t(),r(2,"span",11))}function w(e,p){e&1&&(o(0,"span"),i(1,"Show Code"),t(),r(2,"span",12))}function S(e,p){if(e&1&&r(0,"ngsd-code-viewer",10),e&2){let s=C();m("code",s.code)}}var I=(()=>{class e{constructor(){this.tableThemeService=u(_),this.showCode=y(!1),this.tableTheme=this.tableThemeService.theme,this.products=[{id:1,name:"Laptop",category:"Electronics",price:999.99,stock:15},{id:2,name:"Mouse",category:"Electronics",price:29.99,stock:50},{id:3,name:"Keyboard",category:"Electronics",price:79.99,stock:30},{id:4,name:"Monitor",category:"Electronics",price:299.99,stock:20},{id:5,name:"Headphones",category:"Electronics",price:149.99,stock:25}],this.columns=[{header:"ID",accessorKey:"id"},{header:"Product Name",accessorKey:"name"},{header:"Category",accessorKey:"category"},{header:"Price",accessorKey:"price"},{header:"Stock",accessorKey:"stock"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="products" 
      [columns]="columns"
      [pagination]="false"
    ></tan-grid>
  \`
})
export class ProductTableComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15 },
    { id: 2, name: 'Mouse', category: 'Electronics', price: 29.99, stock: 50 },
    { id: 3, name: 'Keyboard', category: 'Electronics', price: 79.99, stock: 30 },
    { id: 4, name: 'Monitor', category: 'Electronics', price: 299.99, stock: 20 },
    { id: 5, name: 'Headphones', category: 'Electronics', price: 149.99, stock: 25 },
  ];

  columns: TanGridColumn<Product>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Product Name', accessorKey: 'name' },
    { header: 'Category', accessorKey: 'category' },
    { header: 'Price', accessorKey: 'price' },
    { header: 'Stock', accessorKey: 'stock' },
  ];
}`}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=h({type:e,selectors:[["ngsd-basic-feature"]],standalone:!0,features:[b],decls:17,vars:7,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","pagination","theme"],["componentName","ProductTableComponent","title","Basic Table Demo",3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(c,a){c&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),i(3,"Basic Table"),t(),o(4,"p",3),i(5," The simplest way to display tabular data. Perfect for product listings, user directories, or any structured data display. "),t(),o(6,"button",4),g("click",function(){return a.showCode.set(!a.showCode())}),d(7,k,3,0)(8,w,3,0),t()(),o(9,"div",5)(10,"h2",6),i(11,"Real-World Example: Product Inventory"),t(),o(12,"p",7),i(13," A simple product inventory table showing product details without pagination. Ideal for small datasets or when you want to display all items at once. "),t(),o(14,"div",8),r(15,"tan-grid",9),t(),d(16,S,1,1,"ngsd-code-viewer",10),t()()),c&2&&(n(6),f("aria-expanded",a.showCode()),n(),l(a.showCode()?7:8),n(8),m("data",a.products)("columns",a.columns)("pagination",!1)("theme",a.tableTheme()),n(),l(a.showCode()?16:-1))},dependencies:[T,E,v]})}}return e})();export{I as BasicFeatureComponent};
