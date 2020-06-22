// 导入gulp模块
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
// 利用gulp.task创建任务
    // 1.任务的名称
    // 2.任务的回调函数
gulp.task('first', done => {
    console.log('人生中的第一个gulp任务执行了');
    // 使用gulp.src()获取要处理的文件
    gulp.src('./src/css/base.css')
        .pipe(gulp.dest('dist/css'));
    done();
});

// html文件中代码的压缩操作
gulp.task('htmlmin', done => {
    gulp.src('./src/*.html')
        // 抽取html文件中的公共代码
        .pipe(fileinclude())

        // 压缩html文件中的代码
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
    done();
});


// less语法转换 + css文件压缩
gulp.task('cssmin', done => { 
    // 同时选择css目录下的所有less文件和css文件
    gulp.src(['./src/css/*.less', './src/css/*.css']) 
        // 将less语法转换为css语法
        .pipe(less())
        // 将css代码进行压缩
        .pipe(csso())
        .pipe(gulp.dest('dist/css'))
    done()
});

// 复制文件夹
gulp.task('copy', done => {
    gulp.src('./src/js/*')
        .pipe(gulp.dest('dist/js'));
    
    gulp.src('./src/img/*')
        .pipe(gulp.dest('dist/img'));

    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('dist/fonts'));

    gulp.src('./src/upload/*')
        .pipe(gulp.dest('dist/upload'));
    done()
});

// ES6代码转换  + 代码压缩
gulp.task('jsmin', done => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            // 它可以判断当前代码的运行环境，将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
    
        // js代码压缩
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
    done()
});

// 构建任务

// 按顺序执行多个任务
gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin', 'copy'), done => {
    done();
});

// 或者写成并行执行多个任务，如下形式：
gulp.task('default', gulp.parallel('htmlmin', 'cssmin', 'jsmin', 'copy'), done => {
    done();
});