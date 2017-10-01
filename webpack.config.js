const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/javascript/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, './src/static'),
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }
        ]
      }
    ]
  }
}
