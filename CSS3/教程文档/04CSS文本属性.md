- CSS Text(文本)属性可以定义文本的**外观**，比如文本的颜色、对齐文本、装饰文本、文本缩进、行间距等。
#### 1.文本颜色color
- **color**属性用于定义文本的颜色。
- 语法规范：
    ```
    div {
        color: red;
    }
    ```
![三种颜色表示方式.png](https://upload-images.jianshu.io/upload_images/13407176-b600c8b50cd0a803.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **开发在最常用的是十六进制表示颜色**！！！
#### 2.文本对齐text-align
- **text-align**属性用于设置元素内文本内容的**水平对齐方式**。
- 语法规范：
    ```
    div {
        text-align: center;
    }
    ```
![文本对齐方式](https://upload-images.jianshu.io/upload_images/13407176-a956ad029db21222.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 3.文本装饰text-decoration
- **text-decoration**属性规定添加到文本的修饰。可以给文本添加下划线、删除线、上划线等。
- 语法规范：
    ```
    div {
        text-decoration: underline;
    }
    ```
![装饰文本属性值.png](https://upload-images.jianshu.io/upload_images/13407176-38605a74e9a5d337.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **记住如何添加下划线、如何删除下划线，其余了解即可**。
#### 4.文本缩进text-indent
- **text-indent**属性用来指定文本的第一行的缩进，通常是将**段落的首行缩进**。
- 语法规范
    ```
    div {
        text-indent: 10px;
    }
    ```
- 通过设置该属性，所有元素的第一行都可以缩进一个给定的长度，甚至该长度可以是负值。
    ```
    p {
        text-indent: 2em;
    }
    ```
- **em**是一个相对单位，就是当前元素(font-size)**1个文字的大小**，如果当前元素没有设置大小，则会按照父元素的1个文字大小。
#### 5.行间距line-height
- **line-height**属性用于设置行间的距离(行高)，可以控制文字行与行之间的距离。
- 语法规范：
    ```
    p {
        line-height: 26px;
    }
    ```
![行间距定义.png](https://upload-images.jianshu.io/upload_images/13407176-a183536e57b9715e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 行间距测量工具及方法：
    - 测量工具：FSCapture
    - 测量方法：屏幕标尺从上一行的下间距测量到下一行的下间距之间的距离
#### 6.文本属性总结
![文本属性总结.png](https://upload-images.jianshu.io/upload_images/13407176-c1334954f062c803.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
