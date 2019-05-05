const package = require("./package.json");
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");

const MinifyPlugins = {
	"booleans":true,
	"builtIns":true,
	"consecutiveAdds":true,
	"deadcode":true,
	"evaluate":true,
	"flipComparisons":true,
	"guards":true,
	"infinity":true,
	"memberExpressions":true,
	"mergeVars":true,
	"numericLiterals":true,
	"propertyLiterals":true,
	"regexpConstructors":true,
	"replace":true,
	"simplify":true,
	"simplifyComparisons":true,
	"typeConstructors":true,

	"removeConsole":false,
	"removeDebugger":false,
	"removeUndefined":true,
	"undefinedToVoid":true,

	"mangle":false
}

const production = {

	mode: 'production',
	devtool: 'hidden',
	stats: {
		colors: false,
		hash: true,
		timings: true,
		assets: true,
		chunks: true,
		chunkModules: true,
		modules: true,
		children: true,
	},

	optimization: {

		runtimeChunk: false,

		usedExports: true,

		minimizer: [
			new MinifyPlugin(MinifyPlugins)
		],

		splitChunks: {

			cacheGroups: {

				default: false,
				commons: {

					test: /[\\/]node_modules[\\/]/,
					name: 'vendor_app',
					chunks: 'all',
					minChunks: 2

				}

			}

		}

	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			},
		})
	]
}

module.exports = env => {

	let es6 = {output:{}};
	es6.output.filename = `${package.short_name}[contenthash].js`;
	es6.output.chunkFilename = '[name].[contenthash].bundle.js';

	let es5 = {output:{}};
	es5.output.filename = `${package.short_name}.legacy.js`;
	es5.output.chunkFilename = '[name].legacy.bundle.js';

	return [
		merge(common[0](env), Object.assign(production,es6)),
		merge(common[1](env), Object.assign(production,es5))
	]
};
