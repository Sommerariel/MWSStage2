const gulp = require('gulp');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const del = require('del');
var imageResize = require('gulp-image-resize');


gulp.task('img-build', function() {
  gulp.src('/img/*.{.jpg}')
    .pipe(imageResize({
      quality: 0.5,
      width: 600
    }))
    .pipe(gulp.dest('img-responsive'));
});

gulp.task('default', () =>
    gulp.src('css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
);
