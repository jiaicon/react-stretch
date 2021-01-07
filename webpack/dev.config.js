const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../'),
    },
    resolve: {
      // extension: [".js", ".jsx"],
    //   alias: {
    //     "@": path.resolve(__dirname, "../src")
    //   }
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
            test: /\.(png|jpg|jpeg|gif|svg)/,
            use: {
              loader: 'url-loader',
              options: {
                outputPath: 'images/', // 图片输出的路径
                limit: 10 * 1024
              }
            }
          }
        ]
    },
    devServer: {
      // 根目录下dist为基本目录
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
