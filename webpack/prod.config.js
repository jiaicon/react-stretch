const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'production',
  entry: './src/Stretch/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist/'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", ".json", ".d.ts"],
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
            limit: 10 * 1024
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
    compress: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:6].css',
    }),
  ],
  externals: [nodeExternals()]
};
