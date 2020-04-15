const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
			  test: /\.scss$/i,
			  use: [
			  	'style-loader',
			  	'css-loader',
			  	{
			  		loader: 'sass-loader',
			  		options: {
			  			implementation: require('sass')
			  		}
			  	}
			  	]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Lawyer System',
			template: path.resolve( __dirname, 'public/index.html' ),
			filename: 'index.html',
		}),
	],
}