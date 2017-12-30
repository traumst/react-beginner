const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "bundle.js"
  },
  devServer: {
    // publicPath: "/assets/",
    contentBase: path.join(__dirname, "assets"),
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'react', 'stage-0']
        }
      },
      // {
      //     test: /\.css$/,
      //     exclude: /(node_modules)/,
      //     loader: 'style-loader!css-loader!autoprefixer-loader'
      // },
    ]
  },
};