import { Component, signal, TemplateRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TanGrid, TanGridColumn } from 'tangrid';
import { CodeViewerComponent } from '../../../../shared/code-viewer/code-viewer.component';
import { TableThemeService } from '../../../../services/table-theme.service';

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
	selector: 'ngsd-row-expansion-feature',
	standalone: true,
	imports: [CommonModule, TanGrid, CodeViewerComponent],
	templateUrl: './row-expansion-feature.component.html',
	styleUrls: ['./row-expansion-feature.component.scss'],
})
export class RowExpansionFeatureComponent {
	private tableThemeService = inject(TableThemeService);
	@ViewChild('expandedTemplate', { static: true }) expandedTemplate!: TemplateRef<any>;
	tableTheme = this.tableThemeService.theme;
	showCode = signal(false);

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
		{
			id: 'ORD-002',
			customerName: 'Jane Smith',
			orderDate: '2024-01-16',
			total: 89.97,
			status: 'processing',
			items: [
				{ id: '3', productName: 'Keyboard', quantity: 1, price: 79.99, subtotal: 79.99 },
				{ id: '4', productName: 'USB Cable', quantity: 1, price: 9.98, subtotal: 9.98 },
			],
		},
		{
			id: 'ORD-003',
			customerName: 'Bob Johnson',
			orderDate: '2024-01-17',
			total: 1299.95,
			status: 'shipped',
			items: [
				{ id: '5', productName: 'Monitor', quantity: 2, price: 299.99, subtotal: 599.98 },
				{ id: '6', productName: 'Stand', quantity: 2, price: 49.99, subtotal: 99.98 },
				{ id: '7', productName: 'HDMI Cable', quantity: 2, price: 19.99, subtotal: 39.98 },
			],
		},
		{
			id: 'ORD-004',
			customerName: 'Alice Williams',
			orderDate: '2024-01-18',
			total: 45.99,
			status: 'delivered',
			items: [
				{ id: '8', productName: 'Webcam', quantity: 1, price: 45.99, subtotal: 45.99 },
			],
		},
		{
			id: 'ORD-005',
			customerName: 'Charlie Brown',
			orderDate: '2024-01-19',
			total: 199.98,
			status: 'pending',
			items: [
				{ id: '9', productName: 'Headphones', quantity: 1, price: 149.99, subtotal: 149.99 },
				{ id: '10', productName: 'Microphone', quantity: 1, price: 49.99, subtotal: 49.99 },
			],
		},
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
			accessorFn: (row) => `$${row.total.toFixed(2)}`,
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

	code = `import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [TanGrid, CommonModule],
  template: '<tan-grid [data]="orders" [columns]="columns" [expandable]="true" [expandedRowTemplate]="expandedTemplate" [striped]="true" [bordered]="true" [hoverable]="true" (expansionChange)="onExpansionChange($event)"></tan-grid><ng-template #expandedTemplate let-order="row"><div class="expanded-content"><h3>Order Items</h3><table class="items-table"><thead><tr><th>Product</th><th>Quantity</th><th>Price</th><th>Subtotal</th></tr></thead><tbody>@for (item of order.items; track item.id) {<tr><td>{{ item.productName }}</td><td>{{ item.quantity }}</td><td>{{ item.price | number:\\'1.2-2\\' }}</td><td>{{ item.subtotal | number:\\'1.2-2\\' }}</td></tr>}</tbody><tfoot><tr><td colspan="3" class="total-label">Total:</td><td class="total-value">{{ order.total | number:\\'1.2-2\\' }}</td></tr></tfoot></table></div></ng-template>'
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
    {
      id: 'ORD-002',
      customerName: 'Jane Smith',
      orderDate: '2024-01-16',
      total: 89.97,
      status: 'processing',
      items: [
        { id: '3', productName: 'Keyboard', quantity: 1, price: 79.99, subtotal: 79.99 },
        { id: '4', productName: 'USB Cable', quantity: 1, price: 9.98, subtotal: 9.98 },
      ],
    },
    {
      id: 'ORD-003',
      customerName: 'Bob Johnson',
      orderDate: '2024-01-17',
      total: 1299.95,
      status: 'shipped',
      items: [
        { id: '5', productName: 'Monitor', quantity: 2, price: 299.99, subtotal: 599.98 },
        { id: '6', productName: 'Stand', quantity: 2, price: 49.99, subtotal: 99.98 },
        { id: '7', productName: 'HDMI Cable', quantity: 2, price: 19.99, subtotal: 39.98 },
      ],
    },
    {
      id: 'ORD-004',
      customerName: 'Alice Williams',
      orderDate: '2024-01-18',
      total: 45.99,
      status: 'delivered',
      items: [
        { id: '8', productName: 'Webcam', quantity: 1, price: 45.99, subtotal: 45.99 },
      ],
    },
    {
      id: 'ORD-005',
      customerName: 'Charlie Brown',
      orderDate: '2024-01-19',
      total: 199.98,
      status: 'pending',
      items: [
        { id: '9', productName: 'Headphones', quantity: 1, price: 149.99, subtotal: 149.99 },
        { id: '10', productName: 'Microphone', quantity: 1, price: 49.99, subtotal: 49.99 },
      ],
    },
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
}`;
}

