var gulp = require('gulp');
var del = require('del');
var connect = require('gulp-connect');
var liveReload = require('gulp-livereload');

gulp.task('default', ['copy-js', 'copy-html', 'serve', 'watch']);

gulp.task('clean', function() {
  return del('./dist');
});

var jsFiles = [
  './src/**/*.js',
  './node_modules/angular/angular.js',
  './node_modules/angular-route/angular-route.js',
  './node_modules/angular-toastr/dist/angular-toastr.js'
];

var htmlFiles = [
  './src/**/*.html',
  '!./src/layout/index.html'
];

gulp.task('copy-js', function () {
  gulp
    .src(jsFiles)
    .pipe(gulp.dest('./dist/js'))
    .pipe(liveReload());
});

gulp.task('copy-html', function () {
  gulp
    .src(htmlFiles)
    .pipe(gulp.dest('./dist/views'));

  gulp
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
    connect.server({
      root: 'dist'
    });
});
