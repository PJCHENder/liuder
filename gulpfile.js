var gulp = require('gulp');
// var webserver = require('gulp-webserver');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./vendor/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
})

gulp.task('watch', function(){
    gulp.watch('./vendor/*.sass', ['sass'])
})

/*
gulp.task('webserver',function(){
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
    }));
});
*/

gulp.task('default', ['sass', 'watch']);