const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
