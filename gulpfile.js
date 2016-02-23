var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var build = require('gulp-build');

gulp.task('default', function () {
    gulp.src(['views/*.js'])
        .pipe(jshint.reporter('jshint-stylish'));
});
 
gulp.task('build', function() {
  gulp.src('views/*.js')
      .pipe(build({ GA_ID: '123456' }))
      .pipe(gulp.dest('dist'))
});