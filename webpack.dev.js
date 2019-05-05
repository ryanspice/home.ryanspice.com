const package = require("./package.json");
const webpack = require('webpack');
const glob = require('glob-all');
const path = require('path');

const CircularDependencyPlugin = require('circular-dependency-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 *
 *	Build Base Process
 *
 */

const build = env => {


	// DEV CHECK TODO: remove one

	if (!env) {

		env = {
			NODE_ENV: "development",
			production: "false"

		};
	}

	const type = env.NODE_ENV;

	if (type == "production") {
		env.production = true;
	}

	// DEFAULT BUNDLE

	const bundle = {

		mode: 'development',

		devtool: 'eval-source-maps',

		output: {
			filename: type != "legacy" ? `${package.short_name}.js` : `${package.short_name}.legacy.js`,
			chunkFilename: '[name].bundle.js',
			path: path.resolve(__dirname, 'dist'),
			library: package.short_name,
			libraryTarget: 'umd',
			umdNamedDefine: true
		},

		resolve: {
			extensions: ['.js','.scss', '.css'],
			plugins: [],
			modules: [
				'./src',
				'node_modules'
			]
		},

		module: {

			rules: [

				{
					test: /\.j(s)|sx$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							"sourceType": "module",
							"presets": [
								"@babel/preset-flow",
								[
									"@babel/preset-env", {
										"modules": false,
										"useBuiltIns": false,
										"shippedProposals": true,
										"targets": {
											"browsers": type != "legacy" ? "cover 20% in CA" : "cover 97% in CA"
										},
										"loose": true
									}
								]
							],
							"plugins": [

								["@babel/plugin-proposal-decorators", {
									"legacy": true
								}],
								"@babel/plugin-proposal-function-sent",
								"@babel/plugin-proposal-export-namespace-from",
								"@babel/plugin-proposal-export-default-from",
								"@babel/plugin-proposal-numeric-separator",
								"@babel/plugin-proposal-throw-expressions",
								"@babel/plugin-syntax-dynamic-import",
								"@babel/plugin-syntax-import-meta",
								"@babel/plugin-syntax-flow", [
									"@babel/plugin-proposal-class-properties", {
										"loose": false
									}
								],
								"@babel/plugin-proposal-json-strings", [
									"@babel/plugin-transform-runtime"
								],

								// Flow

								"@babel/plugin-transform-flow-strip-types"

							]
						}
					},
					include: [path.resolve('src'), path.resolve('test'), path.resolve(
						'node_modules/webpack-dev-server/client')]
				},{
					test: /\.scss$/,
					use: [{
						loader: "style-loader" // creates style nodes from JS strings
					}, {
						loader: "css-loader", // translates CSS into CommonJS
						options: {
							url: false
						}
					}, {
						loader: "sass-loader" // compiles Sass to CSS
					}]
				}, {
					test: /\.(eot|svg|ttf|woff|woff2)$/,
					use: [{
						loader: "file?name=public/fonts/[name].[ext]"
					}]
				}
			]
		},

		plugins: [

			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production')
				},
			}),

			new CircularDependencyPlugin({
				exclude: /a\.js|node_modules/,
				failOnError: true,
				allowAsyncCycles: false,
				cwd: process.cwd(),
				onStart({
					compilation
				}) {},
				onDetected({
					module: webpackModuleRecord,
					paths,
					compilation
				}) {
					compilation.errors.push(new Error(paths.join(' -> ')))
				},
				onEnd({
					compilation
				}) {}
			}),

			new webpack.NamedModulesPlugin(),

			new webpack.optimize.ModuleConcatenationPlugin(),

			new webpack.optimize.OccurrenceOrderPlugin(true),


			new ManifestPlugin({
				fileName: 'manifest.json',
				seed: {
					"short_name": package.short_name,
					"name": package.name,
					"start_url": "/",
					"background_color": "#232323",
					"display": "standalone",
					"orientation": "landscape",
					"scope": "/",
					"theme_color": "#232323"
				},
				map: (file) => {
					file.name = file.name.replace(/\./g, '');
					return file;
				}
			}),


		],

		node: {

			setImmediate: false,
			dgram: 'empty',
			fs: 'empty',
			net: 'empty',
			tls: 'empty',
			child_process: 'empty'

		},

		optimization: {

			runtimeChunk: false,

			usedExports: true,

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

		devServer: {
			proxy: {
				'/api/**': {
	        target: 'https://ryanspice.com',
					secure: false,
					changeOrigin: true
        }
		},
			port: 8080,
			contentBase: './dist',
			hot: false,
			inline: true,
			compress: false,
			stats: {
				assets: true,
				children: true,
				chunks: true,
				hash: true,
				modules: true,
				publicPath: false,
				timings: true,
				version: true,
				warnings: true,
				colors: {
					green: '\u001B[36m',
				}
			}

		}

	};

	if (type != "legacy")
		bundle.plugins.push(new HtmlWebpackPlugin({
	 // Required
	 inject: false,
	 template: './template.ejs',

	 //
	 title:'home.ryanspice.com',

	 scripts: [

		 {
			 src:'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js',
			 type: 'module'
		 }
	 ]


 }))



	return bundle;
};

function recursiveIssuer(m) {
	if (m.issuer) {
		return recursiveIssuer(m.issuer);
	} else if (m.name) {
		return m.name;
	} else {
		return false;
	}
}

module.exports = build;
