var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connetct.server({
        port: 8888
    });
});

gulp.task('default', ['connect']);
