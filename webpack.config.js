const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: "./src/entry.js",
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			}]
	}
    // plugins: [
    //     new webpack.DefinePlugin({
    //         "process.env": {
    //             // This has effect on the react lib size
    //             "NODE_ENV": JSON.stringify("production")
    //         }
    //     }),
    //     new webpack.optimize.UglifyJsPlugin()
    // ]
};