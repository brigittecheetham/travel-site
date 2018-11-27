var gulp = require('gulp');
var watch = require('gulp-watch');
var browsersync = require('browser-sync').create();

gulp.task('watch', function() {
	browsersync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function() {
		//gulp.start('styles'); original 
		//after browser-sync:
		gulp.start('cssInject');
	});
});

//cssInject is going to do 2 things, 
//1.  on every css change it is going to create the new css file in temp
//2.  inject the changed file into the site
//the 3rd parameter is an array of dependency tasks that has to complete before the callback is executed
gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browsersync.stream())
});
