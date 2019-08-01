//@flow

/**
 * Async Framework
 */

import * as async2018 from "async.2018/src";

/**
 * Async Framework Components
 * @type {pipe}
 * @type {storage}
 * @type {view}
 * @type {mvc}
 */

const AsyncTemplate = async2018.pipe;
AsyncTemplate.storage = async2018.storage;

const AsyncView = async2018.view;
const AsyncController = async2018.mvc;

/**
 * Async Shortform
 */

const M:AsyncTemplate = AsyncTemplate;
const V:AsyncView = AsyncView;
const C:AsyncController = AsyncController;

/**
 * Async
 */

export default AsyncTemplate;

export {
	AsyncTemplate,
	AsyncView,
	AsyncController,
	M,
	V,
	C
};
