var gulp = require('gulp'),
	gutil = require("gulp-util"),
	args = require('yargs').argv,
	$ = require('gulp-load-plugins')(),
	del = require('del'),
	historyApiFallback = require('connect-history-api-fallback'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpack = require('webpack'),
    browserSync = require('browser-sync');
// production mode (see build task)
// Example:
//    gulp --prod
var isProduction = !!args.prod;
if (isProduction)
    log('Starting production build...');

var webpackConfig = require(
    isProduction ?
    './webpack.config.prod' :
    './webpack.config.dev'
);
var bundler = webpack(webpackConfig);

var paths = {
	app: 'src/',
	dist: 'dist/',
    mock: 'mock/',
    assets: 'assets/',
    scripts: 'scripts/',
    static: 'scripts/static/',
    html: 'html/'
}
// ignore everything that begins with underscore
var hidden_files = '**/_*.*';
var ignored_files = hidden_files;
// SOURCES CONFIG
var source = {
    scripts: {
        app: [paths.app + paths.scripts + '**/*.{jsx,js}'],
        static: [paths.app + paths.static + '**/*.{js,json}'],
        entry: [paths.app + paths.scripts + 'App.{jsx,js}']
    },
    images: [paths.app + paths.assets + 'static/img/**/*.{jpg,jpeg,png,gif,svg}'],
    fonts: [paths.app + paths.assets + 'static/fonts/**/*.{ttf,woff,woff2,eof,svg}'],
    vod:[paths.app+paths.assets+'static/vod/*'],
    styles: [paths.app + paths.assets + 'static/style/**/*.{css,png}'],
    mock: [paths.mock + '**/*'],
    html: [paths.app + paths.html + '**/*']
};
var build = {
    scripts:
    {
    	//assets:paths.assets + 'js',
    	static:paths.dist + paths.assets + 'js/static'
    },
    styles: paths.dist +paths.assets + 'style',
    images: paths.dist +paths.assets + 'img',
    vod: paths.dist + paths.assets + 'vod',
    fonts: paths.dist + paths.assets + 'fonts',
    dist: paths.dist,
    mock: paths.dist + paths.mock
};

gulp.task('images',['clean'], function() {
    return gulp.src(source.images)
        .pipe(gulp.dest(build.images))
})
gulp.task('fonts',['clean'],  function() {
    return gulp.src(source.fonts)
        .pipe(gulp.dest(build.fonts))
})
gulp.task('styles', ['clean'], function() {
    return gulp.src(source.styles)
        .pipe(gulp.dest(build.styles))
})
gulp.task('vod', ['clean'],function() {
    return gulp.src(source.vod)
        .pipe(gulp.dest(build.vod))
})
gulp.task('static', ['clean'], function() {
    return gulp.src(source.scripts.static)
        .pipe(gulp.dest(build.scripts.static))
})
gulp.task('mock',['clean'],  function() {
    return gulp.src(source.mock)
        .pipe(gulp.dest(build.mock))
})
gulp.task('html', function() {
    return gulp.src(source.html)
        .pipe(gulp.dest(build.dist))
})
// Remove all files from dist folder
gulp.task('clean',function(){
    let promise = new Promise(function(resolve, reject){
        del([
            paths.dist+paths.assets,
            paths.dist+paths.mock,
            paths.dist+paths.html,
            paths.dist+'index.html',
            paths.dist+'favicon.ico'
            ]).then(function() {
                resolve();
            });
    })
    return promise;
})

// Serve files with auto reaload
gulp.task('browsersync', function() {
    log('Starting BrowserSync..');


    var devMiddleware=webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        stats: {
            colors: true
        }
    })
    var middlewares = [historyApiFallback()];

    if (!isProduction) {
        middlewares = middlewares.concat([
            devMiddleware,
            webpackHotMiddleware(bundler,{
                reload:true
            })
        ])
    }

    browserSync({
        notify: false,
        server: {
            baseDir: paths.dist,
            middleware: middlewares
        },
        files: [source.scripts.app]
    });

});

gulp.task("webpack:build", function(callback) {
	webpack(webpackConfig, function(err, stats) {
	        if(err) throw new gutil.PluginError("webpack:build", err);
	        gutil.log("[webpack:build]", stats.toString({
	            colors: true
	        }));
	    });
	callback();
});

gulp.task("build", ["webpack:build"]);

gulp.task('default', ['build', 'images','vod', 'fonts', 'styles', 'static', 'mock', 'html'], function() {
  // 将你的默认的任务代码放在这
});
gulp.task('dev',['clean','build', 'images','vod', 'fonts', 'styles', 'static', 'mock', 'html'],function(){
    log('Starting BrowserSync..');
    var devMiddleware=webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        stats: {
            colors: true
        }
    })
    var middlewares = [historyApiFallback()];

    if (!isProduction) {
        middlewares = middlewares.concat([
            devMiddleware,
            webpackHotMiddleware(bundler,{
                reload:true
            })
        ])
    }
    browserSync({
        notify: false,
        server: {
            baseDir: paths.dist,
            middleware: middlewares
        },
        files: [source.scripts.app]
    });
})
// log to console using
function log(msg) {
    $.util.log($.util.colors.blue(msg));
}
