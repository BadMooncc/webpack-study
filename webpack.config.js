const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./public/config')[isDev ? 'dev' : 'build'];

module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', //打包后的文件名
      minify: {
          removeAttributeQuotes: false, //是否删除属性的双引号
          collapseWhitespace: false, //是否折叠空白
      },
      // hash: true //是否加上hash，默认是 false
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
                [
                    "@babel/plugin-transform-runtime",
                    {
                        "corejs": 3
                    }
                ]
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}