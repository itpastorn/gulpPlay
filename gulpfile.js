var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    gutil = require('gulp-util');

gulp.task('lint', function() {
    return gulp.src('*.js')
        .pipe(eslint({
            configFile: '.eslintrc'
        }))
        .pipe(eslint.format()) // Output till konsollen
        .pipe(eslint.failAfterError());
});
gulp.task('default', ['lint'], function () {
    gutil.log('Lint lyckades');
});

