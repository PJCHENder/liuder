const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./assets/*.sass", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./assets/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
        .pipe(browserSync.stream());
});

//	Create CSS AutoPrefix

gulp.task('auto_prefix', function(){
    gulp.src('./css/*.css')
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
});


gulp.task('default', ['serve','auto_prefix']);

