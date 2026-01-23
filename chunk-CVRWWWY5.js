import{a as E}from"./chunk-354T46RR.js";import{a as D}from"./chunk-VCEQSUYG.js";import{a as b}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as a,Eb as k,Jb as y,La as l,Ya as C,a as S,aa as _,b as T,bb as r,cb as w,db as d,fa as v,hb as c,mb as o,nb as n,ob as m,ub as u,uc as x,vb as g}from"./chunk-5NTUSMKZ.js";function F(e,p){e&1&&(o(0,"span"),a(1,"Hide Code"),n(),m(2,"span",13))}function I(e,p){e&1&&(o(0,"span"),a(1,"Show Code"),n(),m(2,"span",14))}function K(e,p){if(e&1&&m(0,"ngsd-code-viewer",10),e&2){let t=g();d("code",t.singleCode)}}function M(e,p){if(e&1&&(o(0,"div",11),a(1),n()),e&2){let t=g();l(),k(" Selected ",t.selectedRows().length," task(s): ",t.getSelectedTitles()," ")}}function G(e,p){if(e&1&&m(0,"ngsd-code-viewer",10),e&2){let t=g();d("code",t.multipleCode)}}var L=(()=>{class e{constructor(){this.tableThemeService=_(D),this.showCode=C({single:!1,multiple:!1}),this.selectedRows=C([]),this.tableTheme=this.tableThemeService.theme,this.tasks=[{id:1,title:"Design homepage",assignee:"Alice",priority:"High",status:"In Progress",dueDate:"2024-01-15"},{id:2,title:"Implement API",assignee:"Bob",priority:"Medium",status:"Todo",dueDate:"2024-01-20"},{id:3,title:"Write tests",assignee:"Charlie",priority:"High",status:"Done",dueDate:"2024-01-10"},{id:4,title:"Code review",assignee:"Diana",priority:"Low",status:"In Progress",dueDate:"2024-01-18"},{id:5,title:"Deploy to staging",assignee:"Eve",priority:"Medium",status:"Todo",dueDate:"2024-01-25"}],this.columns=[{header:"ID",accessorKey:"id"},{header:"Title",accessorKey:"title"},{header:"Assignee",accessorKey:"assignee"},{header:"Priority",accessorKey:"priority"},{header:"Status",accessorKey:"status"},{header:"Due Date",accessorKey:"dueDate"}],this.singleCode=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-tasks-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="tasks" 
      [columns]="columns"
      selectionMode="single"
      (selectionChange)="onSelectionChange($event)"
    ></tan-grid>
  \`
})
export class TasksTableComponent {
  tasks: Task[] = [ /* ... */ ];
  
  columns: TanGridColumn<Task>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Title', accessorKey: 'title' },
    // ... more columns
  ];

  onSelectionChange(rows: Task[]) {
    // Handle single selection
    console.log('Selected task:', rows[0]);
  }
}`,this.multipleCode=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

@Component({
  selector: 'app-tasks-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="tasks" 
      [columns]="columns"
      selectionMode="multiple"
      (selectionChange)="onSelectionChange($event)"
    ></tan-grid>
  \`
})
export class TasksTableComponent {
  tasks: Task[] = [ /* ... */ ];
  
  columns: TanGridColumn<Task>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Title', accessorKey: 'title' },
    // ... more columns
  ];

  onSelectionChange(rows: Task[]) {
    // Handle multiple selection
    console.log('Selected tasks:', rows);
    // Perform bulk actions: delete, archive, etc.
  }
}`}toggleCode(t){this.showCode.update(s=>T(S({},s),{[t]:!s[t]}))}onSelectionChange(t){this.selectedRows.set(t)}getSelectedTitles(){return this.selectedRows().map(t=>t.title).join(", ")}static{this.\u0275fac=function(s){return new(s||e)}}static{this.\u0275cmp=v({type:e,selectors:[["ngsd-selection-feature"]],standalone:!0,features:[y],decls:26,vars:13,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],["selectionMode","single",3,"selectionChange","data","columns","pagination","theme"],[3,"code"],[1,"demo-info"],["selectionMode","multiple",3,"selectionChange","data","columns","pagination","theme"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(s,i){s&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Row Selection"),n(),o(4,"p",3),a(5," Enable users to select single or multiple rows with checkboxes. Perfect for task management, bulk operations, or any scenario where users need to select items for actions like delete, archive, or export. "),n(),o(6,"button",4),u("click",function(){return i.toggleCode("multiple")}),r(7,F,3,0)(8,I,3,0),n()(),o(9,"div",5)(10,"h2",6),a(11,"Single Selection"),n(),o(12,"p",7),a(13," Ideal for scenarios where only one item can be selected at a time, such as choosing a default option, selecting a primary record, or picking an item for detailed view. "),n(),o(14,"div",8)(15,"tan-grid",9),u("selectionChange",function(h){return i.onSelectionChange(h)}),n()(),r(16,K,1,1,"ngsd-code-viewer",10),n(),o(17,"div",5)(18,"h2",6),a(19,"Multiple Selection"),n(),o(20,"p",7),a(21,' Perfect for bulk operations like deleting multiple items, exporting selected records, or applying actions to multiple rows simultaneously. Includes a "select all" checkbox in the header. '),n(),o(22,"div",8),r(23,M,2,2,"div",11),o(24,"tan-grid",12),u("selectionChange",function(h){return i.onSelectionChange(h)}),n()(),r(25,G,1,1,"ngsd-code-viewer",10),n()()),s&2&&(l(6),w("aria-expanded",i.showCode().multiple),l(),c(i.showCode().multiple?7:8),l(8),d("data",i.tasks)("columns",i.columns)("pagination",!1)("theme",i.tableTheme()),l(),c(i.showCode().single?16:-1),l(7),c(i.selectedRows().length>0?23:-1),l(),d("data",i.tasks)("columns",i.columns)("pagination",!1)("theme",i.tableTheme()),l(),c(i.showCode().multiple?25:-1))},dependencies:[b,E,x]})}}return e})();export{L as SelectionFeatureComponent};
