
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

const component = require('./webpack.config.js');

/**
 * append project properties to foundation/config/webpack.config.js
 * @return {WebpackConfig} returns both the es5 and es6 builds
 */

const evt = () => {

	let entry = {};

	const es6 = common[0](evt);
 	const es5 = common[1](evt);

	//set package scope (ES6)

	es6.devtool = 'source-map';
	entry[`${package.short_name}`] = `./src`;
	es6.entry = entry;
	es6.output.filename = `[name].[contenthash].js`;
	es6.output.library = `${package.short_name}`;
	es6.output.chunkFilename = `module~[name].[contenthash].js`;


	//set package scope (ES5)

	es5.devtool = 'source-map';
	entry = {};
	entry[`${package.short_name}`]=`webpack-polyfill-injector?${JSON.stringify({
			modules: './src' // list your entry modules for the `app` entry chunk
		})}!`; // don't forget the trailing exclamation mark!
	es5.entry = entry;
	es5.output.filename = `[name].legacy.js`;
	es5.output.library = `${package.short_name}_legacy`;
	es5.output.chunkFilename = `module~[name].legacy.js`;

	//return configs

	return [
		merge(es5, production, component),
		merge(es6, production, component)//,
		//merge(css, production)
	]
};

module.exports = evt();
