
const path = require('path');
const merge = require('webpack-merge');
const package = require("../package.json")

/**
 * base config
 * @type {[type]}
 */

const common = require('async.2018/config/webpack.config.js');

/**
 * component overrides
 * @type {Object}
 */

const component = {
	externals:[
		{"async.2018":"async-2018"}
	],
	devServer:{
		disableHostCheck:true
	}
};

/**
 * append project properties to foundation/config/webpack.config.js
 * @return {WebpackConfig} returns both the es5 and es6 builds
 */

let evt = () => {

	let entry = {};

	const es6 = common[0](evt);
	//const es5 = common[1](evt);
	const css = common[2](evt);

	//set package scope (ES6)

	entry[`${package.short_name}`] = `./src`;
	es6.entry = entry;
	es6.output.filename = `[name].[contenthash].mjs`;
	es6.output.library = `${package.short_name}`;
	es6.output.chunkFilename = `module~[name].[contenthash].mjs`;

	/*
	//set package scope (ES5)

	entry = {};
	entry[`${package.short_name}`]=`webpack-polyfill-injector?${JSON.stringify({
			modules: './src' // list your entry modules for the `app` entry chunk
		})}!`; // don't forget the trailing exclamation mark!
	es5.entry = entry;
	es5.output.filename = `[name].legacy.js`;
	es5.output.library = `${package.short_name}_legacy`;
	es5.output.chunkFilename = `module~[name].legacy.js`;
	*/

	//set package scope (CSS)

	css.entry = `./src/scss/main.scss`;

	//return configs

	return [
		//merge(es5, component),
		merge(es6, component),
	//	merge(css, component)
	]
};

module.exports = evt();
