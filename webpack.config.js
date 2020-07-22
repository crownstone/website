const path = require('path');

module.exports = {
	entry: "./webpack-src/entry.js",
	mode: "production",
	output: {
		path: path.resolve(__dirname, "assets/themes/flat/js/"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel-loader", 
				query: {
					presets: ["@babel/react", "@babel/env"]
				}
			}
		]
	}
};
