var gulp        = require('gulp');
var minifyCss   = require('gulp-minify-css');
var sass        = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var notify      = require('gulp-notify');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var paths = {
    html:['index.html'],
    css:['main.scss']
};

gulp.task('css', function(){
    return gulp.src(paths.css)
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(minifyCss())
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// HTML
// ///////////////////////////////////////////////
gulp.task('html', function(){
    gulp.src(paths.html)
        .pipe(reload({stream:true}));
});

// ////////////////////////////////////////////////
// Browser-Sync
// // /////////////////////////////////////////////
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('watcher',function(){
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.html, ['html']);
});

gulp.task('default', ['watcher', 'browserSync']);