var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

module.exports = function(){
	gulp.task('sass', function () {
    return gulp.src('_assets/scss/main.scss')
        .pipe(sass())
        .on('error', gutil.log.bind(gutil, 'Sass Error'))
        .pipe(gulp.dest('./build/css/'));	
	});
}