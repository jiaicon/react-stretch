const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/app.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist/'),
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", "jsx", ".json"],
      alias: {
        "@": path.join(__dirname, "../src")
      }
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
          // {
          //   test: /\.css$/,
          //   use: extractTextPlugin.extract({
          //     fallback: 'style-loader',
          //     publicPath: '../',
          //     use: [
          //       {
          //         loader: 'css-loader',
          //       }
          //     ]
          //   })
          // },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: ['autoprefixer'],
                  },
                  sourceMap: true,
                },
              },
            ],
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
      // 根目录下public为基本目录
      contentBase: path.resolve(__dirname, '../public'),
      // 自动压缩代码
      compress: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
        new htmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
};
