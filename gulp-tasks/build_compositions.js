var gulp = require('gulp'),
tap = require('gulp-tap'),
path = require('path'),
compositions = [];

gulp.task('collect-compositions', function () {
  compositions = [];

  return gulp.src('compositions/*.html')
  .pipe(tap(function (file, t) {
    var filename = path.basename(file.path);
    var name = path.basename(file.path, '.html');
    compositions.push({
      "name": name,
      "outputPath": "compositions/" + filename,
      "url": "/Compositions/" + name,
      "label": name
    })
  }));
});

gulp.task('write-compositions', ['collect-compositions'], function () {
  var js = "DocsApp.constant('COMPOSITIONS'," + JSON.stringify(compositions, null, 2) + ");"
  return require('fs').writeFileSync('js/compositions-data.js', js);
});