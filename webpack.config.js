var path = require('path');
var HtmlWebpackPlugin = require('Html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
  entry: './src/js/root.jsx',
  output: {
    filename: 'bundle-[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js','.jsx','.scss','css']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react','es2015'],
            plugins: ["transform-react-jsx","react-html-attrs",
              ['import', { libraryName: 'antd', style: true }],]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react','es2015'],
            plugins: ["transform-react-jsx","react-html-attrs"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader",
          options: {
            modules: false,
            importLoaders: 1,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          }
        }]
      },
      {
        test: /\.scss$/,
        exclude : /(node_modules)/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          }
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ]

};
