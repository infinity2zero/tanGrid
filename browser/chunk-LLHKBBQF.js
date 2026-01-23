import{a as V}from"./chunk-354T46RR.js";import{a as G}from"./chunk-VCEQSUYG.js";import{a as D}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Ab as L,Bb as a,Jb as F,Kb as u,La as d,Pb as k,Ya as h,a as C,aa as w,b as _,bb as s,cb as x,db as m,fa as T,hb as c,mb as n,nb as e,oa as y,ob as l,pa as S,sb as b,ub as E,uc as P,vb as g}from"./chunk-5NTUSMKZ.js";var v=()=>[];function R(t,p){t&1&&(n(0,"span"),a(1,"Hide Code"),e(),l(2,"span",14))}function I(t,p){t&1&&(n(0,"span"),a(1,"Show Code"),e(),l(2,"span",15))}function K(t,p){if(t&1&&l(0,"ngsd-code-viewer",11),t&2){let o=g();m("code",o.code)}}function M(t,p){if(t&1&&l(0,"ngsd-code-viewer",11),t&2){let o=g();m("code",o.code)}}function z(t,p){t&1&&(n(0,"div",16)(1,"div",17),l(2,"span",18),e(),n(3,"p",19),a(4,"Loading your data..."),e(),n(5,"p",20),a(6,"Please wait"),e()())}function U(t,p){if(t&1&&l(0,"ngsd-code-viewer",11),t&2){let o=g();m("code",o.code)}}var Q=(()=>{class t{constructor(){this.tableThemeService=w(G),this.showCode=h({spinner:!1,placeholder:!1,custom:!1}),this.loading=h(!0),this.tableTheme=this.tableThemeService.theme,this.columns=[{header:"ID",accessorKey:"id"},{header:"Name",accessorKey:"name"},{header:"Value",accessorKey:"value"}],this.code=`import { Component, signal } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <!-- Spinner loader -->
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      [loading]="loading()"
      loadingType="spinner"
    ></tan-grid>
    
    <!-- Placeholder (skeleton) loader -->
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      [loading]="loading()"
      loadingType="placeholder"
      [placeholderRows]="5"
    ></tan-grid>
    
    <!-- Custom template loader -->
    <ng-template #customLoader>
      <div class="custom-loading">
        <p>Loading your data...</p>
      </div>
    </ng-template>
    
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      [loading]="loading()"
      loadingType="template"
      [loadingTemplate]="customLoader"
    ></tan-grid>
  \`
})
export class DataTableComponent {
  loading = signal(true);
  columns: TanGridColumn<Data>[] = [ /* ... */ ];
}`}toggleCode(o){this.showCode.update(r=>_(C({},r),{[o]:!r[o]}))}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=T({type:t,selectors:[["ngsd-loading-feature"]],standalone:!0,features:[F],decls:35,vars:25,consts:[["customLoader",""],[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],["loadingType","spinner",3,"data","columns","loading","pagination","theme"],[3,"code"],["loadingType","placeholder",3,"data","columns","loading","placeholderRows","pagination","theme"],["loadingType","template",3,"data","columns","loading","loadingTemplate","pagination","theme"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],[2,"padding","2rem","text-align","center","color","var(--ngs-text-secondary)"],[2,"font-size","2rem","margin-bottom","0.5rem"],[1,"mdi","mdi-timer-sand"],[2,"margin","0","font-weight","600"],[2,"margin","0.5rem 0 0 0","font-size","0.875rem"]],template:function(r,i){if(r&1){let f=b();n(0,"div",1)(1,"div",2)(2,"h1",3),a(3,"Loading States"),e(),n(4,"p",4),a(5," Provide visual feedback while data is being loaded. Choose from spinner, placeholder (skeleton) loading, or a custom template to match your application's design language. "),e(),n(6,"button",5),E("click",function(){return y(f),S(i.toggleCode("spinner"))}),s(7,R,3,0)(8,I,3,0),e()(),n(9,"div",6)(10,"h2",7),a(11,"Spinner Loader"),e(),n(12,"p",8),a(13," Classic spinner with loading message. Simple and effective for quick data loads. Best for fast API responses or when you want a minimal loading indicator. "),e(),n(14,"div",9),l(15,"tan-grid",10),e(),s(16,K,1,1,"ngsd-code-viewer",11),e(),n(17,"div",6)(18,"h2",7),a(19,"Placeholder (Skeleton) Loader"),e(),n(20,"p",8),a(21," Facebook-style skeleton loading that mimics the table structure. Provides better perceived performance and reduces layout shift. Perfect for slower network connections or when loading takes more than a second. "),e(),n(22,"div",9),l(23,"tan-grid",12),e(),s(24,M,1,1,"ngsd-code-viewer",11),e(),n(25,"div",6)(26,"h2",7),a(27,"Custom Template Loader"),e(),n(28,"p",8),a(29," Use your own custom loading template for complete control over the loading experience. Perfect for branded loading animations, progress bars, or any custom loading UI. "),e(),n(30,"div",9),s(31,z,7,0,"ng-template",null,0,k),l(33,"tan-grid",13),e(),s(34,U,1,1,"ngsd-code-viewer",11),e()()}if(r&2){let f=L(32);d(6),x("aria-expanded",i.showCode().spinner),d(),c(i.showCode().spinner?7:8),d(8),m("data",u(22,v))("columns",i.columns)("loading",i.loading())("pagination",!1)("theme",i.tableTheme()),d(),c(i.showCode().spinner?16:-1),d(7),m("data",u(23,v))("columns",i.columns)("loading",i.loading())("placeholderRows",5)("pagination",!1)("theme",i.tableTheme()),d(),c(i.showCode().placeholder?24:-1),d(9),m("data",u(24,v))("columns",i.columns)("loading",i.loading())("loadingTemplate",f)("pagination",!1)("theme",i.tableTheme()),d(),c(i.showCode().custom?34:-1)}},dependencies:[D,V,P]})}}return t})();export{Q as LoadingFeatureComponent};
