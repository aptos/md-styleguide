var gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  gulpif = require('gulp-if'),
  argv = require('minimist')(process.argv.slice(2)),
  webserver = require('gulp-webserver'),
  livereload = require('gulp-livereload'),
  paths = {
    scripts: ['**/*.js'],
    css: '**/*.css',
    scss: ['**/**.scss']
  };

gulp.task('docs-demo-scripts', function() {
  return gulp.src('demo-partials/**/*.js')
  .pipe(concat('docs-demo-scripts.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('docs-js', function() {
  return gulp.src([
    'js/**/*.js'
    ])
  .pipe(concat('docs.js'))
  // .pipe(gulpif(!argv.dev, uglify()))
  .pipe(gulp.dest('./'));
});

gulp.task('docs-css', function() {
  return gulp.src([
    'themes/*.css',
    'css/*.css',
    'demo-partials/**/*.css'
    ])
  .pipe(concat('docs.css'))
  .pipe(gulp.dest('./'));
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.scripts, ['docs-demo-scripts','docs-js','js']);
  gulp.watch(paths.css, ['docs-css']);
  gulp.watch(paths.scss, ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['docs-demo-scripts','docs-js', 'docs-css', 'sass']);