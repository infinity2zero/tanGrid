import{a as M}from"./chunk-354T46RR.js";import{a as I}from"./chunk-VCEQSUYG.js";import{a as P}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as r,Cb as K,Db as _,Jb as Q,La as s,Pb as C,Ya as T,aa as y,bb as g,cb as x,db as h,eb as b,fa as w,gb as S,hb as f,mb as n,nb as a,oa as v,ob as m,pa as k,sb as E,ub as F,uc as V,vb as R,xb as d,yb as p,zb as u}from"./chunk-5NTUSMKZ.js";var D=["priceCell"],G=["stockCell"],q=["ratingCell"],A=["imageCell"];function N(e,o){e&1&&(n(0,"span"),r(1,"Hide Code"),a(),m(2,"span",15))}function z(e,o){e&1&&(n(0,"span"),r(1,"Show Code"),a(),m(2,"span",16))}function H(e,o){if(e&1&&m(0,"span",17),e&2){let t=o.row;S(t.image)}}function W(e,o){if(e&1&&(n(0,"span",18),r(1),a()),e&2){let t=o.row;s(),_("$",t.price.toFixed(2),"")}}function $(e,o){if(e&1&&(n(0,"span"),r(1),a()),e&2){let t=o.row;b("color",t.stock>20?"var(--ngs-success)":"var(--ngs-warning)")("font-weight","600"),s(),_(" ",t.stock," units ")}}function j(e,o){if(e&1&&(n(0,"div",19),m(1,"span",20),n(2,"span",21),r(3),a()()),e&2){let t=o.row;s(3),K(t.rating)}}function L(e,o){if(e&1&&m(0,"ngsd-code-viewer",14),e&2){let t=R();h("code",t.code)}}var ie=(()=>{class e{constructor(){this.tableThemeService=y(I),this.showCode=T(!1),this.tableTheme=this.tableThemeService.theme,this.products=[{id:1,name:"Laptop Pro",price:1299.99,stock:15,rating:4.5,image:"mdi mdi-laptop"},{id:2,name:"Wireless Mouse",price:29.99,stock:50,rating:4.2,image:"mdi mdi-mouse"},{id:3,name:"Mechanical Keyboard",price:149.99,stock:30,rating:4.8,image:"mdi mdi-keyboard"},{id:4,name:"4K Monitor",price:399.99,stock:20,rating:4.6,image:"mdi mdi-monitor"},{id:5,name:"Noise-Cancelling Headphones",price:199.99,stock:25,rating:4.7,image:"mdi mdi-headphones"}],this.columns=[],this.code=`import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <ng-template #priceCell let-product>
      <span class="price">\${{ product.price | number:'1.2-2' }}</span>
    </ng-template>
    
    <ng-template #stockCell let-product>
      <span [class]="'stock stock--' + (product.stock > 20 ? 'high' : 'low')">
        {{ product.stock }} units
      </span>
    </ng-template>
    
    <ng-template #ratingCell let-product>
      <div class="rating">
        <span class="mdi mdi-star"></span>
        <span>{{ product.rating }}</span>
      </div>
    </ng-template>
    
    <tan-grid 
      [data]="products" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class ProductsTableComponent {
  @ViewChild('priceCell', { static: true }) priceCell!: TemplateRef<any>;
  @ViewChild('stockCell', { static: true }) stockCell!: TemplateRef<any>;
  @ViewChild('ratingCell', { static: true }) ratingCell!: TemplateRef<any>;
  
  products: Product[] = [ /* ... */ ];
  
  columns: TanGridColumn<Product>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    { header: 'Price', accessorKey: 'price', cell: this.priceCell },
    { header: 'Stock', accessorKey: 'stock', cell: this.stockCell },
    { header: 'Rating', accessorKey: 'rating', cell: this.ratingCell },
  ];
}`}ngAfterViewInit(){this.columns=[{header:"ID",accessorKey:"id"},{header:"Image",accessorKey:"image",cell:this.imageCell},{header:"Name",accessorKey:"name"},{header:"Price",accessorKey:"price",cell:this.priceCell},{header:"Stock",accessorKey:"stock",cell:this.stockCell},{header:"Rating",accessorKey:"rating",cell:this.ratingCell}]}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=w({type:e,selectors:[["ngsd-custom-cells-feature"]],viewQuery:function(c,i){if(c&1&&(d(D,7),d(G,7),d(q,7),d(A,7)),c&2){let l;p(l=u())&&(i.priceCell=l.first),p(l=u())&&(i.stockCell=l.first),p(l=u())&&(i.ratingCell=l.first),p(l=u())&&(i.imageCell=l.first)}},standalone:!0,features:[Q],decls:25,vars:7,consts:[["imageCell",""],["priceCell",""],["stockCell",""],["ratingCell",""],[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],[2,"font-size","1.5rem"],[2,"font-weight","600","color","var(--ngs-primary)"],[2,"display","flex","align-items","center","gap","4px"],[1,"mdi","mdi-star",2,"color","#FFD700"],[2,"font-weight","600"]],template:function(c,i){if(c&1){let l=E();n(0,"div",4)(1,"div",5)(2,"h1",6),r(3,"Custom Cell Rendering"),a(),n(4,"p",7),r(5," Customize how cells are rendered using Angular templates. Perfect for displaying formatted values, badges, icons, buttons, or any custom UI elements within table cells. "),a(),n(6,"button",8),F("click",function(){return v(l),k(i.showCode.set(!i.showCode()))}),g(7,N,3,0)(8,z,3,0),a()(),n(9,"div",9)(10,"h2",10),r(11,"Real-World Example: E-commerce Product Table"),a(),n(12,"p",11),r(13," A product catalog table with custom cell renderers for price formatting, stock status with color coding, and star ratings. This demonstrates how to create rich, interactive table cells that go beyond plain text. "),a(),n(14,"div",12),g(15,H,1,2,"ng-template",null,0,C)(17,W,2,1,"ng-template",null,1,C)(19,$,2,5,"ng-template",null,2,C)(21,j,4,1,"ng-template",null,3,C),m(23,"tan-grid",13),a(),g(24,L,1,1,"ngsd-code-viewer",14),a()()}c&2&&(s(6),x("aria-expanded",i.showCode()),s(),f(i.showCode()?7:8),s(16),h("data",i.products)("columns",i.columns)("pagination",!1)("theme",i.tableTheme()),s(),f(i.showCode()?24:-1))},dependencies:[P,M,V]})}}return e})();export{ie as CustomCellsFeatureComponent};
