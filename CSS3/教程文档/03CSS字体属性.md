- CSS Fonts(字体)属性用于定义字体系列、大小、粗细、文字样式(如斜体)等。
#### 1. 字体系列
- CSS使用font-family属性定义文本的字体系列。
    ```
    p {
        font-family: "宋体";
    }
    div {
        font-family: Arial, "Microsoft YaHei";
    }
    ```
- 各种字体之间必须使用英文状态下的逗号隔开；
- 一般情况下，如果有空格隔开的多个单词组成的字体，加引号包围。
- 尽量使用系统默认自带的字体，保证在任何用户的浏览器中都能正确显示。
- 最常见的几个字体:
    ```
    body {
        font-family: "Microsoft YaHei", tahoma, arial, "Hiragino Sans GB";
    }
    ```
#### 2.字号大小
- CSS使用**font-size**属性来定义字体大小。
    ```
    p {
        font-size: 20px;
    }
    ```
- px(像素)大小是网页中最常用的单位；
- 谷歌浏览器默认的字体大小是16px；
- 不同的浏览器可能默认显示的字号大小不一样，我们尽量给一个明确值大小，不要默认大小；
- 可以给body指定整个页面文字的大小。标题标签比较特殊，需要单独指定文字大小。
#### 3.字体粗细
- CSS使用**font-weight**属性设置文本字体的粗细。
    ```
    p {
        font-weight: bold;
    }
    ```
![字体粗细属性值.png](https://upload-images.jianshu.io/upload_images/13407176-8d156c6d5568e2b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 学会让加粗标签(例如h和strong)不加粗，或者其他标签加粗；
- 实际开发中，**更喜欢使用数字表示粗细**；
#### 4.文字样式
- CSS使用**font-style**属性设置文本的风格。
    ```
    p {
        font-style: normal;
    }
    ```
![文字样式.png](https://upload-images.jianshu.io/upload_images/13407176-e79a38c76642aac8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **注意：平时很少给文字加斜体，反而要给斜体标签(em、i)改成不倾斜字体**。
#### 5.字体复合属性
- 字体属性可以把以上文字样式综合来写，这样可以节约代码。
    ```
    body {
        font: font-style font-weight font-size/line-height font-family;
    }
    ```
- 使用font属性，必须按上面语法格式中的顺序来写，**不能更换顺序**，并且各个属性间以**空格**隔开。
- 不需要设置的属性可以省略(取默认值)，但**必须保留font-size和font-family属性**，否则font属性将不起作用。
#### 6.字体属性总结
![字体属性总结.png](https://upload-images.jianshu.io/upload_images/13407176-57a5dbfc91d2bf04.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)