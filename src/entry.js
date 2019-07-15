//@flow

import {
	pipe,
	view,
	storage,
	mvc
} from "async.2018/src";

import "async.2018/src/core/def/storage/storage.getobject";
import "async.2018/src/core/def/storage/storage.setobject";

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
