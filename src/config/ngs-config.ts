import { Injectable } from '@angular/core';

/**
 * Configuration service for tanGrid components.
 * Provides global configuration options.
 */
@Injectable({ providedIn: 'root' })
export class NgsConfig {
	/**
	 * If `true`, animations will be enabled globally for all components.
	 * Individual components can override this setting.
	 *
	 * @default true
	 */
	animation = true;
}

