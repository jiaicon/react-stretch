const path = require('path');
const nodeExternals = require('webpack-node-externals');
const extractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new extractTextPlugin('css/[name].[hash:6].css');
module.exports = {
  mode: 'production',
  entry: './src/Stretch/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist/'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "../src"),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [
            {
              loader: 'css-loader',
            }
          ]
        })
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test:  /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            name: 'images/[name].[hash:6].[ext]',
            publicPath: '../',
            limit: 10
          }
        }
      }
    ]
  },
  devServer: {
    // 根目录下dist为基本目录
    contentBase: path.resolve(__dirname, '../public'),
    overlay: {
      errors: true,
    },
    // 自动压缩代码
    // compress: true,
  },
  plugins: [extractCSS],
  externals: [nodeExternals()]
};
