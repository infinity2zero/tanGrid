import{a as S}from"./chunk-354T46RR.js";import{a as x}from"./chunk-VCEQSUYG.js";import{a as T}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as a,Db as y,Jb as E,La as r,Ya as u,a as C,aa as k,b as g,bb as s,cb as b,db as f,fa as _,hb as c,mb as i,nb as n,ob as d,ub as w,uc as R,vb as h}from"./chunk-5NTUSMKZ.js";function D(t,m){t&1&&(i(0,"span"),a(1,"Hide Code"),n(),d(2,"span",12))}function F(t,m){t&1&&(i(0,"span"),a(1,"Show Code"),n(),d(2,"span",13))}function K(t,m){if(t&1&&(i(0,"div",9),a(1),n()),t&2){let e=h();r(),y(" ",e.lastEvent()," ")}}function M(t,m){if(t&1&&d(0,"ngsd-code-viewer",11),t&2){let e=h();f("code",e.code)}}var Y=(()=>{class t{constructor(){this.tableThemeService=k(x),this.showCode=u({click:!1,dblclick:!1}),this.lastEvent=u(""),this.tableTheme=this.tableThemeService.theme,this.notifications=[{id:1,title:"New Message",message:"You have a new message from John",type:"info",timestamp:"2024-01-15 10:30",read:!1},{id:2,title:"Task Completed",message:"Your task has been completed",type:"success",timestamp:"2024-01-15 09:15",read:!0},{id:3,title:"Payment Received",message:"Payment of $500 received",type:"success",timestamp:"2024-01-14 16:45",read:!1},{id:4,title:"Reminder",message:"Don't forget the meeting at 3 PM",type:"warning",timestamp:"2024-01-14 14:20",read:!0},{id:5,title:"System Update",message:"System will be updated tonight",type:"info",timestamp:"2024-01-13 18:00",read:!1}],this.columns=[{header:"ID",accessorKey:"id"},{header:"Title",accessorKey:"title"},{header:"Message",accessorKey:"message"},{header:"Type",accessorKey:"type"},{header:"Timestamp",accessorKey:"timestamp"},{header:"Read",accessorKey:"read"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-notifications-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="notifications" 
      [columns]="columns"
      (rowClick)="onRowClick($event)"
      (rowDblClick)="onRowDblClick($event)"
    ></tan-grid>
  \`
})
export class NotificationsTableComponent {
  notifications: Notification[] = [ /* ... */ ];
  
  columns: TanGridColumn<Notification>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Title', accessorKey: 'title' },
    // ... more columns
  ];

  onRowClick(event: { row: Notification; index: number }) {
    // Mark as read, show preview, etc.
    console.log('Row clicked:', event);
  }

  onRowDblClick(event: { row: Notification; index: number }) {
    // Open details modal, navigate to detail page, etc.
    console.log('Row double-clicked:', event);
    this.openDetails(event.row);
  }
}`}toggleCode(e){this.showCode.update(l=>g(C({},l),{[e]:!l[e]}))}onRowClick(e){this.lastEvent.set(`Clicked row ${e.index+1}: "${e.row.title}"`),console.log("Row clicked:",e)}onRowDblClick(e){this.lastEvent.set(`Double-clicked row ${e.index+1}: "${e.row.title}" - Opening details...`),console.log("Row double-clicked:",e)}static{this.\u0275fac=function(l){return new(l||t)}}static{this.\u0275cmp=_({type:t,selectors:[["ngsd-row-events-feature"]],standalone:!0,features:[E],decls:18,vars:9,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[1,"demo-info"],[3,"rowClick","rowDblClick","data","columns","hoverable","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Row Events"),n(),i(4,"p",3),a(5," Handle user interactions with table rows through click and double-click events. Perfect for opening detail views, marking items as read, or triggering any action based on row interaction. "),n(),i(6,"button",4),w("click",function(){return o.toggleCode("click")}),s(7,D,3,0)(8,F,3,0),n()(),i(9,"div",5)(10,"h2",6),a(11,"Real-World Example: Notification Center"),n(),i(12,"p",7),a(13," A notification center table where clicking a row marks it as read or shows a preview, and double-clicking opens the full notification details. This pattern is common in email clients, task managers, and notification systems. "),n(),i(14,"div",8),s(15,K,2,1,"div",9),i(16,"tan-grid",10),w("rowClick",function(p){return o.onRowClick(p)})("rowDblClick",function(p){return o.onRowDblClick(p)}),n()(),s(17,M,1,1,"ngsd-code-viewer",11),n()()),l&2&&(r(6),b("aria-expanded",o.showCode().click),r(),c(o.showCode().click?7:8),r(8),c(o.lastEvent()?15:-1),r(),f("data",o.notifications)("columns",o.columns)("hoverable",!0)("pagination",!1)("theme",o.tableTheme()),r(),c(o.showCode().click?17:-1))},dependencies:[T,S,R]})}}return t})();export{Y as RowEventsFeatureComponent};
