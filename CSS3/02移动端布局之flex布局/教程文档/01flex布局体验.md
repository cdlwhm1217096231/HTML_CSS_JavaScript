### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.传统布局与flex布局
- **传统布局**：
    - 兼容性好
    - 布局繁琐
    - 局限性，不能在移动端很好的布局
- **flex布局**：
    - 操作方便，布局极为简单，移动端应用很广泛
    - PC端浏览器支持情况较差
    - IE11或更低版本不支持或部分支持
- **建议**：
    - 如果是PC端页面布局，还是使用传统的页面布局
    - 如果是移动端或者不考虑兼容性问题的PC端页面布局，还是使用flex弹性布局
#### 2.flex初体验
![flex初体验.png](https://upload-images.jianshu.io/upload_images/13407176-90cf64bc91459a64.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div { 
            display: flex;
            width: 80%;
            height: 300px;
            background-color: pink;
            justify-content: space-around;
        }

        div span {
            /* width: 150px; */
            height: 100px;
            background-color: purple;
            margin-right: 5px;
            flex: 1;
        }
    </style>
</head>
<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>
</html>
```
#### 3.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/CSS3/01%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B8%83%E5%B1%80%E5%9F%BA%E7%A1%80%E4%B9%8B%E6%B5%81%E5%BC%8F%E5%B8%83%E5%B1%80)