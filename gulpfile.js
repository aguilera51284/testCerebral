var gulp = require('gulp'),
	webpack = require('webpack-stream'),
	sourcemaps = require('gulp-sourcemaps'),
	duration = require('gulp-duration'),
	rename = require('gulp-rename');



/**
 * Webpack Task
 */
gulp.task('webpack', function() {
	return gulp.src('./src/app.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./public/js/'));
});

/**
 * TASKS
 */
gulp.task('default', ['webpack']);
