import { NgModule } from '@angular/core';

import { TanGridModule } from './table/public-api';

export * from './table/public-api';

export { NgsConfig } from './config/public-api';
export { NgsThemeService, type NgsTheme } from './theme/public-api';

const NGS_MODULES = [TanGridModule];

@NgModule({ imports: NGS_MODULES, exports: NGS_MODULES })
export class NgsModule {}

