import {
	untracked,
	computed,
	signal,
	effect,
	afterNextRender,
	inject,
	DestroyRef,
	AfterRenderPhase,
	type Signal,
	type WritableSignal
} from '@angular/core';
import type { AngularVirtualizer } from '@tanstack/angular-virtual';
import {
	Virtualizer,
	elementScroll,
	observeElementOffset,
	observeElementRect,
	windowScroll,
	observeWindowOffset,
	observeWindowRect,
	type VirtualizerOptions,
} from '@tanstack/virtual-core';

function proxyVirtualizer(virtualizerSignal: Signal<Virtualizer<any, any>>, lazyInit: () => Virtualizer<any, any>) {
	return new Proxy(virtualizerSignal, {
		apply() {
			return virtualizerSignal();
		},
		get(target, property) {
			const untypedTarget = target as any;
			if (untypedTarget[property]) {
				return untypedTarget[property];
			}
			let virtualizer = untracked(virtualizerSignal);
			if (virtualizer == null) {
				virtualizer = lazyInit();
				untracked(() => (virtualizerSignal as WritableSignal<Virtualizer<any, any>>).set(virtualizer));
			}
			// Create computed signals for each property that represents a reactive value
			if (
				typeof property === 'string' &&
				[
					'getTotalSize',
					'getVirtualItems',
					'isScrolling',
					'options',
					'range',
					'scrollDirection',
					'scrollElement',
					'scrollOffset',
					'scrollRect',
					'measureElementCache',
					'measurementsCache',
				].includes(property)
			) {
				const isFunction = typeof (virtualizer as any)[property] === 'function';
				Object.defineProperty(untypedTarget, property, {
					value: isFunction
						? computed(() => (target() as any)[property]())
						: computed(() => (target() as any)[property]),
					configurable: true,
					enumerable: true,
				});
			}
			// Create plain signals for functions that accept arguments and return reactive values
			if (
				typeof property === 'string' &&
				[
					'getOffsetForAlignment',
					'getOffsetForIndex',
					'getVirtualItemForOffset',
					'indexFromElement',
				].includes(property)
			) {
				const fn = (virtualizer as any)[property];
				Object.defineProperty(untypedTarget, property, {
					value: toComputed(virtualizerSignal, fn),
					configurable: true,
					enumerable: true,
				});
			}
			return untypedTarget[property] || (virtualizer as any)[property];
		},
		has(_, property) {
			return !!(untracked(virtualizerSignal) as any)[property];
		},
		ownKeys() {
			return Reflect.ownKeys(untracked(virtualizerSignal) as any);
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: true,
				configurable: true,
			};
		},
	});
}

function toComputed(signal: Signal<any>, fn: (...args: any[]) => any) {
	const computedCache: Record<string, Signal<any>> = {};
	return (...args: any[]) => {
		// Cache computeds by their arguments to avoid re-creating the computed on each call
		const serializedArgs = serializeArgs(...args);
		if (Object.prototype.hasOwnProperty.call(computedCache, serializedArgs)) {
			return computedCache[serializedArgs]?.();
		}
		const computedSignal = computed(() => {
			void signal();
			return fn(...args);
		});
		computedCache[serializedArgs] = computedSignal;
		return computedSignal();
	};
}

function serializeArgs(...args: any[]) {
	return JSON.stringify(args);
}

function createVirtualizerBase<TScrollElement extends Element | Window, TItemElement extends Element>(
	options: Signal<VirtualizerOptions<TScrollElement, TItemElement>>,
): AngularVirtualizer<TScrollElement, TItemElement> {
	let virtualizer: Virtualizer<TScrollElement, TItemElement>;
	function lazyInit() {
		if (!virtualizer) {
			virtualizer = new Virtualizer(options());
		}
		return virtualizer;
	}
	const virtualizerSignal = signal(virtualizer!, { equal: () => false });
	// two-way sync options
	effect(
		() => {
			const _options = options();
			lazyInit();
			virtualizerSignal.set(virtualizer);
			virtualizer.setOptions({
				..._options,
				onChange: (instance: any, sync: any) => {
					// update virtualizerSignal so that dependent computeds recompute.
					virtualizerSignal.set(instance);
					_options.onChange?.(instance, sync);
				},
			});
			// update virtualizerSignal so that dependent computeds recompute.
			virtualizerSignal.set(virtualizer);
		},
		{ allowSignalWrites: true },
	);
	const scrollElement = computed(() => options().getScrollElement());
	// let the virtualizer know when the scroll element is changed
	effect(
		() => {
			const el = scrollElement();
			if (el) {
				untracked(virtualizerSignal)._willUpdate();
			}
		},
		{ allowSignalWrites: true },
	);
	let cleanup: (() => void) | undefined;
	
	// FIX: Use function callback with options for afterNextRender
	afterNextRender(() => (virtualizer ?? lazyInit())._didMount(), { phase: AfterRenderPhase.Read });
	
	inject(DestroyRef).onDestroy(() => cleanup?.());
	return proxyVirtualizer(virtualizerSignal as any, lazyInit) as any as AngularVirtualizer<
		TScrollElement,
		TItemElement
	>;
}

export interface AngularVirtualizerOptions<TScrollElement extends Element, TItemElement extends Element>
	extends Partial<VirtualizerOptions<TScrollElement, TItemElement>> {
	scrollElement?: TScrollElement | { nativeElement: TScrollElement } | null;
}

export function injectVirtualizer<TScrollElement extends Element, TItemElement extends Element>(
	options: () => AngularVirtualizerOptions<TScrollElement, TItemElement>,
): AngularVirtualizer<TScrollElement, TItemElement> {
	const resolvedOptions = computed(() => {
		const opts = options();
		return {
			observeElementRect: observeElementRect,
			observeElementOffset: observeElementOffset,
			scrollToFn: elementScroll,
			getScrollElement: () => {
				const elementOrRef = opts.scrollElement;
				return (
					(isElementRef(elementOrRef)
						? elementOrRef.nativeElement
						: elementOrRef) ?? null
				);
			},
			...opts,
		} as VirtualizerOptions<TScrollElement, TItemElement>;
	});
	return createVirtualizerBase(resolvedOptions);
}

function isElementRef(elementOrRef: any): elementOrRef is { nativeElement: any } {
	return elementOrRef != null && 'nativeElement' in elementOrRef;
}

export function injectWindowVirtualizer<TItemElement extends Element>(
	options: () => Partial<VirtualizerOptions<Window, TItemElement>>,
): AngularVirtualizer<Window, TItemElement> {
	const resolvedOptions = computed(() => {
		return {
			getScrollElement: () => (typeof document !== 'undefined' ? window : null),
			observeElementRect: observeWindowRect,
			observeElementOffset: observeWindowOffset,
			scrollToFn: windowScroll,
			initialOffset: () => (typeof document !== 'undefined' ? window.scrollY : 0),
			...options(),
		} as VirtualizerOptions<Window, TItemElement>;
	});
	return createVirtualizerBase(resolvedOptions);
}
