import Main from "./main";
export {
	Main
}

/*
let context = require.context(".", true, /\.js$/);

let module = {};

context.keys().forEach(function(key) {

	let ctx = context(key).default;
	for (let key in ctx) {

		if (typeof ctx[key] == 'function')
			ctx[key] = ctx[key].toString();
	}

	module[key.replace("./", "").replace("components.", "").replace(".js", "").replace(
		".t", "")] = ctx;

});

export default module;
*/
