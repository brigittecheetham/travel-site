var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var browsersync = require('browser-sync').create();

gulp.task('default', function() {
	console.log('hooray, my first gulp task and i understand what I have done!');
});

gulp.task('html', function() {
	console.log('imagine something useful done to html');
});



require('./app/gulp/tasks/styles');
require('./app/gulp/tasks/watch');