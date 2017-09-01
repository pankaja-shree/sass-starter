const gulp = require('gulp'),
      sass = require('gulp-sass');

gulp.task('styles', () => {
    //compile the scss files as Sass and store it in css folder
    return gulp.src('sass/styles.scss')
      .pipe(sass())
      .pipe(gulp.dest('./css'));
});

