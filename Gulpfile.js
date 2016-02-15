var path = require('path');
var gulp = require('gulp');
var merge = require('merge-stream');
var babelify = require("babelify");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');
var connect = require('gulp-connect');
var liveReload = require('gulp-livereload');

gulp.task('default', ['clean', 'build', 'serve']);
gulp.task('build', ['clean', 'browserify', 'copy-js', 'copy-html', 'copy-index']);

gulp.task('clean', function() {
  return del('./dist');
});

var commonJsModules = [
  'dashboard.cjs',
  'lib/logger.cjs'
];

var jsFiles = [
  './src/**/*.js',
  './node_modules/angular/angular.js',
  './node_modules/angular-route/angular-route.js',
  './node_modules/angular-toastr/dist/angular-toastr.js',
  '!./src/*test*/**/*.js'
].concat(commonJsModules.map(function(cjs){
  return `!./src/${cjs}/**/*.js`;
} ));

var htmlFiles = [
  './src/**/*.html',
  '!./src/layout/index.html'
];

gulp.task('browserify', ['clean'], function() {
  return merge(commonJsModules.map(function(cjs) {
    return browserify({
      entries: [ `./src/${cjs}/index.js` ],
      external: 'angular'
    })
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(source(`${cjs}.js`))
    .pipe(gulp.dest('./dist/js'))
    .pipe(liveReload());
  }));
});

gulp.task('copy-js', ['clean'], function () {
  return gulp
    .src(jsFiles)
    .pipe(gulp.dest('./dist/js'))
    .pipe(liveReload());
});

gulp.task('copy-html', ['clean'], function () {
  return gulp
    .src(htmlFiles)
    .pipe(gulp.dest('./dist/views'))
    .pipe(liveReload());
});

gulp.task('copy-index', ['clean'], function () {
  return gulp
    .src([
      './src/layout/index.html'
    ])
    .pipe(gulp.dest('./dist'))
    .pipe(liveReload());
});

gulp.task('watch', ['build'], function() {
  liveReload.listen();
  gulp.watch(jsFiles, ['copy-js'])
  gulp.watch(commonJsModules.map((cjs) => { return `!./src/${cjs}/**/*.js` }), ['browserify'])
  gulp.watch(htmlFiles.concat('./src/layout/index.html'), ['copy-html'])
});

gulp.task('serve', ['build'], function() {
  return connect.server({
    root: 'dist'
  });
});
