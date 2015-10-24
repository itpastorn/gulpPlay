var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('default', function() {
    gutil.log('Loggar detta\n', 'Och detta!', gutil.colors.magenta('123'));
    gutil.beep();
});

