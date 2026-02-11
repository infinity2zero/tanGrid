#!/usr/bin/env node
/**
 * Post-build: Remove esm2022 to reduce npm package size (~450 KB).
 * Update package.json exports to only reference fesm2022.
 */
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '../dist/tangrid');
const PKG_PATH = path.join(DIST, 'package.json');

if (!fs.existsSync(PKG_PATH)) {
	console.error('dist/tangrid/package.json not found. Run tangrid:build first.');
	process.exit(1);
}

// Remove esm2022 directory
const esm2022 = path.join(DIST, 'esm2022');
if (fs.existsSync(esm2022)) {
	fs.rmSync(esm2022, { recursive: true });
	console.log('Removed esm2022/ (~450 KB saved)');
}

// Update package.json exports - remove esm2022 and esm conditions
const pkg = JSON.parse(fs.readFileSync(PKG_PATH, 'utf8'));

function slimExports(exports) {
	if (!exports || typeof exports !== 'object') return exports;
	const slim = {};
	for (const [key, value] of Object.entries(exports)) {
		if (typeof value === 'string') {
			slim[key] = value;
		} else if (value && typeof value === 'object') {
			// Keep only types and default, drop esm2022 and esm
			const { types, default: def } = value;
			slim[key] = { types, default: def };
		}
	}
	return slim;
}

pkg.exports = slimExports(pkg.exports);

// Explicit files list to ensure only intended artifacts are published
pkg.files = [
	'fesm2022',
	'index.d.ts',
	'config',
	'table',
	'theme',
	'styles',
	'README.md',
	'LICENSE'
];
fs.writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 2) + '\n');
console.log('Updated package.json exports');
