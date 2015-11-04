var gulp = require('gulp'),
tap = require('gulp-tap'),
util = require('util'),
path = require('path'),
partner_logos = [];

gulp.task('collect-partner-logos', function () {
  partner_logos = [];
  var count = 0
  console.info("Collect Partner Logos")
  return gulp.src('dist/assets/images/partner_logos/*-large.png')
  .pipe(tap(function (file, t) {
    var filename = path.basename(file.path);
    var name = path.basename(file.path, '-large.png');
    partner_logos.push(name);
    console.info(name)
  }));
});

gulp.task('write-partner-logos-demo', ['collect-partner-logos'], function () {
  var demo = '<div class="doc-demo-content doc-content">\n' +
  '<div style="z-index:1" class="layout-comumn flex">\n' +
  '<div class="doc-description">\n' +
  '<h1>Partner Vendor Logos</h1>\n' +
  '</div>\n' +
  '<section class="demo-container md-whiteframe-z1">\n' +
  '<md-grid-list md-cols-sm="1" md-cols-md="2" md-cols-gt-md="6" md-row-height-gt-md="1:1" md-row-height="4:3" md-gutter="8px" md-gutter-gt-sm="4px" class="gridListdemoBasicUsage">\n';

  partner_logos.forEach( function(name) {
    demo = demo +
    '<md-grid-tile md-rowspan="2" md-colspan="2" md-colspan-sm="1">\n' +
    '<div class="partner-logo contain ' + name + '-logo-large"></div>\n' +
    '<md-grid-tile-footer>\n' +
    '<h3>' + name + '-logo-large</h3></md-grid-tile-footer>\n' +
    '</md-grid-tile>\n' ;
  });

  return require('fs').writeFileSync('compositions/PartnerLogos.html', demo);

})

gulp.task('write-partner-logos', ['collect-partner-logos'], function () {
  var tmp = "// created by gulp\n";
  partner_logos.forEach( function(name) { tmp = tmp + "@include partner-logo('" + name + "');\n";} );
  return require('fs').writeFileSync('scss/womply/_partner_logos.scss', tmp);
});

