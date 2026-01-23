import{a as C}from"./chunk-NWN36NCE.js";import{a as b}from"./chunk-VCEQSUYG.js";import{a as x}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as r,Jb as v,La as l,Ya as g,aa as h,bb as d,cb as f,db as m,fa as u,hb as c,mb as i,nb as t,ob as o,ub as w,uc as S,vb as y}from"./chunk-5NTUSMKZ.js";function D(a,p){a&1&&(i(0,"span"),r(1,"Hide Code"),t(),o(2,"span",13))}function _(a,p){a&1&&(i(0,"span"),r(1,"Show Code"),t(),o(2,"span",14))}function E(a,p){if(a&1&&o(0,"ngsd-code-viewer",12),a&2){let s=y();m("code",s.code)}}var M=(()=>{class a{constructor(){this.tableThemeService=h(b),this.showCode=g(!1),this.tableTheme=this.tableThemeService.theme,this.largeDataset=Array.from({length:1e4},(s,e)=>({id:e+1,name:`Employee ${e+1}`,email:`employee${e+1}@example.com`,department:["Engineering","Marketing","Sales","HR","Finance"][e%5],role:["Developer","Manager","Analyst","Designer","Executive"][e%5],salary:5e4+e%10*1e4,status:e%3===0?"Active":e%3===1?"On Leave":"Inactive",joinDate:new Date(2020+e%4,e%12,e%28+1).toISOString().split("T")[0]})),this.columns=[{header:"ID",accessorKey:"id",width:"80px"},{header:"Name",accessorKey:"name",width:"200px"},{header:"Email",accessorKey:"email",width:"250px"},{header:"Department",accessorKey:"department",width:"150px"},{header:"Role",accessorKey:"role",width:"150px"},{header:"Salary",accessorKey:"salary",width:"120px"},{header:"Status",accessorKey:"status",width:"120px"},{header:"Join Date",accessorKey:"joinDate",width:"120px"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface LargeDataset {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  salary: number;
  status: string;
  joinDate: string;
}

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
  // Generate a large dataset (10,000 rows)
  largeDataset: LargeDataset[] = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: \`Employee \${i + 1}\`,
    email: \`employee\${i + 1}@example.com\`,
    department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'][i % 5],
    role: ['Developer', 'Manager', 'Analyst', 'Designer', 'Executive'][i % 5],
    salary: 50000 + (i % 10) * 10000,
    status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'On Leave' : 'Inactive',
    joinDate: new Date(2020 + (i % 4), i % 12, (i % 28) + 1).toISOString().split('T')[0],
  }));
  
  columns: TanGridColumn<LargeDataset>[] = [
    { header: 'ID', accessorKey: 'id', width: '80px' },
    { header: 'Name', accessorKey: 'name', width: '200px' },
    { header: 'Email', accessorKey: 'email', width: '250px' },
    { header: 'Department', accessorKey: 'department', width: '150px' },
    { header: 'Role', accessorKey: 'role', width: '150px' },
    { header: 'Salary', accessorKey: 'salary', width: '120px' },
    { header: 'Status', accessorKey: 'status', width: '120px' },
    { header: 'Join Date', accessorKey: 'joinDate', width: '120px' },
  ];
}`}static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275cmp=u({type:a,selectors:[["ngsd-virtual-scrolling-feature"]],standalone:!0,features:[v],decls:22,vars:13,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[1,"demo-info"],[1,"mdi","mdi-lightbulb-on-outline"],[3,"data","columns","virtualScroll","rowHeight","virtualScrollViewportHeight","pagination","sorting","globalSearch","filtering","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(e,n){e&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),r(3,"Virtual Scrolling"),t(),i(4,"p",3),r(5," Render only visible rows for optimal performance with large datasets. Virtual scrolling dramatically improves performance by rendering only the rows visible in the viewport, making it possible to handle thousands or millions of rows smoothly. Perfect for real-time data feeds, analytics dashboards, and performance-critical applications. "),t(),i(6,"button",4),w("click",function(){return n.showCode.set(!n.showCode())}),d(7,D,3,0)(8,_,3,0),t()(),i(9,"div",5)(10,"h2",6),r(11,"Real-World Example: Large Employee Database (10,000 Rows)"),t(),i(12,"p",7),r(13," A table displaying 10,000 employee records with virtual scrolling enabled. Notice how smoothly it scrolls despite the large dataset. Virtual scrolling renders only the visible rows plus a small buffer, making it possible to handle massive datasets without performance degradation. All table features (sorting, filtering, selection) work seamlessly with virtual scrolling. "),t(),i(14,"div",8)(15,"div",9),o(16,"span",10),i(17,"strong"),r(18,"Performance Tip:"),t(),r(19," This table contains 10,000 rows but only renders ~20-30 visible rows at a time. Scroll to see how smooth it is! "),t(),o(20,"tan-grid",11),t(),d(21,E,1,1,"ngsd-code-viewer",12),t()()),e&2&&(l(6),f("aria-expanded",n.showCode()),l(),c(n.showCode()?7:8),l(13),m("data",n.largeDataset)("columns",n.columns)("virtualScroll",!0)("rowHeight",48)("virtualScrollViewportHeight",600)("pagination",!1)("sorting",!0)("globalSearch",!0)("filtering",!1)("theme",n.tableTheme()),l(),c(n.showCode()?21:-1))},dependencies:[x,C,S]})}}return a})();export{M as VirtualScrollingFeatureComponent};
