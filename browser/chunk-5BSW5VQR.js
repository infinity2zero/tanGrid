import{a as K}from"./chunk-354T46RR.js";import{a as F}from"./chunk-VCEQSUYG.js";import{a as E}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as n,Jb as R,La as m,Pb as f,Ya as x,aa as b,bb as c,cb as S,db as C,fa as T,hb as v,mb as t,nb as a,oa as g,ob as s,pa as w,sb as _,ub as y,uc as V,vb as H,xb as p,yb as u,zb as h}from"./chunk-5NTUSMKZ.js";var k=["viewsHeader"],A=["ratingHeader"],Q=["actionsHeader"];function D(e,l){e&1&&(t(0,"span"),n(1,"Hide Code"),a(),s(2,"span",14))}function I(e,l){e&1&&(t(0,"span"),n(1,"Show Code"),a(),s(2,"span",15))}function z(e,l){e&1&&(t(0,"div",16),s(1,"span",17),t(2,"span"),n(3,"Views"),a()())}function G(e,l){if(e&1){let d=_();t(0,"div",16),s(1,"span",18),t(2,"span"),n(3,"Rating"),a(),t(4,"button",19),y("click",function(){g(d);let i=H();return w(i.onSortClick())}),n(5," Sort "),a()()}}function B(e,l){e&1&&(t(0,"div",16),s(1,"span",20),t(2,"span"),n(3,"Actions"),a()())}function M(e,l){if(e&1&&s(0,"ngsd-code-viewer",13),e&2){let d=H();C("code",d.code)}}var X=(()=>{class e{constructor(){this.tableThemeService=b(F),this.showCode=x(!1),this.tableTheme=this.tableThemeService.theme,this.reports=[{id:1,title:"Q4 Sales Report",author:"John Doe",views:1250,downloads:342,rating:4.5,date:"2024-01-15"},{id:2,title:"Marketing Analysis",author:"Jane Smith",views:890,downloads:201,rating:4.2,date:"2024-01-14"},{id:3,title:"Budget Forecast",author:"Bob Johnson",views:2100,downloads:567,rating:4.8,date:"2024-01-16"},{id:4,title:"User Research",author:"Alice Brown",views:650,downloads:123,rating:4,date:"2024-01-17"},{id:5,title:"Product Roadmap",author:"Charlie Wilson",views:1800,downloads:445,rating:4.7,date:"2024-01-15"}],this.columns=[],this.code=`import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-reports-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <ng-template #viewsHeader>
      <div class="custom-header">
        <span class="mdi mdi-eye"></span>
        <span>Views</span>
      </div>
    </ng-template>
    
    <ng-template #ratingHeader>
      <div class="custom-header">
        <span class="mdi mdi-star"></span>
        <span>Rating</span>
        <button (click)="sortByRating()">Sort</button>
      </div>
    </ng-template>
    
    <ng-template #actionsHeader>
      <div class="custom-header">
        <span class="mdi mdi-cog"></span>
        <span>Actions</span>
      </div>
    </ng-template>
    
    <tan-grid 
      [data]="reports" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class ReportsTableComponent implements AfterViewInit {
  @ViewChild('viewsHeader', { static: true }) viewsHeader!: TemplateRef<any>;
  @ViewChild('ratingHeader', { static: true }) ratingHeader!: TemplateRef<any>;
  @ViewChild('actionsHeader', { static: true }) actionsHeader!: TemplateRef<any>;
  
  reports: Report[] = [ /* ... */ ];
  
  columns: TanGridColumn<Report>[] = [];
  
  ngAfterViewInit() {
    // Use header property with TemplateRef for custom headers
    this.columns = [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Title', accessorKey: 'title' },
      { header: this.viewsHeader, accessorKey: 'views' },
      { header: this.ratingHeader, accessorKey: 'rating' },
      { header: this.actionsHeader, accessorKey: 'id' },
    ];
  }
}`}ngAfterViewInit(){this.columns=[{header:"ID",accessorKey:"id"},{header:"Title",accessorKey:"title"},{header:"Author",accessorKey:"author"},{header:this.viewsHeader,accessorKey:"views"},{header:"Downloads",accessorKey:"downloads"},{header:this.ratingHeader,accessorKey:"rating"},{header:"Date",accessorKey:"date"},{header:this.actionsHeader,accessorKey:"id"}]}onSortClick(){alert("Sort by rating clicked!")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=T({type:e,selectors:[["ngsd-custom-headers-feature"]],viewQuery:function(r,i){if(r&1&&(p(k,7),p(A,7),p(Q,7)),r&2){let o;u(o=h())&&(i.viewsHeader=o.first),u(o=h())&&(i.ratingHeader=o.first),u(o=h())&&(i.actionsHeader=o.first)}},standalone:!0,features:[R],decls:23,vars:7,consts:[["viewsHeader",""],["ratingHeader",""],["actionsHeader",""],[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],[2,"display","flex","align-items","center","gap","0.5rem"],[1,"mdi","mdi-eye",2,"font-size","1rem"],[1,"mdi","mdi-star",2,"font-size","1rem"],[2,"padding","0.25rem 0.5rem","font-size","0.75rem","background","var(--ngs-primary)","color","white","border","none","border-radius","var(--ngs-border-radius)","cursor","pointer",3,"click"],[1,"mdi","mdi-cog",2,"font-size","1rem"]],template:function(r,i){if(r&1){let o=_();t(0,"div",3)(1,"div",4)(2,"h1",5),n(3,"Custom Header Templates"),a(),t(4,"p",6),n(5," Customize column headers with your own templates. Add icons, buttons, tooltips, or any custom content to headers. Perfect for adding interactive elements, help text, or branded styling to table headers. "),a(),t(6,"button",7),y("click",function(){return g(o),w(i.showCode.set(!i.showCode()))}),c(7,D,3,0)(8,I,3,0),a()(),t(9,"div",8)(10,"h2",9),n(11,"Real-World Example: Report Dashboard with Custom Headers"),a(),t(12,"p",10),n(13," A report management table with custom header templates. Headers include icons, interactive buttons, and custom styling. This demonstrates how to create rich, interactive table headers that go beyond plain text labels. Perfect for dashboards, admin panels, or any application where headers need to be more than just labels. "),a(),t(14,"div",11),c(15,z,4,0,"ng-template",null,0,f)(17,G,6,0,"ng-template",null,1,f)(19,B,4,0,"ng-template",null,2,f),s(21,"tan-grid",12),a(),c(22,M,1,1,"ngsd-code-viewer",13),a()()}r&2&&(m(6),S("aria-expanded",i.showCode()),m(),v(i.showCode()?7:8),m(14),C("data",i.reports)("columns",i.columns)("pagination",!1)("theme",i.tableTheme()),m(),v(i.showCode()?22:-1))},dependencies:[E,K,V]})}}return e})();export{X as CustomHeadersFeatureComponent};
