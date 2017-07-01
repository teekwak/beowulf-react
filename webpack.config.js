const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: [
		'./main.js',
	],
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				],
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: [/\.woff?$/, /\.woff2?$/, /\.ttf?$/, /\.eot?$/, /\.svg?$/],
				loader: 'url-loader',
			},
		],
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
	},
	plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jQuery',
    }),
  ],
};
