const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
          {
            test: /\.tsx?$/,
            loader: 'ts-loader'
          },
          // {
          //   test: /\.(png|jpg|jpeg|gif|svg)/,
          //   use: {
          //     loader: 'url-loader',
          //     options: {
          //       name: '[name].[hash].[ext]',
          //       outputPath: 'images/', // 图片输出的路径
          //       limit: 10 * 1024
          //     }
          //   }
          // },
          // {
          //   test: /\.(png|jpg|jpeg|gif|svg)/,
          //   use: {
          //     loader: 'file-loader',
          //     options: {
          //       name: '[name].[hash].[ext]',
          //       outputPath: 'images/', // 图片输出的路径
          //       limit: 10 * 1024
          //     }
          //   }
          // }
        ]
    },
    devServer: {
      // 根目录下public为基本目录
      contentBase: path.resolve(__dirname, '../public'),
      // 自动压缩代码
      compress: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],
};
