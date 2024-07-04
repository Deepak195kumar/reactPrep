const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};

// Explanation of Webpack Configuration:
// entry: Specifies the entry point of your application (index.js).
// output: Defines where Webpack should output the bundled files (dist/bundle.js).
// module.rules: Contains rules for how different file types should be processed. For example:
// Transpile JavaScript files (js and jsx) using babel-loader.
// Process CSS files using css-loader and MiniCssExtractPlugin.loader.
// Handle image files using file-loader.
// plugins: Includes additional functionality:
// HtmlWebpackPlugin generates an index.html file based on a template (public/index.html).
// MiniCssExtractPlugin extracts CSS into separate files.
