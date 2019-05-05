/*@flow*/

let context:any = require.context(".", true, /\.js$/);
let module:any = {};

context.keys().forEach(function(key) {

	let ctx:any = context(key).default;

	for (let key in ctx) {
		module[key.replace("./","").replace(".js","")] = ctx;
	}

});

export default module;
