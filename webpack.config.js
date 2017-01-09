var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {

	output: {
		path: path.join(__dirname, 'public/js'),
		publicPath: 'http://localhost:3000/js/',
		filename: 'bundle.js'
	},
	resolve: {
		root: [path.join(__dirname, 'node_modules')],
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			// ES6 transpiler
			{
				test: /.jsx?$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ['inferno']
                }
			},
		]
	},
	watch: true,
	devtool: 'source-map'
}
