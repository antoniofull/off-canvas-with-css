var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer');
var transform = require('vinyl-transform');
var reactify = require('reactify');
var sourcemaps = require('gulp-sourcemaps');
var to5ify = require('6to5ify');
var babelify = require('babelify');

module.exports = function() {
	gulp.task('browserify', function(){
		browserify('./_assets/js/main.js', {debug: true})
		.transform(babelify)
		.bundle()
	    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
	    .pipe(source('main.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./build/js/'))
	});
}
