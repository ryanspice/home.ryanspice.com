//@flow

/*
import {
	pipe,
	view,
	storage,
	mvc
} from "../async/src";

import "../async/src/core/def/storage/storage.getobject";
import "../async/src/core/def/storage/storage.setobject";
*/
const AsyncTemplate = async2018.pipe;
AsyncTemplate.storage = async2018.storage;

const AsyncView = async2018.view;
const V = AsyncView;
const AsyncController = async2018.mvc;

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
