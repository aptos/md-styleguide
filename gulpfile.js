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
    css: '**/*.css'
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
  .pipe(gulpif(!argv.dev, uglify()))
  .pipe(gulp.dest('./'));
});

gulp.task('docs-css', function() {
  return gulp.src([
    'themes/*.css',
    'css/*.css',
    'demo-partials/**/*.css'
    ])
  .pipe(concat('new_docs.css'))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.scripts, ['docs-demo-scripts','docs-js']);
  gulp.watch(paths.css, ['docs-css']);
});

gulp.task('default', ['scripts', 'css']);

gulp.task('serve', ['web-server', 'watch']);