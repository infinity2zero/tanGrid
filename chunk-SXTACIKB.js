import{a as E}from"./chunk-NWN36NCE.js";import{a as x}from"./chunk-VCEQSUYG.js";import{a as b}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as a,Eb as _,Jb as w,La as s,Ya as C,a as y,aa as S,b as T,bb as l,cb as v,db as d,fa as D,hb as c,mb as o,nb as i,ob as m,ub as p,uc as k,vb as g}from"./chunk-5NTUSMKZ.js";function I(e,u){e&1&&(o(0,"span"),a(1,"Hide Code"),i(),m(2,"span",13))}function K(e,u){e&1&&(o(0,"span"),a(1,"Show Code"),i(),m(2,"span",14))}function P(e,u){if(e&1&&m(0,"ngsd-code-viewer",10),e&2){let t=g();d("code",t.singleCode)}}function M(e,u){if(e&1&&(o(0,"div",11),a(1),i()),e&2){let t=g();s(),_(" Selected ",t.selectedRows().length," task(s): ",t.getSelectedTitles()," ")}}function F(e,u){if(e&1&&m(0,"ngsd-code-viewer",10),e&2){let t=g();d("code",t.multipleCode)}}var j=(()=>{class e{constructor(){this.tableThemeService=S(x),this.showCode=C({single:!1,multiple:!1}),this.selectedRows=C([]),this.tableTheme=this.tableThemeService.theme,this.tasks=[{id:1,title:"Design homepage",assignee:"Alice",priority:"High",status:"In Progress",dueDate:"2024-01-15"},{id:2,title:"Implement API",assignee:"Bob",priority:"Medium",status:"Todo",dueDate:"2024-01-20"},{id:3,title:"Write tests",assignee:"Charlie",priority:"High",status:"Done",dueDate:"2024-01-10"},{id:4,title:"Code review",assignee:"Diana",priority:"Low",status:"In Progress",dueDate:"2024-01-18"},{id:5,title:"Deploy to staging",assignee:"Eve",priority:"Medium",status:"Todo",dueDate:"2024-01-25"}],this.columns=[{header:"ID",accessorKey:"id"},{header:"Title",accessorKey:"title"},{header:"Assignee",accessorKey:"assignee"},{header:"Priority",accessorKey:"priority"},{header:"Status",accessorKey:"status"},{header:"Due Date",accessorKey:"dueDate"}],this.singleCode=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Task {
  id: number;
  title: string;
  assignee: string;
  priority: string;
  status: string;
  dueDate: string;
}

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
  tasks: Task[] = [
    { id: 1, title: 'Design homepage', assignee: 'Alice', priority: 'High', status: 'In Progress', dueDate: '2024-01-15' },
    { id: 2, title: 'Implement API', assignee: 'Bob', priority: 'Medium', status: 'Todo', dueDate: '2024-01-20' },
    { id: 3, title: 'Write tests', assignee: 'Charlie', priority: 'High', status: 'Done', dueDate: '2024-01-10' },
    { id: 4, title: 'Code review', assignee: 'Diana', priority: 'Low', status: 'In Progress', dueDate: '2024-01-18' },
    { id: 5, title: 'Deploy to staging', assignee: 'Eve', priority: 'Medium', status: 'Todo', dueDate: '2024-01-25' },
  ];
  
  columns: TanGridColumn<Task>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Title', accessorKey: 'title' },
    { header: 'Assignee', accessorKey: 'assignee' },
    { header: 'Priority', accessorKey: 'priority' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Due Date', accessorKey: 'dueDate' },
  ];

  onSelectionChange(rows: Task[]) {
    // Handle single selection
    console.log('Selected task:', rows[0]);
  }
}`,this.multipleCode=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Task {
  id: number;
  title: string;
  assignee: string;
  priority: string;
  status: string;
  dueDate: string;
}

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
  tasks: Task[] = [
    { id: 1, title: 'Design homepage', assignee: 'Alice', priority: 'High', status: 'In Progress', dueDate: '2024-01-15' },
    { id: 2, title: 'Implement API', assignee: 'Bob', priority: 'Medium', status: 'Todo', dueDate: '2024-01-20' },
    { id: 3, title: 'Write tests', assignee: 'Charlie', priority: 'High', status: 'Done', dueDate: '2024-01-10' },
    { id: 4, title: 'Code review', assignee: 'Diana', priority: 'Low', status: 'In Progress', dueDate: '2024-01-18' },
    { id: 5, title: 'Deploy to staging', assignee: 'Eve', priority: 'Medium', status: 'Todo', dueDate: '2024-01-25' },
  ];
  
  columns: TanGridColumn<Task>[] = [
    { header: 'ID', accessorKey: 'id' },
    { header: 'Title', accessorKey: 'title' },
    { header: 'Assignee', accessorKey: 'assignee' },
    { header: 'Priority', accessorKey: 'priority' },
    { header: 'Status', accessorKey: 'status' },
    { header: 'Due Date', accessorKey: 'dueDate' },
  ];

  onSelectionChange(rows: Task[]) {
    // Handle multiple selection
    console.log('Selected tasks:', rows);
    // Perform bulk actions: delete, archive, etc.
  }
}`}toggleCode(t){this.showCode.update(r=>T(y({},r),{[t]:!r[t]}))}onSelectionChange(t){this.selectedRows.set(t)}getSelectedTitles(){return this.selectedRows().map(t=>t.title).join(", ")}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=D({type:e,selectors:[["ngsd-selection-feature"]],standalone:!0,features:[w],decls:26,vars:13,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],["selectionMode","single",3,"selectionChange","data","columns","pagination","theme"],[3,"code"],[1,"demo-info"],["selectionMode","multiple",3,"selectionChange","data","columns","pagination","theme"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Row Selection"),i(),o(4,"p",3),a(5," Enable users to select single or multiple rows with checkboxes. Perfect for task management, bulk operations, or any scenario where users need to select items for actions like delete, archive, or export. "),i(),o(6,"button",4),p("click",function(){return n.toggleCode("multiple")}),l(7,I,3,0)(8,K,3,0),i()(),o(9,"div",5)(10,"h2",6),a(11,"Single Selection"),i(),o(12,"p",7),a(13," Ideal for scenarios where only one item can be selected at a time, such as choosing a default option, selecting a primary record, or picking an item for detailed view. "),i(),o(14,"div",8)(15,"tan-grid",9),p("selectionChange",function(h){return n.onSelectionChange(h)}),i()(),l(16,P,1,1,"ngsd-code-viewer",10),i(),o(17,"div",5)(18,"h2",6),a(19,"Multiple Selection"),i(),o(20,"p",7),a(21,' Perfect for bulk operations like deleting multiple items, exporting selected records, or applying actions to multiple rows simultaneously. Includes a "select all" checkbox in the header. '),i(),o(22,"div",8),l(23,M,2,2,"div",11),o(24,"tan-grid",12),p("selectionChange",function(h){return n.onSelectionChange(h)}),i()(),l(25,F,1,1,"ngsd-code-viewer",10),i()()),r&2&&(s(6),v("aria-expanded",n.showCode().multiple),s(),c(n.showCode().multiple?7:8),s(8),d("data",n.tasks)("columns",n.columns)("pagination",!1)("theme",n.tableTheme()),s(),c(n.showCode().single?16:-1),s(7),c(n.selectedRows().length>0?23:-1),s(),d("data",n.tasks)("columns",n.columns)("pagination",!1)("theme",n.tableTheme()),s(),c(n.showCode().multiple?25:-1))},dependencies:[b,E,k]})}}return e})();export{j as SelectionFeatureComponent};
