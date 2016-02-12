var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				/*exclude: /(node_modules|bower_components)/,*/
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, 'src')
				/*query: {
					presets: ['react', 'es2015']
				}*/
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}
