var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');
var connect = require('gulp-connect');
var liveReload = require('gulp-livereload');

gulp.task('default', ['copy-js', 'copy-html', 'serve', 'watch']);

gulp.task('clean', function() {
  return del('./dist');
});

var jsFiles = [
  './src/**/*.js',
  '!./src/*\.cjs/**/*.js',
  './node_modules/angular/angular.js',
  './node_modules/angular-route/angular-route.js',
  './node_modules/angular-toastr/dist/angular-toastr.js'
];

var htmlFiles = [
  './src/**/*.html',
  '!./src/layout/index.html'
];

gulp.task('browserify', function() {
  return browserify({ entries: ['./src/dashboard.cjs/index.js'], external: 'angular', })
    .bundle()
    .pipe(source('dashboard.cjs.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('copy-js', function () {
  return gulp
    .src(jsFiles)
    .pipe(gulp.dest('./dist/js'))
    .pipe(liveReload());
});

gulp.task('copy-html', function () {
  return gulp
    .src(htmlFiles)
    .pipe(gulp.dest('./dist/views'));
});

gulp.task('copy-index', function () {
  return gulp
    .src([
      './src/layout/index.html'
    ])
    .pipe(gulp.dest('./dist'))
    .pipe(liveReload());
});

gulp.task('watch', function() {
  liveReload.listen();
  gulp.watch(jsFiles, ['copy-js']);
  gulp.watch(htmlFiles.concat('./src/layout/index.html'), ['copy-html']);
});

gulp.task('serve', function() {
    return connect.server({
      root: 'dist'
    });
});
