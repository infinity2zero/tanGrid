import{a as K}from"./chunk-324QTZIF.js";import{a as F}from"./chunk-VCEQSUYG.js";import{a as E}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as n,Jb as R,La as m,Pb as g,Ya as T,aa as H,bb as c,cb as x,db as v,fa as S,hb as C,mb as t,nb as i,oa as w,ob as s,pa as f,sb as y,ub as _,uc as V,vb as b,xb as p,yb as u,zb as h}from"./chunk-5NTUSMKZ.js";var k=["viewsHeader"],A=["ratingHeader"],D=["actionsHeader"];function Q(e,l){e&1&&(t(0,"span"),n(1,"Hide Code"),i(),s(2,"span",14))}function B(e,l){e&1&&(t(0,"span"),n(1,"Show Code"),i(),s(2,"span",15))}function I(e,l){e&1&&(t(0,"div",16),s(1,"span",17),t(2,"span"),n(3,"Views"),i()())}function J(e,l){if(e&1){let d=y();t(0,"div",16),s(1,"span",18),t(2,"span"),n(3,"Rating"),i(),t(4,"button",19),_("click",function(){w(d);let a=b();return f(a.onSortClick())}),n(5," Sort "),i()()}}function z(e,l){e&1&&(t(0,"div",16),s(1,"span",20),t(2,"span"),n(3,"Actions"),i()())}function G(e,l){if(e&1&&s(0,"ngsd-code-viewer",13),e&2){let d=b();v("code",d.code)}}var X=(()=>{class e{constructor(){this.tableThemeService=H(F),this.showCode=T(!1),this.tableTheme=this.tableThemeService.theme,this.reports=[{id:1,title:"Q4 Sales Report",author:"John Doe",views:1250,downloads:342,rating:4.5,date:"2024-01-15"},{id:2,title:"Marketing Analysis",author:"Jane Smith",views:890,downloads:201,rating:4.2,date:"2024-01-14"},{id:3,title:"Budget Forecast",author:"Bob Johnson",views:2100,downloads:567,rating:4.8,date:"2024-01-16"},{id:4,title:"User Research",author:"Alice Brown",views:650,downloads:123,rating:4,date:"2024-01-17"},{id:5,title:"Product Roadmap",author:"Charlie Wilson",views:1800,downloads:445,rating:4.7,date:"2024-01-15"}],this.columns=[],this.code=`import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Report {
  id: number;
  title: string;
  author: string;
  views: number;
  downloads: number;
  rating: number;
  date: string;
}

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
  
  reports: Report[] = [
    { id: 1, title: 'Q4 Sales Report', author: 'John Doe', views: 1250, downloads: 342, rating: 4.5, date: '2024-01-15' },
    { id: 2, title: 'Marketing Analysis', author: 'Jane Smith', views: 890, downloads: 201, rating: 4.2, date: '2024-01-14' },
    { id: 3, title: 'Budget Forecast', author: 'Bob Johnson', views: 2100, downloads: 567, rating: 4.8, date: '2024-01-16' },
    { id: 4, title: 'User Research', author: 'Alice Brown', views: 650, downloads: 123, rating: 4.0, date: '2024-01-17' },
    { id: 5, title: 'Product Roadmap', author: 'Charlie Wilson', views: 1800, downloads: 445, rating: 4.7, date: '2024-01-15' },
  ];
  
  columns: TanGridColumn<Report>[] = [];
  
  ngAfterViewInit() {
    // Use header property with TemplateRef for custom headers
    this.columns = [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Title', accessorKey: 'title' },
      { header: this.viewsHeader, accessorKey: 'views' },
      { header: 'Downloads', accessorKey: 'downloads' },
      { header: this.ratingHeader, accessorKey: 'rating' },
      { header: 'Date', accessorKey: 'date' },
      { header: this.actionsHeader, accessorKey: 'id' },
    ];
  }
  
  sortByRating() {
    console.log('Sorting by rating...');
  }
}`}ngAfterViewInit(){this.columns=[{header:"ID",accessorKey:"id"},{header:"Title",accessorKey:"title"},{header:"Author",accessorKey:"author"},{header:this.viewsHeader,accessorKey:"views"},{header:"Downloads",accessorKey:"downloads"},{header:this.ratingHeader,accessorKey:"rating"},{header:"Date",accessorKey:"date"},{header:this.actionsHeader,accessorKey:"id"}]}onSortClick(){alert("Sort by rating clicked!")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=S({type:e,selectors:[["ngsd-custom-headers-feature"]],viewQuery:function(r,a){if(r&1&&(p(k,7),p(A,7),p(D,7)),r&2){let o;u(o=h())&&(a.viewsHeader=o.first),u(o=h())&&(a.ratingHeader=o.first),u(o=h())&&(a.actionsHeader=o.first)}},standalone:!0,features:[R],decls:23,vars:7,consts:[["viewsHeader",""],["ratingHeader",""],["actionsHeader",""],[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],[2,"display","flex","align-items","center","gap","0.5rem"],[1,"mdi","mdi-eye",2,"font-size","1rem"],[1,"mdi","mdi-star",2,"font-size","1rem"],[2,"padding","0.25rem 0.5rem","font-size","0.75rem","background","var(--ngs-primary)","color","white","border","none","border-radius","var(--ngs-border-radius)","cursor","pointer",3,"click"],[1,"mdi","mdi-cog",2,"font-size","1rem"]],template:function(r,a){if(r&1){let o=y();t(0,"div",3)(1,"div",4)(2,"h1",5),n(3,"Custom Header Templates"),i(),t(4,"p",6),n(5," Customize column headers with your own templates. Add icons, buttons, tooltips, or any custom content to headers. Perfect for adding interactive elements, help text, or branded styling to table headers. "),i(),t(6,"button",7),_("click",function(){return w(o),f(a.showCode.set(!a.showCode()))}),c(7,Q,3,0)(8,B,3,0),i()(),t(9,"div",8)(10,"h2",9),n(11,"Real-World Example: Report Dashboard with Custom Headers"),i(),t(12,"p",10),n(13," A report management table with custom header templates. Headers include icons, interactive buttons, and custom styling. This demonstrates how to create rich, interactive table headers that go beyond plain text labels. Perfect for dashboards, admin panels, or any application where headers need to be more than just labels. "),i(),t(14,"div",11),c(15,I,4,0,"ng-template",null,0,g)(17,J,6,0,"ng-template",null,1,g)(19,z,4,0,"ng-template",null,2,g),s(21,"tan-grid",12),i(),c(22,G,1,1,"ngsd-code-viewer",13),i()()}r&2&&(m(6),x("aria-expanded",a.showCode()),m(),C(a.showCode()?7:8),m(14),v("data",a.reports)("columns",a.columns)("pagination",!1)("theme",a.tableTheme()),m(),C(a.showCode()?22:-1))},dependencies:[E,K,V]})}}return e})();export{X as CustomHeadersFeatureComponent};
