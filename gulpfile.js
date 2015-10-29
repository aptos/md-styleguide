var gulp = require('gulp'),
require_dir = require('require-dir'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
tap = require('gulp-tap'),
util = require('util'),
refresh = require('gulp-livereload'),
lrserver = require('tiny-lr')(),
webserver = require('gulp-webserver'),
path = require('path');

require_dir('./gulp-tasks');

gulp.task('sass', ['write-partner-logos', 'write-partner-logos-demo'], function(){
  gulp.src('./scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist'))
  .pipe(refresh(lrserver));
});

gulp.task('docs-demo-scripts', function() {
  return gulp.src('demo-partials/**/*.js')
  .pipe(concat('docs-demo-scripts.js'))
  .pipe(gulp.dest('./'))
  .pipe(refresh(lrserver));
});

gulp.task('docs-js', ['write-compositions'], function() {
  return gulp.src([
    'js/**/*.js'
    ])
  .pipe(concat('docs.js'))
  .pipe(gulp.dest('./'))
  .pipe(refresh(lrserver));
});

gulp.task('docs-css', function() {
  return gulp.src([
    'themes/*.css',
    'css/*.css',
    'demo-partials/**/*.css'
    ])
  .pipe(concat('docs.css'))
  .pipe(gulp.dest('./'))
  .pipe(refresh(lrserver));
});

//Convenience task for running a one-off build
gulp.task('build', ['docs-demo-scripts','docs-js', 'docs-css', 'sass']);

gulp.task('watch', function() {
  gulp.watch('compositions/*.html', ['docs-js'])
  gulp.watch('js/**/*.js', ['docs-demo-scripts','docs-js']);
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['build', 'watch']);

// IMPORTANT!!
// the serve config is *not* working correctly (yet)
// recommend running 'gulp watch' in one terminal and 'live-server' in a second.
//
// gulp.task('serve', function() {
//   gulp.src('./')
//     .pipe(webserver({
//       livereload: true,
//       directoryListing: false,
//       open: true
//     }));
// });

// gulp.task('default', function () {
//   gulp.run('build', 'serve', 'watch');
// });