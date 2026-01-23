import{a as _}from"./chunk-324QTZIF.js";import{a as v}from"./chunk-VCEQSUYG.js";import{a as T}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Bb as o,Jb as y,La as a,Ya as f,aa as p,bb as m,cb as w,db as l,fa as u,hb as c,mb as i,nb as t,ob as r,ub as C,uc as g,vb as x}from"./chunk-5NTUSMKZ.js";function D(e,h){e&1&&(i(0,"span"),o(1,"Hide Code"),t(),r(2,"span",11))}function S(e,h){e&1&&(i(0,"span"),o(1,"Show Code"),t(),r(2,"span",12))}function b(e,h){if(e&1&&r(0,"ngsd-code-viewer",10),e&2){let s=x();l("code",s.code)}}var X=(()=>{class e{constructor(){this.tableThemeService=p(v),this.showCode=f(!1),this.tableTheme=this.tableThemeService.theme,this.documents=[{id:1,title:"Project Proposal",author:"John Doe",date:"2024-01-15",size:"2.5 MB",type:"PDF"},{id:2,title:"Meeting Notes",author:"Jane Smith",date:"2024-01-16",size:"150 KB",type:"DOCX"},{id:3,title:"Budget Report",author:"Bob Johnson",date:"2024-01-17",size:"1.2 MB",type:"XLSX"},{id:4,title:"Design Mockups",author:"Alice Brown",date:"2024-01-18",size:"5.8 MB",type:"ZIP"},{id:5,title:"Presentation",author:"Charlie Wilson",date:"2024-01-19",size:"3.1 MB",type:"PPTX"}],this.columns=[{header:"ID",accessorKey:"id",width:"60px"},{header:"Title",accessorKey:"title",width:"300px",minWidth:"200px"},{header:"Author",accessorKey:"author",width:"150px"},{header:"Date",accessorKey:"date",width:"120px"},{header:"Size",accessorKey:"size",width:"100px"},{header:"Type",accessorKey:"type",width:"80px",maxWidth:"100px"}],this.code=`import { Component } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Document {
  id: number;
  title: string;
  author: string;
  date: string;
  size: string;
  type: string;
}

@Component({
  selector: 'app-documents-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid 
      [data]="documents" 
      [columns]="columns"
    ></tan-grid>
  \`
})
export class DocumentsTableComponent {
  documents: Document[] = [
    { id: 1, title: 'Project Proposal', author: 'John Doe', date: '2024-01-15', size: '2.5 MB', type: 'PDF' },
    { id: 2, title: 'Meeting Notes', author: 'Jane Smith', date: '2024-01-16', size: '150 KB', type: 'DOCX' },
    { id: 3, title: 'Budget Report', author: 'Bob Johnson', date: '2024-01-17', size: '1.2 MB', type: 'XLSX' },
    { id: 4, title: 'Design Mockups', author: 'Alice Brown', date: '2024-01-18', size: '5.8 MB', type: 'ZIP' },
    { id: 5, title: 'Presentation', author: 'Charlie Wilson', date: '2024-01-19', size: '3.1 MB', type: 'PPTX' },
  ];
  
  columns: TanGridColumn<Document>[] = [
    { header: 'ID', accessorKey: 'id', width: '60px' },
    { header: 'Title', accessorKey: 'title', width: '300px', minWidth: '200px' },
    { header: 'Author', accessorKey: 'author', width: '150px' },
    { header: 'Date', accessorKey: 'date', width: '120px' },
    { header: 'Size', accessorKey: 'size', width: '100px' },
    { header: 'Type', accessorKey: 'type', width: '80px', maxWidth: '100px' },
  ];
}`}static{this.\u0275fac=function(d){return new(d||e)}}static{this.\u0275cmp=u({type:e,selectors:[["ngsd-column-width-feature"]],standalone:!0,features:[y],decls:17,vars:7,consts:[[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"feature-example__preview"],[3,"data","columns","pagination","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"]],template:function(d,n){d&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),o(3,"Column Width"),t(),i(4,"p",3),o(5," Control column widths with fixed widths, minimum widths, and maximum widths. Perfect for ensuring consistent layouts, preventing text overflow, or creating responsive table designs. "),t(),i(6,"button",4),C("click",function(){return n.showCode.set(!n.showCode())}),m(7,D,3,0)(8,S,3,0),t()(),i(9,"div",5)(10,"h2",6),o(11,"Real-World Example: Document Management"),t(),i(12,"p",7),o(13," A document library table with controlled column widths. The ID column is narrow (60px), the title column has a fixed width with a minimum to prevent squishing, and the type column has a maximum width to keep it compact. This ensures a clean, organized layout regardless of content length. "),t(),i(14,"div",8),r(15,"tan-grid",9),t(),m(16,b,1,1,"ngsd-code-viewer",10),t()()),d&2&&(a(6),w("aria-expanded",n.showCode()),a(),c(n.showCode()?7:8),a(8),l("data",n.documents)("columns",n.columns)("pagination",!1)("theme",n.tableTheme()),a(),c(n.showCode()?16:-1))},dependencies:[T,_,g]})}}return e})();export{X as ColumnWidthFeatureComponent};
