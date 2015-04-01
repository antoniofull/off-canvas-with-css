var gulp = require('./gulp')([
	'browserify',
	'sass',
	'jshint'
	// 'images'
]);

var path = {
	'js': ['./_assets/js/**/*.js', './_assets/js/**/*.jsx'],
	'css': './_assets/scss/**/*.scss'
};

// Watcher

gulp.task('watch', function(){
	gulp.watch(path.js, ['browserify']);
	gulp.watch(path.css, ['sass']);
});


// Tasks
gulp.task('default',['sass', 'browserify']);
gulp.task('build',['sass', 'browserify']);
gulp.task('default',['browserify','sass']);


