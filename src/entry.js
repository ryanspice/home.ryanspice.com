//@flow

require(`./assets/style.scss`);

const log = require('loglevel');

import {
	pipe,view,mvc
	} from "async.2018/lib/ATRender";

const AsyncTemplate = pipe;
const AsyncView = view;
const AsyncController = mvc;

/**
 * exports
 */
export default AsyncTemplate;
export {
	AsyncTemplate,
	AsyncView,
	AsyncController
};
