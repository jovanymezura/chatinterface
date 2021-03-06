/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Provider } from '../../di';
import { ChangeDetectorRef } from '../change_detector_ref';
/**
 * A differ that tracks changes made to an object over time.
 *
 * @stable
 */
export interface KeyValueDiffer<K, V> {
    /**
     * Compute a difference between the previous state and the new `object` state.
     *
     * @param object containing the new value.
     * @returns an object describing the difference. The return value is only valid until the next
     * `diff()` invocation.
     */
    diff(object: Map<K, V>): KeyValueChanges<K, V>;
    /**
     * Compute a difference between the previous state and the new `object` state.
     *
     * @param object containing the new value.
     * @returns an object describing the difference. The return value is only valid until the next
     * `diff()` invocation.
     */
    diff(object: {
        [key: string]: V;
    }): KeyValueChanges<string, V>;
}
/**
 * An object describing the changes in the `Map` or `{[k:string]: string}` since last time
 * `KeyValueDiffer#diff()` was invoked.
 *
 * @stable
 */
export interface KeyValueChanges<K, V> {
    /**
     * Iterate over all changes. `KeyValueChangeRecord` will contain information about changes
     * to each item.
     */
    forEachItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
    /**
     * Iterate over changes in the order of original Map showing where the original items
     * have moved.
     */
    forEachPreviousItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
    /**
     * Iterate over all keys for which values have changed.
     */
    forEachChangedItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
    /**
     * Iterate over all added items.
     */
    forEachAddedItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
    /**
     * Iterate over all removed items.
     */
    forEachRemovedItem(fn: (r: KeyValueChangeRecord<K, V>) => void): void;
}
/**
 * Record representing the item change information.
 *
 * @stable
 */
export interface KeyValueChangeRecord<K, V> {
    /**
     * Current key in the Map.
     */
    key: K;
    /**
     * Current value for the key or `undefined` if removed.
     */
    currentValue: V;
    /**
     * Previous value for the key or `undefined` if added.
     */
    previousValue: V;
}
/**
 * Provides a factory for {@link KeyValueDiffer}.
 *
 * @stable
 */
export interface KeyValueDifferFactory {
    /**
     * Test to see if the differ knows how to diff this kind of object.
     */
    supports(objects: any): boolean;
    /**
     * Create a `KeyValueDiffer`.
     */
    create<K, V>(): KeyValueDiffer<K, V>;
    /**
     * @deprecated v4.0.0 - ChangeDetectorRef is not used and is no longer a parameter
     */
    create<K, V>(_cdr?: ChangeDetectorRef): KeyValueDiffer<K, V>;
}
/**
 * A repository of different Map diffing strategies used by NgClass, NgStyle, and others.
 * @stable
 */
export declare class KeyValueDiffers {
    /**
     * @deprecated v4.0.0 - Should be private.
     */
    factories: KeyValueDifferFactory[];
    constructor(factories: KeyValueDifferFactory[]);
    static create<S>(factories: KeyValueDifferFactory[], parent?: KeyValueDiffers): KeyValueDiffers;
    /**
     * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
     * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
     * {@link KeyValueDiffers} instance.
     *
     * The following example shows how to extend an existing list of factories,
           * which will only be applied to the injector for this component and its children.
           * This step is all that's required to make a new {@link KeyValueDiffer} available.
     *
     * ### Example
     *
     * ```
     * @Component({
     *   viewProviders: [
     *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
     *   ]
     * })
     * ```
     */
    static extend<S>(factories: KeyValueDifferFactory[]): Provider;
    find(kv: any): KeyValueDifferFactory;
}
