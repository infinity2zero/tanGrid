import{a as k}from"./chunk-324QTZIF.js";import{a as T}from"./chunk-VCEQSUYG.js";import{a as C}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as e,Eb as h,Jb as S,La as r,Ya as x,aa as v,bb as g,cb as y,db as p,fa as f,fb as l,hb as u,mb as n,nb as t,ob as c,ub as s,uc as E,vb as _}from"./chunk-5NTUSMKZ.js";function M(a,b){a&1&&(n(0,"span"),e(1,"Hide Code"),t(),c(2,"span",20))}function w(a,b){a&1&&(n(0,"span"),e(1,"Show Code"),t(),c(2,"span",21))}function P(a,b){if(a&1&&c(0,"ngsd-code-viewer",13),a&2){let o=_();p("code",o.code)}}var I=(()=>{class a{constructor(){this.tableThemeService=v(T),this.showCode=x(!1),this.selectedTheme=this.tableThemeService.theme,this.products=[{id:1,name:"Laptop",category:"Electronics",price:999.99,stock:15,rating:4.5},{id:2,name:"Smartphone",category:"Electronics",price:699.99,stock:32,rating:4.8},{id:3,name:"Headphones",category:"Audio",price:149.99,stock:48,rating:4.2},{id:4,name:"Keyboard",category:"Accessories",price:79.99,stock:67,rating:4.6},{id:5,name:"Mouse",category:"Accessories",price:29.99,stock:89,rating:4.4},{id:6,name:"Monitor",category:"Electronics",price:299.99,stock:23,rating:4.7},{id:7,name:"Webcam",category:"Accessories",price:89.99,stock:41,rating:4.3},{id:8,name:"Speaker",category:"Audio",price:199.99,stock:18,rating:4.5}],this.columns=[{id:"id",header:"ID",accessorKey:"id",sortable:!0,width:"80px"},{id:"name",header:"Product Name",accessorKey:"name",sortable:!0},{id:"category",header:"Category",accessorKey:"category",sortable:!0},{id:"price",header:"Price",accessorKey:"price",sortable:!0,accessorFn:o=>`$${o.price.toFixed(2)}`,align:"right"},{id:"stock",header:"Stock",accessorKey:"stock",sortable:!0,align:"right"},{id:"rating",header:"Rating",accessorKey:"rating",sortable:!0,accessorFn:o=>`${o.rating.toFixed(1)}`,align:"center"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <!-- Material Design Theme -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="material"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>

    <!-- Bootstrap Theme -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="bootstrap"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>

    <!-- Ant Design Theme -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="ant"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>

    <!-- Ant Design Alt Theme -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="ant-alt"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>

    <!-- Default Theme (current styling) -->
    <tan-grid
      [data]="products"
      [columns]="columns"
      theme="default"
      [striped]="true"
      [bordered]="true"
    ></tan-grid>
  \`
})
export class ProductTableComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 15, rating: 4.5 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699.99, stock: 32, rating: 4.8 },
    { id: 3, name: 'Headphones', category: 'Audio', price: 149.99, stock: 48, rating: 4.2 },
    { id: 4, name: 'Keyboard', category: 'Accessories', price: 79.99, stock: 67, rating: 4.6 },
    { id: 5, name: 'Mouse', category: 'Accessories', price: 29.99, stock: 89, rating: 4.4 },
    { id: 6, name: 'Monitor', category: 'Electronics', price: 299.99, stock: 23, rating: 4.7 },
    { id: 7, name: 'Webcam', category: 'Accessories', price: 89.99, stock: 41, rating: 4.3 },
    { id: 8, name: 'Speaker', category: 'Audio', price: 199.99, stock: 18, rating: 4.5 },
  ];
  
  columns: TanGridColumn<Product>[] = [
    {
      id: 'id',
      header: 'ID',
      accessorKey: 'id',
      sortable: true,
      width: '80px',
    },
    {
      id: 'name',
      header: 'Product Name',
      accessorKey: 'name',
      sortable: true,
    },
    {
      id: 'category',
      header: 'Category',
      accessorKey: 'category',
      sortable: true,
    },
    {
      id: 'price',
      header: 'Price',
      accessorKey: 'price',
      sortable: true,
      accessorFn: (row) => \`$\${row.price.toFixed(2)}\`,
      align: 'right',
    },
    {
      id: 'stock',
      header: 'Stock',
      accessorKey: 'stock',
      sortable: true,
      align: 'right',
    },
    {
      id: 'rating',
      header: 'Rating',
      accessorKey: 'rating',
      sortable: true,
      accessorFn: (row) => \`\${row.rating.toFixed(1)}\`,
      align: 'center',
    },
  ];
}`}setTheme(o){this.tableThemeService.setTheme(o)}static{this.\u0275fac=function(m){return new(m||a)}}static{this.\u0275cmp=f({type:a,selectors:[["ngsd-themes-feature"]],standalone:!0,features:[S],decls:190,vars:26,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"theme-selector"],["type","button",1,"theme-btn",3,"click"],[1,"feature-example__preview"],[3,"data","columns","theme","striped","bordered","hoverable","sorting","pagination","pageSize"],[1,"theme-note"],[3,"code"],[1,"feature-info"],[1,"feature-info__title"],[1,"theme-grid"],[1,"theme-card"],[1,"feature-info__subtitle"],[1,"variable-list"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(m,i){m&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),e(3,"Table Themes"),t(),n(4,"p",3),e(5," Choose from multiple built-in themes: Material Design, Bootstrap, Ant Design, or keep the default styling. Each theme provides a distinct visual style while maintaining all table functionality. "),t(),n(6,"button",4),s("click",function(){return i.showCode.set(!i.showCode())}),g(7,M,3,0)(8,w,3,0),t()(),n(9,"div",5)(10,"h2",6),e(11,"Theme Selector"),t(),n(12,"p",7),e(13," Use the buttons below to switch between different themes and see how the table appearance changes. "),t(),n(14,"div",8)(15,"button",9),s("click",function(){return i.setTheme("default")}),e(16," Default "),t(),n(17,"button",9),s("click",function(){return i.setTheme("material")}),e(18," Material Design "),t(),n(19,"button",9),s("click",function(){return i.setTheme("bootstrap")}),e(20," Bootstrap "),t(),n(21,"button",9),s("click",function(){return i.setTheme("ant")}),e(22," Ant Design "),t(),n(23,"button",9),s("click",function(){return i.setTheme("ant-alt")}),e(24," Ant Design Alt "),t()(),n(25,"div",10),c(26,"tan-grid",11),n(27,"p",12)(28,"strong"),e(29,"Note:"),t(),e(30," The theme selected in the navbar dropdown above applies to all tables in the demo. Use the buttons below to preview different themes on this specific table. "),t()(),g(31,P,1,1,"ngsd-code-viewer",13),t(),n(32,"div",14)(33,"h3",15),e(34,"Theme Characteristics"),t(),n(35,"div",16)(36,"div",17)(37,"h4"),e(38,"Default"),t(),n(39,"p"),e(40,"Current styling with sharp edges, clean borders, and professional appearance."),t()(),n(41,"div",17)(42,"h4"),e(43,"Material Design"),t(),n(44,"p"),e(45,"Rounded corners (4px), elevation shadows, 8dp grid system, and Material Design colors."),t()(),n(46,"div",17)(47,"h4"),e(48,"Bootstrap"),t(),n(49,"p"),e(50,"Bootstrap 5 styling with rounded corners (6px), standard spacing, and Bootstrap colors."),t()(),n(51,"div",17)(52,"h4"),e(53,"Ant Design"),t(),n(54,"p"),e(55,"Sharp edges (0px), high contrast, compact spacing, and Ant Design color scheme."),t()(),n(56,"div",17)(57,"h4"),e(58,"Ant Design Alt"),t(),n(59,"p"),e(60,"Same as Ant Design but with row borders only (no column borders)."),t()()()(),n(61,"div",14)(62,"h3",15),e(63,"Global Setup"),t(),n(64,"p"),e(65," To use the table with its default themes and variables, make sure to import the core styles in your global styles (e.g., "),n(66,"code"),e(67,"styles.scss"),t(),e(68,"): "),t(),n(69,"pre")(70,"code"),e(71,`// Import library variables and core styles
@import 'tangrid/styles/variables';

// If you are using a pre-built theme, you might need to import it as well
// @import 'tangrid/styles/themes/default';`),t()(),n(72,"h3",15),e(73,"Overriding Themes"),t(),n(74,"p"),e(75," You can override any theme by targeting the theme class in your global styles or component styles (using "),n(76,"code"),e(77,"::ng-deep"),t(),e(78," if needed). The themes use CSS variables which makes them easy to customize. "),t(),n(79,"pre")(80,"code"),e(81),t()(),n(82,"h4",18),e(83,"Available CSS Variables"),t(),n(84,"p"),e(85,"The following CSS variables are available for customization:"),t(),n(86,"div",19)(87,"h5"),e(88,"Colors"),t(),n(89,"ul")(90,"li")(91,"code"),e(92,"--ngs-primary"),t(),e(93,": Primary brand color (used for active states, links, focus rings)"),t(),n(94,"li")(95,"code"),e(96,"--ngs-primary-hover"),t(),e(97,": Hover state for primary actions"),t(),n(98,"li")(99,"code"),e(100,"--ngs-primary-active"),t(),e(101,": Active state for primary actions"),t(),n(102,"li")(103,"code"),e(104,"--ngs-primary-light"),t(),e(105,": Light shade of primary color (backgrounds)"),t(),n(106,"li")(107,"code"),e(108,"--ngs-secondary"),t(),e(109,": Secondary color (neutral actions)"),t(),n(110,"li")(111,"code"),e(112,"--ngs-text-primary"),t(),e(113,": Main text color"),t(),n(114,"li")(115,"code"),e(116,"--ngs-text-secondary"),t(),e(117,": Secondary text color (headers, hints)"),t(),n(118,"li")(119,"code"),e(120,"--ngs-text-muted"),t(),e(121,": Muted text color (disabled states)"),t(),n(122,"li")(123,"code"),e(124,"--ngs-text-inverse"),t(),e(125,": Inverse text color (text on primary background)"),t(),n(126,"li")(127,"code"),e(128,"--ngs-bg-primary"),t(),e(129,": Primary background color (table body)"),t(),n(130,"li")(131,"code"),e(132,"--ngs-bg-secondary"),t(),e(133,": Secondary background color (headers, striped rows)"),t(),n(134,"li")(135,"code"),e(136,"--ngs-bg-tertiary"),t(),e(137,": Tertiary background color (hover states)"),t(),n(138,"li")(139,"code"),e(140,"--ngs-border-color"),t(),e(141,": Main border color"),t()(),n(142,"h5"),e(143,"Typography"),t(),n(144,"ul")(145,"li")(146,"code"),e(147,"--ngs-font-family"),t(),e(148,": Font family for the table"),t(),n(149,"li")(150,"code"),e(151,"--ngs-font-size-base"),t(),e(152,": Base font size (14px default)"),t(),n(153,"li")(154,"code"),e(155,"--ngs-font-size-sm"),t(),e(156,": Small font size (13px default)"),t()(),n(157,"h5"),e(158,"Layout & Spacing"),t(),n(159,"ul")(160,"li")(161,"code"),e(162,"--ngs-border-radius"),t(),e(163,": Border radius for container and inputs"),t(),n(164,"li")(165,"code"),e(166,"--ngs-spacing-xs"),t(),e(167,": Extra small spacing (2px)"),t(),n(168,"li")(169,"code"),e(170,"--ngs-spacing-sm"),t(),e(171,": Small spacing (4px)"),t(),n(172,"li")(173,"code"),e(174,"--ngs-spacing-md"),t(),e(175,": Medium spacing (8px)"),t(),n(176,"li")(177,"code"),e(178,"--ngs-spacing-lg"),t(),e(179,": Large spacing (12px)"),t()()(),n(180,"h4",18),e(181,"Creating a Custom Theme"),t(),n(182,"p"),e(183," To create a completely new theme, you can define a class that sets these variables and pass it to the "),n(184,"code"),e(185,"theme"),t(),e(186," input. Note that for custom themes not in the predefined list, you might need to handle the class application manually or extend the types. "),t(),n(187,"pre")(188,"code"),e(189),t()()()()),m&2&&(r(6),y("aria-expanded",i.showCode()),r(),u(i.showCode()?7:8),r(8),l("theme-btn--active",i.selectedTheme()==="default"),r(2),l("theme-btn--active",i.selectedTheme()==="material"),r(2),l("theme-btn--active",i.selectedTheme()==="bootstrap"),r(2),l("theme-btn--active",i.selectedTheme()==="ant"),r(2),l("theme-btn--active",i.selectedTheme()==="ant-alt"),r(3),p("data",i.products)("columns",i.columns)("theme",i.selectedTheme())("striped",!0)("bordered",!0)("hoverable",!0)("sorting",!0)("pagination",!0)("pageSize",5),r(5),u(i.showCode()?31:-1),r(50),h(".tan-grid--theme-material ","{",`
  --ngs-primary: #ff4081; /* Change primary color */
  --ngs-border-radius: 8px; /* Change border radius */
`,"}",""),r(108),h(`/* global-styles.scss */
.tan-grid--theme-cyberpunk `,"{",`
  --ngs-primary: #0ff;
  --ngs-bg-primary: #000;
  --ngs-text-primary: #0f0;
  --ngs-border-radius: 0;
  --ngs-font-family: 'Courier New', monospace;
`,"}",""))},dependencies:[E,C,k],styles:[".feature-header[_ngcontent-%COMP%]{margin-bottom:var(--ngs-spacing-3xl)}.feature-title[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-3xl);font-weight:var(--ngs-font-weight-bold);margin:0 0 var(--ngs-spacing-md) 0;color:var(--ngs-text-primary)}.feature-description[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-lg);color:var(--ngs-text-secondary);line-height:1.7;margin:0 0 var(--ngs-spacing-lg) 0}.feature-toggle-code[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--ngs-spacing-xs);padding:var(--ngs-spacing-sm) var(--ngs-spacing-md);background:var(--ngs-primary);border:1px solid var(--ngs-primary);border-radius:var(--ngs-border-radius);cursor:pointer;font-size:var(--ngs-font-size-sm);color:var(--ngs-text-inverse);transition:var(--ngs-transition-base);font-weight:var(--ngs-font-weight-medium)}.feature-toggle-code[_ngcontent-%COMP%]:hover{background:var(--ngs-primary-hover);border-color:var(--ngs-primary-hover)}.feature-example[_ngcontent-%COMP%]{background:var(--ngs-bg-primary);border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius);overflow:hidden;margin-bottom:var(--ngs-spacing-2xl)}.feature-example__title[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-xl);font-weight:var(--ngs-font-weight-semibold);margin:0 0 var(--ngs-spacing-xs) 0;padding:var(--ngs-spacing-lg) var(--ngs-spacing-xl);background:var(--ngs-bg-secondary);border-bottom:1px solid var(--ngs-border-color);color:var(--ngs-text-primary)}.feature-example__description[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-base);color:var(--ngs-text-secondary);margin:0 0 var(--ngs-spacing-lg) 0;padding:0 var(--ngs-spacing-xl);line-height:1.6}.theme-selector[_ngcontent-%COMP%]{display:flex;gap:var(--ngs-spacing-sm);padding:0 var(--ngs-spacing-xl) var(--ngs-spacing-lg);flex-wrap:wrap}.theme-btn[_ngcontent-%COMP%]{padding:var(--ngs-spacing-sm) var(--ngs-spacing-lg);background:var(--ngs-bg-primary);border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius);cursor:pointer;font-size:var(--ngs-font-size-base);color:var(--ngs-text-primary);transition:var(--ngs-transition-base);font-weight:var(--ngs-font-weight-medium)}.theme-btn[_ngcontent-%COMP%]:hover{background:var(--ngs-bg-secondary);border-color:var(--ngs-primary)}.theme-btn--active[_ngcontent-%COMP%]{background:var(--ngs-primary);color:var(--ngs-text-inverse);border-color:var(--ngs-primary)}.feature-example__preview[_ngcontent-%COMP%]{padding:var(--ngs-spacing-xl);background:var(--ngs-bg-primary)}.theme-note[_ngcontent-%COMP%]{margin-top:var(--ngs-spacing-lg);padding:var(--ngs-spacing-md);background:var(--ngs-primary-light);border-left:3px solid var(--ngs-primary);border-radius:var(--ngs-border-radius);font-size:var(--ngs-font-size-sm);color:var(--ngs-primary-dark);line-height:1.6}.feature-info[_ngcontent-%COMP%]{background:var(--ngs-bg-secondary);padding:var(--ngs-spacing-xl);border-radius:var(--ngs-border-radius)}.feature-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-xl);margin:0 0 var(--ngs-spacing-lg) 0;color:var(--ngs-text-primary)}.feature-info__subtitle[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-lg);font-weight:var(--ngs-font-weight-semibold);margin:var(--ngs-spacing-xl) 0 var(--ngs-spacing-md) 0;color:var(--ngs-text-primary)}.feature-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-base);color:var(--ngs-text-secondary);line-height:1.6;margin:0 0 var(--ngs-spacing-md) 0}.feature-info[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background:var(--ngs-bg-primary);padding:var(--ngs-spacing-md);border-radius:var(--ngs-border-radius);border:1px solid var(--ngs-border-color);overflow-x:auto;margin:var(--ngs-spacing-md) 0}.feature-info[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:var(--ngs-font-size-sm);color:var(--ngs-text-primary)}.variable-list[_ngcontent-%COMP%]{margin:var(--ngs-spacing-lg) 0}.variable-list[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-base);font-weight:var(--ngs-font-weight-semibold);margin:var(--ngs-spacing-md) 0 var(--ngs-spacing-sm) 0;color:var(--ngs-text-primary)}.variable-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0 0 var(--ngs-spacing-lg) 0}.variable-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-sm);color:var(--ngs-text-secondary);margin-bottom:var(--ngs-spacing-xs)}.variable-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:var(--ngs-bg-primary);padding:2px 4px;border-radius:4px;border:1px solid var(--ngs-border-color);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;color:var(--ngs-primary);margin-right:var(--ngs-spacing-sm)}.theme-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:var(--ngs-spacing-lg)}.theme-card[_ngcontent-%COMP%]{background:var(--ngs-bg-primary);border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius);padding:var(--ngs-spacing-lg)}.theme-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-lg);font-weight:var(--ngs-font-weight-semibold);margin:0 0 var(--ngs-spacing-sm) 0;color:var(--ngs-text-primary)}.theme-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-base);color:var(--ngs-text-secondary);line-height:1.6;margin:0}"]})}}return a})();export{I as ThemesFeatureComponent};
