import{a as N}from"./chunk-NWN36NCE.js";import{a as I}from"./chunk-VCEQSUYG.js";import{a as G}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Ab as E,Bb as i,Jb as w,La as d,Pb as D,Ya as S,a as g,aa as h,b as y,bb as l,cb as b,db as s,fa as v,hb as c,mb as n,nb as e,oa as C,ob as m,pa as _,sb as T,ub as x,uc as F,vb as f}from"./chunk-5NTUSMKZ.js";function k(t,p){t&1&&(n(0,"span"),i(1,"Hide Code"),e(),m(2,"span",13))}function M(t,p){t&1&&(n(0,"span"),i(1,"Show Code"),e(),m(2,"span",14))}function K(t,p){if(t&1&&m(0,"ngsd-code-viewer",11),t&2){let o=f();s("code",o.code)}}function V(t,p){t&1&&(n(0,"div",15)(1,"div",16),m(2,"span",17),e(),n(3,"h3",18),i(4," No items yet "),e(),n(5,"p",19),i(6," Get started by adding your first item to the list. "),e(),n(7,"button",20),i(8," Add Item "),e()())}function z(t,p){if(t&1&&m(0,"ngsd-code-viewer",11),t&2){let o=f();s("code",o.code)}}var L=(()=>{class t{constructor(){this.tableThemeService=h(I),this.showCode=S({default:!1,custom:!1}),this.tableTheme=this.tableThemeService.theme,this.emptyData=[],this.columns=[{header:"ID",accessorKey:"id"},{header:"Name",accessorKey:"name"}],this.code=`import { Component, TemplateRef } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-items-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <!-- Default empty state -->
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      emptyMessage="No items found"
    ></tan-grid>
    
    <!-- Custom empty state template -->
    <ng-template #emptyTemplate>
      <div class="empty-state">
        <div class="empty-state__icon"><span class="mdi mdi-inbox-remove-outline"></span></div>
        <h3>No items yet</h3>
        <p>Get started by adding your first item.</p>
        <button>Add Item</button>
      </div>
    </ng-template>
    
    <tan-grid 
      [data]="[]" 
      [columns]="columns"
      [emptyTemplate]="emptyTemplate"
    ></tan-grid>
  \`
})
export class ItemsTableComponent {
  columns: TanGridColumn<Item>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Name', accessorKey: 'name' },
  ];
}`}toggleCode(o){this.showCode.update(r=>y(g({},r),{[o]:!r[o]}))}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=v({type:t,selectors:[["ngsd-empty-state-feature"]],standalone:!0,features:[w],decls:27,vars:13,consts:[["emptyTemplate",""],[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],["emptyMessage","No items found. Try adjusting your filters or add a new item.",3,"data","columns","pagination","theme"],[3,"code"],[3,"data","columns","emptyTemplate","pagination","theme"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],[2,"padding","3rem","text-align","center"],[2,"font-size","4rem","margin-bottom","1rem"],[1,"mdi","mdi-inbox-remove-outline"],[2,"margin","0 0 0.5rem 0","color","var(--ngs-text-primary)","font-size","1.25rem"],[2,"margin","0 0 1.5rem 0","color","var(--ngs-text-secondary)"],[2,"padding","0.5rem 1.5rem","background","var(--ngs-primary)","color","white","border","none","border-radius","var(--ngs-border-radius)","cursor","pointer","font-weight","600"]],template:function(r,a){if(r&1){let u=T();n(0,"div",1)(1,"div",2)(2,"h1",3),i(3,"Empty State"),e(),n(4,"p",4),i(5," Display helpful messages or custom content when the table has no data. Perfect for guiding users on what to do next or explaining why the table is empty. "),e(),n(6,"button",5),x("click",function(){return C(u),_(a.toggleCode("default"))}),l(7,k,3,0)(8,M,3,0),e()(),n(9,"div",6)(10,"h2",7),i(11,"Default Empty State"),e(),n(12,"p",8),i(13," Simple text message displayed when the table is empty. Customize the message to match your application's tone and provide context to users. "),e(),n(14,"div",9),m(15,"tan-grid",10),e(),l(16,K,1,1,"ngsd-code-viewer",11),e(),n(17,"div",6)(18,"h2",7),i(19,"Custom Empty State Template"),e(),n(20,"p",8),i(21," Create a rich, branded empty state with icons, illustrations, call-to-action buttons, or any custom content. Perfect for onboarding flows or guiding users to take action. "),e(),n(22,"div",9),l(23,V,9,0,"ng-template",null,0,D),m(25,"tan-grid",12),e(),l(26,z,1,1,"ngsd-code-viewer",11),e()()}if(r&2){let u=E(24);d(6),b("aria-expanded",a.showCode().default),d(),c(a.showCode().default?7:8),d(8),s("data",a.emptyData)("columns",a.columns)("pagination",!1)("theme",a.tableTheme()),d(),c(a.showCode().default?16:-1),d(9),s("data",a.emptyData)("columns",a.columns)("emptyTemplate",u)("pagination",!1)("theme",a.tableTheme()),d(),c(a.showCode().custom?26:-1)}},dependencies:[G,N,F]})}}return t})();export{L as EmptyStateFeatureComponent};
