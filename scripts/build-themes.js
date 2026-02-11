#!/usr/bin/env node
/**
 * Compiles optional theme SCSS files to CSS in dist/tangrid/styles/themes/.
 * Run after tangrid build. Consumers import these when using theme="material" etc.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const THEMES = ['material', 'bootstrap', 'ant', 'ant-alt'];
const SRC_DIR = path.join(__dirname, '../src/table/themes');
const OUT_DIR = path.join(__dirname, '../dist/tangrid/styles/themes');

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const theme of THEMES) {
	const src = path.join(SRC_DIR, `${theme}.theme.scss`);
	const out = path.join(OUT_DIR, `${theme}.css`);
	try {
		execSync(`npx sass "${src}" "${out}" --style=compressed --no-source-map`, {
			stdio: 'inherit',
			cwd: path.join(__dirname, '..')
		});
		console.log(`  Compiled ${theme}.theme.scss → styles/themes/${theme}.css`);
	} catch (err) {
		console.error(`Failed to compile ${theme}`);
		process.exit(1);
	}
}
console.log('Theme CSS build complete.');
