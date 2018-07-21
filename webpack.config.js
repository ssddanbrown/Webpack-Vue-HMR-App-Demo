const path = require('path');

/**
 * Webpack Plugins
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * Check if we're in development mode
 * Is true of the 'NODE_ENV' environment variable is 'development'.
 */
const isDev = process.env.NODE_ENV === 'development';

/**
 * Webpack entry points
 */
const entry = {
	app: './src/app.js',
};

/**
 * Webpack output configuration
 */
const output = {
	filename: '[name].js',
	path: path.resolve(__dirname, 'dist'),
	publicPath: '/dist/',
	chunkFilename: '[name].[hash].bundle.js',
};

/**
 * Webpack module loading rules
 */
const rules = [
	{
		test: /\.js$/,
		exclude: /(node_modules|bower_components)/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-env', {
						"useBuiltIns": "usage"
					}]
				],
				plugins: ["syntax-dynamic-import"],
				cacheDirectory: true
			}
		}
	},
	{
		test: /\.vue$/,
		loader: 'vue-loader',
	},
	{
		test: /\.scss$/,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			"css-loader",
						{
				loader: "postcss-loader",
				options: {
					plugins: [require('autoprefixer')]
				}
			},
			"sass-loader"
		]
	}
];

/**
 * Webpack plugin usage
 */
const plugins = [
	new CleanWebpackPlugin([output.path]),
	new VueLoaderPlugin(),
	new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// both options are optional
		filename: "[name].css",
		chunkFilename: "[id].css"
	})
];

/**
 * Webpack-serve configuration
 */
const serve = {
	devMiddleware: {
		publicPath: output.publicPath,
		writeToDisk: true,
	}
};

module.exports = {
	mode: isDev ? 'development' : 'production',
	entry,
	output,
	module: {
		rules
	},
	serve,
	devtool: isDev ? 'inline-source-map' : 'source-map',
	plugins,
};