import{a as x}from"./chunk-354T46RR.js";import{a as C}from"./chunk-VCEQSUYG.js";import{a as b}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as r,Jb as y,La as l,Ya as g,aa as u,bb as m,cb as f,db as d,fa as h,hb as c,mb as i,nb as t,ob as n,ub as w,uc as S,vb as v}from"./chunk-5NTUSMKZ.js";function _(a,p){a&1&&(i(0,"span"),r(1,"Hide Code"),t(),n(2,"span",13))}function T(a,p){a&1&&(i(0,"span"),r(1,"Show Code"),t(),n(2,"span",14))}function D(a,p){if(a&1&&n(0,"ngsd-code-viewer",12),a&2){let s=v();d("code",s.code)}}var M=(()=>{class a{constructor(){this.tableThemeService=u(C),this.showCode=g(!1),this.tableTheme=this.tableThemeService.theme,this.largeDataset=Array.from({length:1e4},(s,e)=>({id:e+1,name:`Employee ${e+1}`,email:`employee${e+1}@example.com`,department:["Engineering","Marketing","Sales","HR","Finance"][e%5],role:["Developer","Manager","Analyst","Designer","Executive"][e%5],salary:5e4+e%10*1e4,status:e%3===0?"Active":e%3===1?"On Leave":"Inactive",joinDate:new Date(2020+e%4,e%12,e%28+1).toISOString().split("T")[0]})),this.columns=[{header:"ID",accessorKey:"id",width:"80px"},{header:"Name",accessorKey:"name",width:"200px"},{header:"Email",accessorKey:"email",width:"250px"},{header:"Department",accessorKey:"department",width:"150px"},{header:"Role",accessorKey:"role",width:"150px"},{header:"Salary",accessorKey:"salary",width:"120px"},{header:"Status",accessorKey:"status",width:"120px"},{header:"Join Date",accessorKey:"joinDate",width:"120px"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-large-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="largeDataset" 
      [columns]="columns"
      [virtualScroll]="true"
      [rowHeight]="48"
      [virtualScrollViewportHeight]="600"
      [pagination]="false"
      [sorting]="true"
      [globalSearch]="true"
    ></tan-grid>
  \`
})
export class LargeTableComponent {
  // Large dataset with 10,000+ rows
  largeDataset: Data[] = [ /* ... */ ];
  
  columns: TanGridColumn<Data>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
    // ... more columns
  ];
}`}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=h({type:a,selectors:[["ngsd-virtual-scrolling-feature"]],standalone:!0,features:[y],decls:22,vars:13,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[1,"demo-info"],[1,"mdi","mdi-lightbulb-on-outline"],[3,"data","columns","virtualScroll","rowHeight","virtualScrollViewportHeight","pagination","sorting","globalSearch","filtering","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Virtual Scrolling"),t(),i(4,"p",3),r(5," Render only visible rows for optimal performance with large datasets. Virtual scrolling dramatically improves performance by rendering only the rows visible in the viewport, making it possible to handle thousands or millions of rows smoothly. Perfect for real-time data feeds, analytics dashboards, and performance-critical applications. "),t(),i(6,"button",4),w("click",function(){return o.showCode.set(!o.showCode())}),m(7,_,3,0)(8,T,3,0),t()(),i(9,"div",5)(10,"h2",6),r(11,"Real-World Example: Large Employee Database (10,000 Rows)"),t(),i(12,"p",7),r(13," A table displaying 10,000 employee records with virtual scrolling enabled. Notice how smoothly it scrolls despite the large dataset. Virtual scrolling renders only the visible rows plus a small buffer, making it possible to handle massive datasets without performance degradation. All table features (sorting, filtering, selection) work seamlessly with virtual scrolling. "),t(),i(14,"div",8)(15,"div",9),n(16,"span",10),i(17,"strong"),r(18,"Performance Tip:"),t(),r(19," This table contains 10,000 rows but only renders ~20-30 visible rows at a time. Scroll to see how smooth it is! "),t(),n(20,"tan-grid",11),t(),m(21,D,1,1,"ngsd-code-viewer",12),t()()),e&2&&(l(6),f("aria-expanded",o.showCode()),l(),c(o.showCode()?7:8),l(13),d("data",o.largeDataset)("columns",o.columns)("virtualScroll",!0)("rowHeight",48)("virtualScrollViewportHeight",600)("pagination",!1)("sorting",!0)("globalSearch",!0)("filtering",!1)("theme",o.tableTheme()),l(),c(o.showCode()?21:-1))},dependencies:[b,x,S]})}}return a})();export{M as VirtualScrollingFeatureComponent};
