/*@flow*/

let context:any = require.context(".", true, /\.js$/);
let _module:any = {};

context.keys().forEach(function(key) {

	let ctx:any = context(key).default;

	for (let key in ctx) {
		_module[key.replace("./","").replace(".js","")] = ctx;
	}

});

export default _module;
