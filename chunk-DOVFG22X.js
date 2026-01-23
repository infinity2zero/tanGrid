import{a as E}from"./chunk-324QTZIF.js";import{a as R}from"./chunk-VCEQSUYG.js";import{a as M}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as a,Cb as b,Jb as T,La as s,Ya as m,aa as w,bb as C,cb as S,db as g,fa as y,hb as _,kb as x,lb as P,mb as o,nb as i,oa as u,ob as l,pa as f,sb as v,ub as h,uc as k,vb as p}from"./chunk-5NTUSMKZ.js";var L=(r,d)=>d.accessorKey;function F(r,d){r&1&&(o(0,"span"),a(1,"Hide Code"),i(),l(2,"span",17))}function O(r,d){r&1&&(o(0,"span"),a(1,"Show Code"),i(),l(2,"span",18))}function D(r,d){if(r&1){let e=v();o(0,"label",12)(1,"input",19),h("change",function(){let n=u(e).$implicit,c=p();return f(c.togglePinLeft(c.getColumnKey(n)))}),i(),o(2,"span"),a(3),i()()}if(r&2){let e=d.$implicit,t=p();s(),g("checked",t.isPinnedLeft(t.getColumnKey(e)))("disabled",t.isPinnedRight(t.getColumnKey(e))),s(2),b(e.header)}}function $(r,d){if(r&1){let e=v();o(0,"label",12)(1,"input",19),h("change",function(){let n=u(e).$implicit,c=p();return f(c.togglePinRight(c.getColumnKey(n)))}),i(),o(2,"span"),a(3),i()()}if(r&2){let e=d.$implicit,t=p();s(),g("checked",t.isPinnedRight(t.getColumnKey(e)))("disabled",t.isPinnedLeft(t.getColumnKey(e))),s(2),b(e.header)}}function A(r,d){if(r&1&&l(0,"ngsd-code-viewer",16),r&2){let e=p();g("code",e.code)}}var U=(()=>{class r{constructor(){this.tableThemeService=w(R),this.showCode=m(!1),this.tableTheme=this.tableThemeService.theme,this.products=Array.from({length:50},(e,t)=>({id:`PROD-${String(t+1).padStart(4,"0")}`,name:`Product ${t+1}`,category:["Electronics","Clothing","Food","Books","Toys"][t%5],price:Math.round((Math.random()*1e3+10)*100)/100,stock:Math.floor(Math.random()*1e3),supplier:`Supplier ${t%10+1}`,rating:Math.round((Math.random()*4+1)*10)/10,description:`This is a detailed description for product ${t+1} with many features and specifications.`,status:t%3===0?"Active":t%3===1?"Pending":"Discontinued",createdAt:new Date(2023+t%2,t%12,t%28+1).toISOString().split("T")[0]})),this.columns=[{header:"ID",accessorKey:"id",width:"120px"},{header:"Name",accessorKey:"name",width:"200px"},{header:"Category",accessorKey:"category",width:"150px"},{header:"Price",accessorKey:"price",width:"120px"},{header:"Stock",accessorKey:"stock",width:"100px"},{header:"Supplier",accessorKey:"supplier",width:"150px"},{header:"Rating",accessorKey:"rating",width:"100px"},{header:"Description",accessorKey:"description",width:"300px"},{header:"Status",accessorKey:"status",width:"120px"},{header:"Created",accessorKey:"createdAt",width:"120px"}],this.pinnedLeft=m(["id","name"]),this.pinnedRight=m(["status"]),this.columnPinningState={},this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  supplier: string;
  rating: number;
  description: string;
  status: string;
  createdAt: string;
}

@Component({
  selector: 'app-pinned-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="products" 
      [columns]="columns"
      [pinnedLeft]="['id', 'name']"
      [pinnedRight]="['status']"
      [pagination]="true"
      [sorting]="true"
    ></tan-grid>
  \`
})
export class PinnedTableComponent {
  products: Product[] = Array.from({ length: 50 }, (_, i) => ({
    id: \`PROD-\${String(i + 1).padStart(4, '0')}\`,
    name: \`Product \${i + 1}\`,
    category: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'][i % 5],
    price: Math.round((Math.random() * 1000 + 10) * 100) / 100,
    stock: Math.floor(Math.random() * 1000),
    supplier: \`Supplier \${(i % 10) + 1}\`,
    rating: Math.round((Math.random() * 4 + 1) * 10) / 10,
    description: \`This is a detailed description for product \${i + 1} with many features and specifications.\`,
    status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Discontinued',
    createdAt: new Date(2023 + (i % 2), i % 12, (i % 28) + 1).toISOString().split('T')[0],
  }));
  
  columns: TanGridColumn<Product>[] = [
    { header: 'ID', accessorKey: 'id', width: '120px' },
    { header: 'Name', accessorKey: 'name', width: '200px' },
    { header: 'Category', accessorKey: 'category', width: '150px' },
    { header: 'Price', accessorKey: 'price', width: '120px' },
    { header: 'Stock', accessorKey: 'stock', width: '100px' },
    { header: 'Supplier', accessorKey: 'supplier', width: '150px' },
    { header: 'Rating', accessorKey: 'rating', width: '100px' },
    { header: 'Description', accessorKey: 'description', width: '300px' },
    { header: 'Status', accessorKey: 'status', width: '120px' },
    { header: 'Created', accessorKey: 'createdAt', width: '120px' },
  ];
  
  // Pin columns by their accessorKey/column ID
  pinnedLeft = ['id', 'name'];
  pinnedRight = ['status'];
}`,this.columns.forEach(e=>{let t=e.accessorKey;this.columnPinningState[t]={left:this.pinnedLeft().includes(t),right:this.pinnedRight().includes(t)}})}getColumnKey(e){return e.accessorKey||""}togglePinLeft(e){if(!e)return;let t=this.pinnedLeft();t.includes(e)?(this.pinnedLeft.set(t.filter(n=>n!==e)),this.columnPinningState[e]&&(this.columnPinningState[e].left=!1)):(this.pinnedRight().includes(e)&&this.togglePinRight(e),this.pinnedLeft.set([...t,e]),this.columnPinningState[e]||(this.columnPinningState[e]={left:!1,right:!1}),this.columnPinningState[e].left=!0)}togglePinRight(e){if(!e)return;let t=this.pinnedRight();t.includes(e)?(this.pinnedRight.set(t.filter(n=>n!==e)),this.columnPinningState[e]&&(this.columnPinningState[e].right=!1)):(this.pinnedLeft().includes(e)&&this.togglePinLeft(e),this.pinnedRight.set([...t,e]),this.columnPinningState[e]||(this.columnPinningState[e]={left:!1,right:!1}),this.columnPinningState[e].right=!0)}isPinnedLeft(e){return e?this.pinnedLeft().includes(e):!1}isPinnedRight(e){return e?this.pinnedRight().includes(e):!1}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=y({type:r,selectors:[["ngsd-column-pinning-feature"]],standalone:!0,features:[T],decls:35,vars:13,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[1,"pinning-controls"],[1,"pinning-controls__section"],[1,"pinning-controls__checkboxes"],[1,"pinning-control"],[1,"demo-info"],[1,"mdi","mdi-lightbulb-on-outline"],[3,"data","columns","pinnedLeft","pinnedRight","pagination","pageSize","sorting","bordered","hoverable","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],["type","checkbox",3,"change","checked","disabled"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Column Pinning (Sticky Columns)"),i(),o(4,"p",3),a(5," Pin columns to the left or right side of the table to keep them visible while scrolling horizontally. This is especially useful for tables with many columns where you want to keep important columns (like ID, name, or status) always visible. Perfect for wide tables, comparison views, and data analysis scenarios. "),i(),o(6,"button",4),h("click",function(){return n.showCode.set(!n.showCode())}),C(7,F,3,0)(8,O,3,0),i()(),o(9,"div",5)(10,"h2",6),a(11,"Interactive Demo: Pin/Unpin Columns"),i(),o(12,"p",7),a(13," Use the controls below to pin or unpin columns. Pinned columns stay visible while scrolling horizontally. Try pinning different columns and scroll to see the effect. A column can be pinned to either left or right, but not both. "),i(),o(14,"div",8)(15,"div",9)(16,"div",10)(17,"h3"),a(18,"Pin to Left"),i(),o(19,"div",11),x(20,D,4,3,"label",12,L),i()(),o(22,"div",10)(23,"h3"),a(24,"Pin to Right"),i(),o(25,"div",11),x(26,$,4,3,"label",12,L),i()()(),o(28,"div",13),l(29,"span",14),o(30,"strong"),a(31,"Tip:"),i(),a(32," Scroll horizontally to see how pinned columns stay fixed. Try pinning different columns using the controls above. "),i(),l(33,"tan-grid",15),i(),C(34,A,1,1,"ngsd-code-viewer",16),i()()),t&2&&(s(6),S("aria-expanded",n.showCode()),s(),_(n.showCode()?7:8),s(13),P(n.columns),s(6),P(n.columns),s(7),g("data",n.products)("columns",n.columns)("pinnedLeft",n.pinnedLeft())("pinnedRight",n.pinnedRight())("pagination",!0)("pageSize",10)("sorting",!0)("bordered",!0)("hoverable",!0)("theme",n.tableTheme()),s(),_(n.showCode()?34:-1))},dependencies:[M,E,k],styles:[".pinning-controls[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:var(--ngs-spacing-xl);margin-bottom:var(--ngs-spacing-lg);padding:var(--ngs-spacing-lg);background-color:var(--ngs-bg-secondary);border-radius:var(--ngs-border-radius);border:1px solid var(--ngs-border-color)}@media (max-width: 768px){.pinning-controls[_ngcontent-%COMP%]{grid-template-columns:1fr}}.pinning-controls__section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 var(--ngs-spacing-md) 0;font-size:var(--ngs-font-size-base);font-weight:var(--ngs-font-weight-semibold);color:var(--ngs-text-primary)}.pinning-controls__checkboxes[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--ngs-spacing-sm)}.pinning-control[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--ngs-spacing-sm);cursor:pointer;padding:var(--ngs-spacing-xs);border-radius:var(--ngs-border-radius);transition:var(--ngs-transition-base)}.pinning-control[_ngcontent-%COMP%]:hover{background-color:var(--ngs-bg-primary)}.pinning-control[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{cursor:pointer;width:18px;height:18px;margin:0}.pinning-control[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.5}.pinning-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-sm);color:var(--ngs-text-primary);-webkit-user-select:none;user-select:none}"]})}}return r})();export{U as ColumnPinningFeatureComponent};
