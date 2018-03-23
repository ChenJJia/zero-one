var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
            baseDir:'./',
            index: 'html/home.html'
        },
        port: 8020
    });
});

gulp.task('default',['browser-sync','watch']);

gulp.task('watch',function(){
    gulp.watch(["css/*.css","html/*.html","js/*.js"]).on('change',reload);
})