'use strict';

var env = ['production', 'test', 'staging', 'integration'].indexOf(process.env.NODE_ENV) < 0 ? 'development' : process.env.NODE_ENV;

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToBootstarp = path.resolve(node_modules, 'bootstrap/dist/');

var config = {
    entry: {
        "index": "./src/main.js",
        "vendors": ['bootstrap.css', 'react', 'react-dom', 'bootstrap.js']
    },
    output: {
        path: __dirname + '/public/assets/',
        filename: '[chunkhash:8].[name].js',
        chunkFilename: '[name].[chunkhash:8].js',
        publicPath: '/teacher-admin-web'
    },
    module: {
        loaders: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=10000&name=build/[name].[ext]'
            }
        ],
        noParse: [ pathToBootstarp]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new webpack.DefinePlugin({
          URI_PROFIX: (env === 'development') ? JSON.stringify('/teacher-admin-web') : JSON.stringify('')
        }),
        new ExtractTextPlugin("[chunkhash:8].[name].css"),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

    ],
    resolve: {
        alias: {
            'bootstrap.css': 'bootstrap/dist/css/bootstrap.min.css',
            'bootstrap.js': 'bootstrap/dist/js/bootstrap.min.js'
        }
    }
};

function htmlwebpackPluginBuilder(fileName, deps) {
    return new HtmlwebpackPlugin({
        filename: fileName,
        minify: {collapseWhitespace: true},
        template: __dirname + '/' + fileName,
        inject: true,
        chunks: deps
    })
}

(function webpackByEnv() {
    if (process.env.NODE_ENV === 'production') {
        config.plugins.push(
          new webpack.optimize.UglifyJsPlugin({
              compress: {
                  warnings: false
              }
          })
        );
    } else {
        config.devtool = '#cheap-source-map';
    }
})();

config.plugins.push(htmlwebpackPluginBuilder('index.html', ['vendors', 'index']));


module.exports = config;
