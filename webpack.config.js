const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "style.css"
});

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve("dist"),
    filename: "index.js"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: false
              }
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [extractSass]
};
