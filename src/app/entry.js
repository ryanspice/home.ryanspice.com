//@flow

import {
	pipe,
	view,
	storage,
	mvc
} from "../async/src";

import "../async/src/core/def/storage/storage.getobject";
import "../async/src/core/def/storage/storage.setobject";

const AsyncTemplate = pipe;
AsyncTemplate.storage = storage;

const AsyncView = view;
const V = AsyncView;
const AsyncController = mvc;

/**
 * exports
 */

export default AsyncTemplate;
export {
	AsyncTemplate,
	AsyncView,
	AsyncController,
	V
};
