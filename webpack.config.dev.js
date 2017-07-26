var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
//var ChunkManifestPlugin = require("chunk-manifest-webpack2-plugin");
var WebpackChunkHashPlugin = require("webpack-chunk-hash");
/*
var loaderOptionsPlugin=new webpack.LoaderOptionsPlugin(
                            {
                              minimize: true,
                              debug: false,
                              options: {
                                context: __dirname
                              }
                            }
                        )
*/
var definePlugin=new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': '"developer"'
  }
});
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
                        name:['vendor'],
                        minChunks: Infinity
                    });
var providePlugin = new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       });
var extractCSS = new ExtractTextPlugin({filename:'style/[name].css', disable: false, allChunks: true});
/*
var uglifyJsPlugin=new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })  //对代码进行压缩，目前不支持ES6语法压缩，只能通过Babel转成ES5后再进行压缩
var chunkManifestPlugin=new ChunkManifestPlugin({
      filename: "js/chunk-manifest.json",
      manifestVariable: "webpackManifest"
    })
var hashedModuleIdsPlugin=new webpack.HashedModuleIdsPlugin()
var webpackChunkHashPlugin=new WebpackChunkHashPlugin()
*/
var htmpWebpackPlugin=new HtmlWebpackPlugin({
    title: '系统名称',
    template: './src/tmpl/index.ejs', // Load a custom template (ejs by default see the FAQ for details) 
    filename: '../index.html'
  })
//var occurenceOrderPlugin=new webpack.optimize.OccurrenceOrderPlugin()    //最小化
//var limitChunkCountPlugin=new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}) //按需加载复用
var noEmitOnErrorsPlugin=new webpack.NoEmitOnErrorsPlugin() //报错但不退出webpack进程
var hotModuleReplacementPlugin=new webpack.HotModuleReplacementPlugin()
var namedModulesPlugin=new webpack.NamedModulesPlugin()
process.traceDeprecation = true
module.exports = {
    //插件项
    plugins: [
        definePlugin,
        commonsPlugin,
        providePlugin,
        //occurenceOrderPlugin,
        //limitChunkCountPlugin,
        //loaderOptionsPlugin,
        //hashedModuleIdsPlugin,
        //webpackChunkHashPlugin,
        //chunkManifestPlugin,
        extractCSS,
        htmpWebpackPlugin,
        hotModuleReplacementPlugin,
        namedModulesPlugin,
        //uglifyJsPlugin,
        noEmitOnErrorsPlugin
    ],
    //context: resolve(__dirname, 'src'),
    devtool:'eval',
    devServer: {
        hot: true,
        // enable HMR on the server
        contentBase: path.resolve(__dirname, 'dist/assets'),
        // match the output path
        publicPath: '/assets/'
        // match the output `publicPath`
    },
    //页面入口文件配置
    entry: {
        app:
        [
            'webpack-hot-middleware/client',
            './src/app.jsx'
        ],
        vendor:[
            'jquery',
            'src/scripts/lib/jquery-vendor',
            'bootstrap',
            'metismenu',
            'src/scripts/lib/pace',
            'icheck',
            'jquery-slimscroll',
            'toastr',
            'isomorphic-fetch',
            'es6-symbol',
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'react-router',
            'react-router-redux',
            'react-router-dom',
            'redux-thunk',
            'redux-logger',
            'immutable',
            'redux-immutablejs',
            'redux-devtools',
            'redux-devtools-log-monitor',
            'redux-devtools-dock-monitor',
            'normalizr',
            'history']
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/assets/',
        filename: 'js/[name].js',
        chunkFilename: "js/[name].js"
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.jsx|\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{   //把ES6语法转为ES5
                    loader:"babel-loader",
                    options: {
                        presets: [ ["es2015", {"modules": false}], "stage-0", "react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({ fallback: 'style-loader', use: 'css-loader' })
            }, 
            {
                test: /\.scss$/,
                use: extractCSS.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader?sourceMap' })
            },
            {
                test: /\.(png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?name=img/[name].[ext]&limit=100000'
            },
            {
                test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?name=img/[name].[ext]&limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        //root: '/home/babystudio/Developer/webpack/', //绝对路径
        extensions: [".js", ".json",".jsx",".scss"],
        modules: [path.resolve(__dirname, "."), "node_modules", "src/scripts/static"]
    }
};