
const merge = require('webpack-merge');
const package = require("../package.json")

/**
 * base config
 * @type {[type]}
 */

const common = require('async.2018/config/webpack.config.js');
const production = require('async.2018/config/webpack.prod.js');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/**
 * append project properties to foundation/config/webpack.config.js
 * @return {WebpackConfig} returns both the es5 and es6 builds
 */

const evt = () => {

	let entry = {};

	const es6 = common[0](evt);

	//set package scope (ES6)

	es6.devtool = 'source-map';
	entry[`${package.short_name}`] = `./src`;
	es6.entry = entry;
	es6.output.filename = `[name].[contenthash].js`;
	es6.output.library = `${package.short_name}`;
	es6.output.chunkFilename = `module~[name].[contenthash].js`;
	es6.plugins.push(
    new BundleAnalyzerPlugin()
	);
	//return configs

	return [
		merge(es6, production)//,
		//merge(css, production)
	]
};

module.exports = evt();
