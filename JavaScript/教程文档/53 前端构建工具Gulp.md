### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.第三方模块Gulp
- Gulp：基于node平台开发的**前端构建工具**。
- 前端构建工具：**将机械化操作编写成任务，想要执行机械化操作时，执行一个命令任务就可以自动执行了**。用机器代替手工，提高开发效率。

#### 2.Gulp能做什么
- 项目上线，将HTML、CSS、JS文件压缩合并；
- 语法转换(ES6、less...)；
- 公共文件抽离；
- 修改文件浏览器自动刷新；

#### 3.Gulp使用
- 使用npm install gulp命令来下载gulp库文件。
- 在项目根目录下建立gulpfile.js文件。
- 重构项目的文件夹结构，src目录下放置源代码文件，dist目录下放置构建后文件。
- 在gulpfile.js文件中编写任务。
- 在命令行工具中(**必须先安装gulp-cli即npm install gulp-cli -g**)执行gulp任务(执行命令gulp 任务名称)。

##### 3.1 Gulp中提供的方法
- gulp.src():获取任务要处理的文件；
- gulp.dest():输出文件；
- gulp.task():建立gulp任务；
- gulp.watch():监控文件的变化；
    ```javascript
    // 导入gulp模块
    const gulp = require('gulp');

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

    // 命令行中运行gulp first，结果如下：
    E:\前端开发\JavaScript\练习代码\前端构建工具Gulp\gulp-demo>gulp first
    [11:01:45] Using gulpfile E:\前端开发\JavaScript\练习代码\前端构建工具Gulp\gulp-demo\gulpfile.js
    [11:01:45] Starting 'first'...
    人生中的第一个gulp任务执行了
    [11:01:46] Finished 'first' after 21 ms
    ```

##### 3.2 Gulp插件
- gulp-htmlmin:压缩html文件
    - gulp-htmlmin安装命令：npm install gulp-htmlmin
- gulp-csso:压缩css文件
    - gulp-csso安装命令：npm install gulp-csso
- gulp-babel:JavaScript语法转换(ES6转ES5)
    - gulp-babel安装命令：npm install gulp-babel @babel/core @babel/preset-env
- gulp-less:less语法转换
    - gulp-less安装命令：npm install gulp-less
- gulp-uglify:压缩混淆JavaScript
    - gulp-uglify安装命令：npm install gulp-uglify
- gulp-file-include:公众文件包含
    - gulp-file-include安装命令：npm install gulp-file-include
- browsersync:浏览器实时同步
    - browsersync安装命令：npm install browsersync
    ```javascript
    // 导入gulp模块
    const gulp = require('gulp');
    // 导入gulp插件gulp-htmlmin
    const htmlmin = require('gulp-htmlmin');
    // 导入gulp插件gulp-file-include
    const fileinclude = require('gulp-file-include');

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
    // 结果
    E:\前端开发\JavaScript\练习代码\前端构建工具Gulp\gulp-demo>gulp htmlmin
    [11:27:12] Using gulpfile E:\前端开发\JavaScript\练习代码\前端构建工具Gulp\gulp-demo\gulpfile.js
    [11:27:12] Starting 'htmlmin'...
    [11:27:12] Finished 'htmlmin' after 25 ms

    <!-- less语法转换 + css代码压缩 -->
    // 导入gulp模块
    const gulp = require('gulp');
    const less = require('gulp-less');
    const csso = require('gulp-csso');

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

    // 结果
    E:\前端开发\JavaScript\练习代码\前端构建工具Gulp\gulp-demo>gulp cssmin
    [11:46:19] Using gulpfile E:\前端开发\JavaScript\练习代码\前端构建工具Gulp\gulp-demo\gulpfile.js
    [11:46:19] Starting 'cssmin'...
    [11:46:19] Finished 'cssmin' after 48 ms


    <!-- Es6代码转换 + JS代码压缩 -->
    const gulp = require('gulp');
    const babel = require('gulp-babel');
    const uglify = require('gulp-uglify');

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


    // 构建任务

    // 按顺序执行多个任务
    <!-- 当任务名称为default时，在命令行运行gulp和运行gulp default效果是一样的!!! -->
    gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin', 'copy'), done => {
        done();
    });

    // 或者写成并行执行多个任务，如下形式：
    gulp.task('default', gulp.parallel('htmlmin', 'cssmin', 'jsmin', 'copy'), done => {
        done();
    });


    // 结果
    E:\前端开发\JavaScript\练习代码\前端构建工具Gulp\gulp-demo>gulp default
    [16:17:59] Using gulpfile E:\前端开发\JavaScript\练习代码\前端构建工具Gulp\gulp-demo\gulpfile.js
    [16:17:59] Starting 'default'...
    [16:17:59] Starting 'htmlmin'...
    [16:17:59] Starting 'cssmin'...
    [16:17:59] Starting 'jsmin'...
    [16:17:59] Starting 'copy'...
    [16:17:59] Finished 'htmlmin' after 26 ms
    [16:17:59] Finished 'cssmin' after 30 ms
    [16:17:59] Finished 'jsmin' after 34 ms
    [16:17:59] Finished 'copy' after 41 ms
    [16:17:59] Finished 'default' after 47 ms
    ```