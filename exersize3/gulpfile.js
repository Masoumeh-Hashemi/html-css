var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function(){
    return gulp.src('styles.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('exersize2'))
      
  });
 

  gulp.task('watch', function() {
    gulp.watch('styles.scss', ['sass']); 
  });