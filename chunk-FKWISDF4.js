import{a as k}from"./chunk-354T46RR.js";import{a as z}from"./chunk-VCEQSUYG.js";import{a as q}from"./chunk-6FZUKEC5.js";import"./chunk-C2Y44PVJ.js";import{Ab as R,Bb as a,Cb as x,Db as p,Jb as D,La as i,Pb as N,Ya as _,aa as f,bb as m,cb as w,db as b,fa as C,hb as h,kb as y,lb as O,mb as t,nb as e,oa as g,ob as c,pa as u,sb as M,ub as v,uc as F,vb as P,xb as E,yb as T,zb as S}from"./chunk-5NTUSMKZ.js";var K=["expandedTemplate"],V=(r,s)=>s.id;function Q(r,s){r&1&&(t(0,"span"),a(1,"Hide Code"),e(),c(2,"span",13))}function G(r,s){r&1&&(t(0,"span"),a(1,"Show Code"),e(),c(2,"span",14))}function A(r,s){if(r&1&&(t(0,"tr")(1,"td"),a(2),e(),t(3,"td"),a(4),e(),t(5,"td"),a(6),e(),t(7,"td"),a(8),e()()),r&2){let n=s.$implicit;i(2),x(n.productName),i(2),x(n.quantity),i(2),p("$",n.price.toFixed(2),""),i(2),p("$",n.subtotal.toFixed(2),"")}}function J(r,s){if(r&1&&(t(0,"div",15)(1,"h3"),a(2,"Order Items"),e(),t(3,"table",16)(4,"thead")(5,"tr")(6,"th"),a(7,"Product"),e(),t(8,"th"),a(9,"Quantity"),e(),t(10,"th"),a(11,"Price"),e(),t(12,"th"),a(13,"Subtotal"),e()()(),t(14,"tbody"),y(15,A,9,4,"tr",null,V),e(),t(17,"tfoot")(18,"tr")(19,"td",17),a(20,"Total:"),e(),t(21,"td",18),a(22),e()()()()()),r&2){let n=s.row;i(15),O(n.items),i(7),p("$",n.total.toFixed(2),"")}}function B(r,s){if(r&1&&c(0,"ngsd-code-viewer",12),r&2){let n=P();b("code",n.code)}}var ee=(()=>{class r{constructor(){this.tableThemeService=f(z),this.tableTheme=this.tableThemeService.theme,this.showCode=_(!1),this.orders=[{id:"ORD-001",customerName:"John Doe",orderDate:"2024-01-15",total:245.99,status:"pending",items:[{id:"1",productName:"Laptop",quantity:1,price:999.99,subtotal:999.99},{id:"2",productName:"Mouse",quantity:2,price:29.99,subtotal:59.98}]},{id:"ORD-002",customerName:"Jane Smith",orderDate:"2024-01-16",total:89.97,status:"processing",items:[{id:"3",productName:"Keyboard",quantity:1,price:79.99,subtotal:79.99},{id:"4",productName:"USB Cable",quantity:1,price:9.98,subtotal:9.98}]},{id:"ORD-003",customerName:"Bob Johnson",orderDate:"2024-01-17",total:1299.95,status:"shipped",items:[{id:"5",productName:"Monitor",quantity:2,price:299.99,subtotal:599.98},{id:"6",productName:"Stand",quantity:2,price:49.99,subtotal:99.98},{id:"7",productName:"HDMI Cable",quantity:2,price:19.99,subtotal:39.98}]},{id:"ORD-004",customerName:"Alice Williams",orderDate:"2024-01-18",total:45.99,status:"delivered",items:[{id:"8",productName:"Webcam",quantity:1,price:45.99,subtotal:45.99}]},{id:"ORD-005",customerName:"Charlie Brown",orderDate:"2024-01-19",total:199.98,status:"pending",items:[{id:"9",productName:"Headphones",quantity:1,price:149.99,subtotal:149.99},{id:"10",productName:"Microphone",quantity:1,price:49.99,subtotal:49.99}]}],this.columns=[{id:"id",header:"Order ID",accessorKey:"id",sortable:!0},{id:"customerName",header:"Customer",accessorKey:"customerName",sortable:!0},{id:"orderDate",header:"Order Date",accessorKey:"orderDate",sortable:!0},{id:"total",header:"Total",accessorKey:"total",sortable:!0,accessorFn:n=>`$${n.total.toFixed(2)}`},{id:"status",header:"Status",accessorKey:"status",sortable:!0,accessorFn:n=>n.status.charAt(0).toUpperCase()+n.status.slice(1)}],this.code=`import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TanGrid, TanGridColumn } from 'tangrid';

interface Order {
  id: string;
  customerName: string;
  orderDate: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  items: OrderItem[];
}

interface OrderItem {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  subtotal: number;
}

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [TanGrid],
  template: \`
    <tan-grid
      [data]="orders"
      [columns]="columns"
      [expandable]="true"
      [expandedRowTemplate]="expandedTemplate"
      [striped]="true"
      [bordered]="true"
      [hoverable]="true"
      (expansionChange)="onExpansionChange($event)"
    ></tan-grid>

    <ng-template #expandedTemplate let-order="row">
      <div class="expanded-content">
        <h3>Order Items</h3>
        <table class="items-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            @for (item of order.items; track item.id) {
              <tr>
                <td>{{ item.productName }}</td>
                <td>{{ item.quantity }}</td>
                <td>\${{ item.price.toFixed(2) }}</td>
                <td>\${{ item.subtotal.toFixed(2) }}</td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="total-label">Total:</td>
              <td class="total-value">\${{ order.total.toFixed(2) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </ng-template>
  \`
})
export class OrderTableComponent {
  @ViewChild('expandedTemplate', { static: true }) expandedTemplate!: TemplateRef<any>;

  orders: Order[] = [
    {
      id: 'ORD-001',
      customerName: 'John Doe',
      orderDate: '2024-01-15',
      total: 245.99,
      status: 'pending',
      items: [
        { id: '1', productName: 'Laptop', quantity: 1, price: 999.99, subtotal: 999.99 },
        { id: '2', productName: 'Mouse', quantity: 2, price: 29.99, subtotal: 59.98 },
      ],
    },
    // ... more orders
  ];

  columns: TanGridColumn<Order>[] = [
    {
      id: 'id',
      header: 'Order ID',
      accessorKey: 'id',
      sortable: true,
    },
    {
      id: 'customerName',
      header: 'Customer',
      accessorKey: 'customerName',
      sortable: true,
    },
    {
      id: 'orderDate',
      header: 'Order Date',
      accessorKey: 'orderDate',
      sortable: true,
    },
    {
      id: 'total',
      header: 'Total',
      accessorKey: 'total',
      sortable: true,
      accessorFn: (row) => \`$\${row.total.toFixed(2)}\`,
    },
    {
      id: 'status',
      header: 'Status',
      accessorKey: 'status',
      sortable: true,
      accessorFn: (row) => row.status.charAt(0).toUpperCase() + row.status.slice(1),
    },
  ];

  onExpansionChange(event: { rowId: string; expanded: boolean }): void {
    console.log('Row expansion changed:', event);
  }
}`}onExpansionChange(n){console.log("Row expansion changed:",n)}static{this.\u0275fac=function(d){return new(d||r)}}static{this.\u0275cmp=C({type:r,selectors:[["ngsd-row-expansion-feature"]],viewQuery:function(d,o){if(d&1&&E(K,7),d&2){let l;T(l=S())&&(o.expandedTemplate=l.first)}},standalone:!0,features:[D],decls:21,vars:11,consts:[["expandedTemplate",""],[1,"feature-page"],[1,"feature-header"],[1,"feature-title"],[1,"feature-description"],["type","button",1,"feature-toggle-code",3,"click"],[1,"feature-example"],[1,"feature-example__title"],[1,"feature-example__description"],[1,"mdi","mdi-chevron-right"],[1,"feature-example__preview"],[3,"expansionChange","data","columns","expandable","expandedRowTemplate","striped","bordered","hoverable","theme"],[3,"code"],[1,"mdi","mdi-chevron-up"],[1,"mdi","mdi-chevron-down"],[1,"expanded-content"],[1,"items-table"],["colspan","3",1,"total-label"],[1,"total-value"]],template:function(d,o){if(d&1){let l=M();t(0,"div",1)(1,"div",2)(2,"h1",3),a(3,"Row Expansion"),e(),t(4,"p",4),a(5," Expandable rows to show additional details, nested tables, or custom content. Perfect for master-detail views, order line items, or any nested data structures. "),e(),t(6,"button",5),v("click",function(){return g(l),u(o.showCode.set(!o.showCode()))}),m(7,Q,3,0)(8,G,3,0),e()(),t(9,"div",6)(10,"h2",7),a(11,"Real-World Example: Order Management"),e(),t(12,"p",8),a(13," A master-detail table showing orders with expandable rows to display order items. Click the expand button ("),c(14,"span",9),a(15,") in the first column to see order details. "),e(),t(16,"div",10)(17,"tan-grid",11),v("expansionChange",function($){return g(l),u(o.onExpansionChange($))}),e(),m(18,J,23,1,"ng-template",null,0,N),e(),m(20,B,1,1,"ngsd-code-viewer",12),e()()}if(d&2){let l=R(19);i(6),w("aria-expanded",o.showCode()),i(),h(o.showCode()?7:8),i(10),b("data",o.orders)("columns",o.columns)("expandable",!0)("expandedRowTemplate",l)("striped",!0)("bordered",!0)("hoverable",!0)("theme",o.tableTheme()),i(3),h(o.showCode()?20:-1)}},dependencies:[F,q,k],styles:[".feature-header[_ngcontent-%COMP%]{margin-bottom:var(--ngs-spacing-3xl)}.feature-title[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-3xl);font-weight:var(--ngs-font-weight-bold);margin:0 0 var(--ngs-spacing-md) 0;color:var(--ngs-text-primary)}.feature-description[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-lg);color:var(--ngs-text-secondary);line-height:1.7;margin:0 0 var(--ngs-spacing-lg) 0}.feature-toggle-code[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--ngs-spacing-xs);padding:var(--ngs-spacing-sm) var(--ngs-spacing-md);background:var(--ngs-primary);border:1px solid var(--ngs-primary);border-radius:var(--ngs-border-radius);cursor:pointer;font-size:var(--ngs-font-size-sm);color:var(--ngs-text-inverse);transition:var(--ngs-transition-base);font-weight:var(--ngs-font-weight-medium)}.feature-toggle-code[_ngcontent-%COMP%]:hover{background:var(--ngs-primary-hover);border-color:var(--ngs-primary-hover)}.feature-example[_ngcontent-%COMP%]{background:var(--ngs-bg-primary);border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius);overflow:hidden;margin-bottom:var(--ngs-spacing-2xl)}.feature-example__title[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-xl);font-weight:var(--ngs-font-weight-semibold);margin:0 0 var(--ngs-spacing-xs) 0;padding:var(--ngs-spacing-lg) var(--ngs-spacing-xl);background:var(--ngs-bg-secondary);border-bottom:1px solid var(--ngs-border-color);color:var(--ngs-text-primary)}.feature-example__description[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-base);color:var(--ngs-text-secondary);margin:0 0 var(--ngs-spacing-lg) 0;padding:0 var(--ngs-spacing-xl);line-height:1.6}.feature-example__preview[_ngcontent-%COMP%]{padding:var(--ngs-spacing-xl);background:var(--ngs-bg-primary)}.expanded-content[_ngcontent-%COMP%]{padding:var(--ngs-spacing-md)}.expanded-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-lg);font-weight:var(--ngs-font-weight-semibold);margin:0 0 var(--ngs-spacing-md) 0;color:var(--ngs-text-primary)}.items-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:var(--ngs-font-size-sm)}.items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:var(--ngs-bg-secondary)}.items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:var(--ngs-spacing-sm) var(--ngs-spacing-md);text-align:left;font-weight:var(--ngs-font-weight-semibold);color:var(--ngs-text-primary);border-bottom:2px solid var(--ngs-border-color)}.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid var(--ngs-border-color)}.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:var(--ngs-bg-secondary)}.items-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:var(--ngs-spacing-sm) var(--ngs-spacing-md);color:var(--ngs-text-primary)}.items-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-top:2px solid var(--ngs-border-color);font-weight:var(--ngs-font-weight-semibold)}.items-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%]{text-align:right;padding:var(--ngs-spacing-md)}.items-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%]{padding:var(--ngs-spacing-md);color:var(--ngs-primary);font-size:var(--ngs-font-size-lg)}"]})}}return r})();export{ee as RowExpansionFeatureComponent};
