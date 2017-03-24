const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');


gulp.task('js', function(){
  gulp.src(['./public/js/app.js', './public/js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));
});


// Compile scss into css files
gulp.task('css', function() {
  gulp.src([
    './public/css/reset.css',
    './public/css/remington/remington-top.css',
    './public/css/remington/remington-middle.css',
    './public/css/remington/remington-bottom.css',
    './public/css/remington/uppernav.css',
    './public/css/remington/bottomnav.css',
    './public/css/rifles/rifles.css',
    './public/css/rifles/modernrifles.css',
    './public/css/**/*.scss'
    ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./public/js/**/*.js', ['js']);
  gulp.watch('./public/css/**/*.{css, scss}', ['css']);
});


gulp.task('default', ['js', 'css', 'watch']);
