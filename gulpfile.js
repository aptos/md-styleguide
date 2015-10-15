var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  refresh = require('gulp-livereload'),
  lrserver = require('tiny-lr')(),
  webserver = require('gulp-webserver'),
  livereload = require('gulp-livereload');

gulp.task('sass', function(){
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

gulp.task('docs-js', function() {
  return gulp.src([
    'js/**/*.js'
    ])
  .pipe(concat('docs.js'))
  // .pipe(gulpif(!argv.dev, uglify()))
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
gulp.task('build', function() {
  gulp.run('docs-demo-scripts','docs-js', 'docs-css', 'sass');
});

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['docs-demo-scripts','docs-js']);
  gulp.watch('scss/**/*.scss', ['sass']);
});

// IMPORTANT!!
// the serve config is *not* working correctly (yet)
// recommend running 'gulp watch' in one terminal and 'live-server' in a second.
//
// gulp.task('serve', function() {
//   gulp.src()
//     .pipe(webserver({
//       livereload: true,
//       directoryListing: false,
//       open: true
//     }));
// });
//
// gulp.task('default', function () {
//   gulp.run('build', 'serve', 'watch');
// });