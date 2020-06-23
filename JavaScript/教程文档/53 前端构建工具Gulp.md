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

#### 4.package.json文件

##### 4.1 node_modules文件夹的问题
- 问题1：文件夹以及文件过多、过碎，当我们将项目整体拷贝给别人时，传输的速度会很慢很慢。
- 问题2：复杂的模块依赖关系需要被记录，确保模块的版本和当前保持一致。否则，会导致当前项目运行报错。

##### 4.2 package.json文件的作用
- 项目的描述文件，记录了当前项目信息。例如项目名称、版本、作者、github地址、当前项目依赖了哪些第三方模块等。**使用npm init -y命令生成package.json文件**。 生成的package.json文件内容如下所示：
    ```javascript
    {
    "name": "description",
    "version": "1.0.0",
    "description": "",
    <!-- 主模块 -->
    "main": "index.js",
    <!-- 命令别名 -->
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "nodemon app.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
    }
    <!-- 记录项目的依赖模块 -->
    "dependencies": {
    "formidable": "^1.2.2",
    "mime": "^2.4.6"
    }
    ```
- **命令别名的使用**：当命令很长、很复杂时，直接输入整个命令容易出错。因此，使用npm run build简化命令nodemon app.js的运行。 
- **问题1的解决**：当项目复制给别人时，并不需要拷贝node_modules文件夹。只需要将项目中的package.json文件拷贝给别人就行，别人在命令行中输入npm install即可根据package.json文件安装项目所依赖的第三方模块，生成node_modules文件夹。

##### 4.3 项目依赖
- 在项目的开发阶段和线上运营阶段，都需要依赖的第三方模块，称为项目依赖。**安装时，使用npm install命令，这样会将项目依赖和开发依赖全部都安装好**。
- 使用**npm install 第三方模块名**命令下载的文件会默认被添加到package.json文件的dependencies字段中。
    ```
    {
        "dependencies": {
            "jquery": "^3.3.1"
        }
    }
    ```

##### 4.4 开发依赖
- 在项目的开发阶段需要依赖，线上运营阶段不需要依赖的第三方模块，称为开发依赖。**安装时，使用npm install --production命令，这样生成的node_modules文件夹中就不会有安装开发依赖**。
- **使用npm install 第三方模块名 --save-dev**命令将模块添加到package.json文件的devDependencies字段中。
    ```
    {
        "devDependencies": {
            "gulp": "^4.0.0"
        }
    }
    ```

##### 4.5 package-lock.json文件的作用
- **问题2的解决**：锁定模块的版本，确保再次下载时不会由于模块版本的不同而产生问题。
- 加快下载速度，因为该文件中已经记录了项目所依赖的第三方模块的树状结构和下载地址，重新安装时只需要下载即可，不需要做额外的工作。

#### 5.Node.js中模块的加载机制

##### 5.1 模块查找规则——当模块拥有路径，但没有后缀时
- (1).require()方法根据模块路径查找模块，如果是完整路径，直接引入模块。
    ```javascript
    require('./find.js');
    require('./find');
    ```
- (2).require()方法根据模块路径查找模块，如果是模块名后缀被省略。
    - a.如果模块后缀被省略，先在当前文件夹下找同名find.js文件，再找同名find文件夹。
    - b.如果找到了同名find文件夹，找文件夹中的index.js。
    - c.如果文件夹中没有index.js，就会去当前文件夹中的package.json文件中查找main选项中的入口文件。
    - d.如果要找的指定入口文件不存在或者没有指定入口文件就会报错，模块没有被找到。

##### 5.2 模块查找规则——当模块没有路径且没有后缀名时
- Node.js会假设它是系统模块。
    - a.如果有该模块就会去执行它；
    - b.如果没有就会去node_modules文件夹中去查找：首先，看是否有该名字的JS同名find文件。
    - c.如果没有JS同名find文件，再去看是否有该名字的同名find文件夹。如果文件夹中有index.js文件，则会执行index.js中的内容。
    - d.如果没有index.js文件，查看该文件夹中的package.json文件中的main选项确定模块入口文件。如果有该入口文件就执行它，否则就报错。
    ```javascript
    require('find')
    ```

#### 6.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)