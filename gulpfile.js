/**
 * Created by Артем on 16.02.2017.
 */
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csscomb = require('gulp-csscomb');
var cssmin = require('gulp-cssmin');
/////
gulp.task('auto', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 25 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

/////
gulp.task('styles', function() {
    return gulp.src('css/*.css')
        .pipe(csscomb())
        .pipe(gulp.dest('css/'));
});

////
gulp.task('min', function () {
    gulp.src('css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: 'style.min'}))
        .pipe(gulp.dest('css/'));
});