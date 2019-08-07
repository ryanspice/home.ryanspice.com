
const merge = require('webpack-merge');
const package = require("../package.json")

/**
 * base config
 * @type {[type]}
 */

const common = require('async.2018/config/webpack.config.js');
const production = require('async.2018/config/webpack.prod.js');

/**
 * component overrides
 * @type {Object}
 */

const component = {
	externals:[
		{"async.2018":"async.2018"}
	],
	devServer:{
		disableHostCheck:true
	}
};
/**
 * append project properties to foundation/config/webpack.config.js
 * @return {WebpackConfig} returns both the es5 and es6 builds
 */

const evt = () => {

	let entry = {};
	const extension = 'js';//ejs?'mjs':'js';

	const es6 = common[0](evt);
 	const es5 = common[1](evt);
 	const css = common[2](evt);

	//set package scope (ES6)

	es6.devtool = 'source-map';
	entry[`${package.short_name}`] = `./src`;
	es6.entry = entry;
	es6.output.filename = `[name].[contenthash].js`;
	es6.output.library = `${package.short_name}`;
	es6.output.chunkFilename = `module~[name].[contenthash].js`;

		entry[`${package.short_name}`] = `./src`;
	 	es5.entry = es6.entry = entry;
	 	es5.output.filename = es6.output.filename = `[name].[contenthash].${extension}`;
	 	es5.output.library = es6.output.library = `${package.short_name}`;
	 	es5.output.chunkFilename = es6.output.chunkFilename = `module~[name].[contenthash].${extension}`;

			css.entry = `./src/app/scss/main.scss`;
	//set package scope (ES5)
/*
	es5.devtool = 'source-map';
	entry = {};
	entry[`${package.short_name}`]=`webpack-polyfill-injector?${JSON.stringify({
			modules: './src' // list your entry modules for the `app` entry chunk
		})}!`; // don't forget the trailing exclamation mark!
	es5.entry = entry;
	es5.output.filename = `[name].legacy.js`;
	es5.output.library = `${package.short_name}_legacy`;
	es5.output.chunkFilename = `module~[name].legacy.js`;
*/
	//return configs

	return [
		merge(es5, production, component),
		merge(es6, production, component),
		merge(css, production, component)
	]
};

module.exports = evt();
