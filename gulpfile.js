const gulp = require('gulp'),
      sass = require('gulp-sass');

gulp.task('styles', () => {
    //compile the scss files as Sass and store it in css folder
    return gulp.src('sass/styles.scss')
      .pipe(sass())
      .pipe(gulp.dest('./css'));
});

//compile sass files whenever there is change in scss file
gulp.task('watch', () => {
     gulp.watch('./sass/**/*.scss', ['styles'])
});

gulp.task('default', ['styles']);