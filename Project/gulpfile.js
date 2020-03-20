let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer')
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    del = require('del');

gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
            .pipe(sass({outputStyle: 'compressed'})) //expanded - compressed
            .pipe(rename({suffix : '.min'}))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 8 versions']
            }))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/lottie-web/build/player/lottie_light.js',
        'node_modules/lazy-line-painter/lib/lazy-line-painter-1.9.6.js',
        'node_modules/headhesive/dist/headhesive.js',
        'node_modules/swup/dist/swup.js',
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

gulp.task('style', function(){
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
    ])
    .pipe(concat('libs.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
})

gulp.task('html', function(){
    return gulp.src('app/*.html ')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src('app/js/*.js ')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('export', async function(){
    let buildHtml = gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));

    let buildCss = gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('dist/css'));

    let buildJs = gulp.src('app/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
    
    let buildFonts = gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));

    let buildImages = gulp.src('app/images/**/*.*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clean', async function(){
    del.sync('dist')
});

gulp.task('build', gulp.series('export', 'clean'));

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('js'));
})

gulp.task('default', gulp.parallel('style','script', 'sass', 'watch', 'browser-sync'))