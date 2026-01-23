import{a as _}from"./chunk-354T46RR.js";import{a as T}from"./chunk-VCEQSUYG.js";import{a as E}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as a,Jb as y,La as l,Ya as h,aa as b,bb as c,cb as v,db as m,fa as g,hb as s,mb as n,nb as r,ob as d,ub as u,uc as f,vb as C}from"./chunk-5NTUSMKZ.js";function w(t,p){t&1&&(n(0,"span"),a(1,"Hide Code"),r(),d(2,"span",11))}function S(t,p){t&1&&(n(0,"span"),a(1,"Show Code"),r(),d(2,"span",12))}function N(t,p){if(t&1&&d(0,"ngsd-code-viewer",10),t&2){let i=C();m("code",i.code)}}var D=(()=>{class t{constructor(){this.tableThemeService=b(T),this.showCode=h(!1),this.tableTheme=this.tableThemeService.theme,this.products=[{id:1,name:"Laptop",category:"Electronics",price:999.99,stock:15,email:"laptop@example.com"},{id:2,name:"Mouse",category:"Electronics",price:29.99,stock:50,email:"mouse@example.com"},{id:3,name:"Keyboard",category:"Electronics",price:79.99,stock:30,email:"keyboard@example.com"},{id:4,name:"Monitor",category:"Electronics",price:299.99,stock:20,email:"monitor@example.com"},{id:5,name:"Headphones",category:"Electronics",price:149.99,stock:25,email:"headphones@example.com"}],this.columns=[{id:"id",header:"ID",accessorKey:"id",sortable:!0},{id:"name",header:"Product Name",accessorKey:"name",sortable:!0,editable:!0,editType:"text"},{id:"category",header:"Category",accessorKey:"category",sortable:!0,editable:!0,editType:"text"},{id:"price",header:"Price",accessorKey:"price",sortable:!0,editable:!0,editType:"number",accessorFn:i=>`$${i.price.toFixed(2)}`,editValidator:(i,o)=>{let e=Number(i);return isNaN(e)||e<0?"Price must be a positive number":!0}},{id:"stock",header:"Stock",accessorKey:"stock",sortable:!0,editable:!0,editType:"number",editValidator:(i,o)=>{let e=Number(i);return isNaN(e)||e<0||!Number.isInteger(e)?"Stock must be a non-negative integer":!0}},{id:"email",header:"Email",accessorKey:"email",sortable:!0,editable:!0,editType:"email"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn, TanGridCellEdit } from 'tangrid';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  email: string;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid
      [data]="products"
      [columns]="columns"
      [editable]="true"
      (cellEditChange)="onCellEdit($event)"
    ></tan-grid>
  \`
})
export class ProductTableComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, email: 'laptop@example.com' },
    // ... more products
  ];

  columns: TanGridColumn<Product>[] = [
    {
      id: 'name',
      header: 'Product Name',
      accessorKey: 'name',
      sortable: true,
      editable: true,
      editType: 'text',
    },
    {
      id: 'price',
      header: 'Price',
      accessorKey: 'price',
      sortable: true,
      editable: true,
      editType: 'number',
      accessorFn: (row) => \`$\${row.price.toFixed(2)}\`,
      editValidator: (value, row) => {
        const numValue = Number(value);
        if (isNaN(numValue) || numValue < 0) {
          return 'Price must be a positive number';
        }
        return true;
      },
    },
    {
      id: 'stock',
      header: 'Stock',
      accessorKey: 'stock',
      sortable: true,
      editable: true,
      editType: 'number',
      editValidator: (value, row) => {
        const numValue = Number(value);
        if (isNaN(numValue) || numValue < 0 || !Number.isInteger(numValue)) {
          return 'Stock must be a non-negative integer';
        }
        return true;
      },
    },
    {
      id: 'email',
      header: 'Email',
      accessorKey: 'email',
      sortable: true,
      editable: true,
      editType: 'email',
    },
  ];

  onCellEdit(event: TanGridCellEdit<Product>): void {
    console.log('Cell edited:', event);
    // Save to backend or update local state
  }
}`}onCellEdit(i){console.log("Cell edited:",i)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=g({type:t,selectors:[["ngsd-inline-editing-feature"]],standalone:!0,features:[y],decls:17,vars:10,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"cellEditChange","data","columns","editable","striped","bordered","hoverable","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(o,e){o&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Inline Editing"),r(),n(4,"p",3),a(5," Edit cell values directly in the table. Double-click any editable cell to start editing. Press Enter to save or Escape to cancel. "),r(),n(6,"button",4),u("click",function(){return e.showCode.set(!e.showCode())}),c(7,w,3,0)(8,S,3,0),r()(),n(9,"div",5)(10,"h2",6),a(11,"Real-World Example: Product Inventory Management"),r(),n(12,"p",7),a(13," A product inventory table with inline editing. Double-click on editable cells (Name, Category, Price, Stock, Email) to edit them. The Price and Stock columns have validation to ensure valid numeric values. "),r(),n(14,"div",8)(15,"tan-grid",9),u("cellEditChange",function(x){return e.onCellEdit(x)}),r()(),c(16,N,1,1,"ngsd-code-viewer",10),r()()),o&2&&(l(6),v("aria-expanded",e.showCode()),l(),s(e.showCode()?7:8),l(8),m("data",e.products)("columns",e.columns)("editable",!0)("striped",!0)("bordered",!0)("hoverable",!0)("theme",e.tableTheme()),l(),s(e.showCode()?16:-1))},dependencies:[f,E,_]})}}return t})();export{D as InlineEditingFeatureComponent};
