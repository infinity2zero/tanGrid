import { NgModule } from '@angular/core';
import { TanGrid } from './table.component';

/**
 * Table module
 */
@NgModule({
	imports: [TanGrid],
	exports: [TanGrid],
})
export class TanGridModule {}

