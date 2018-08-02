var gulp=require('gulp');

var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var pug = require('gulp-pug');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

// Assign gulp a default task
gulp.task('default', function() {
	console.log("Welcome to Gulp!");
});

// every time we compile our code we want the resulting CSS
// to be autoprefixed and minified:
gulp.task('css', function() {
	gulp.src('source/stylus/main.styl')
		.pipe(stylus({compress: false, paths: ['source/stylus']}))
		.pipe(autoprefixer())
		.pipe(minifyCSS())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('build'))
});