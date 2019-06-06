
const path = require('path');
const merge = require('webpack-merge');
const package = require("../package.json")

const common = require('async.2018/config/webpack.config.js');

const component = {};

let entry = {};

/**
 * append project properties to foundation/config/webpack.config.js
 * @return {WebpackConfig} returns both the es5 and es6 builds
 */

let evt = () => {

	//get base configs

	const es6 = common[0](evt);
	const es5 = common[1](evt);

	es6.externals = es5.externals = [];

	//set package scope (ES6)

	entry[`${package.short_name}`] = `./src`;
	es6.entry = entry;

	//set package scope (ES5)

	entry = {};
	entry[`${package.short_name}`]=`webpack-polyfill-injector?${JSON.stringify({
			modules: './src' // list your entry modules for the `app` entry chunk
		})}!`; // don't forget the trailing exclamation mark!
	es5.entry = entry;

	//naming scheme

	es6.output.filename = `[name].[contenthash].js`;
	es6.output.library = `${package.short_name}`;
	es6.output.chunkFilename = `module~[name].[contenthash].js`;

	es5.output.filename = `[name].legacy.js`;
	es5.output.library = `${package.short_name}_legacy`;
	es5.output.chunkFilename = `module~[name].legacy.js`;

es6.devServer.disableHostCheck = true;
es5.devServer.disableHostCheck = true;

	//assign webpack externals

	es6.externals.push({
		"async.2018":"async-2018"});
	es5.externals.push({
		"async.2018":"async-2018"});

	//return configs

	return [
		merge(es5, component),
		merge(es6, component)
	]
};




module.exports = evt();
