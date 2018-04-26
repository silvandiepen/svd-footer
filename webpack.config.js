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
        use: ["css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
