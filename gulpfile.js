const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

gulp.task('default', () =>
    gulp.src('css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
);
