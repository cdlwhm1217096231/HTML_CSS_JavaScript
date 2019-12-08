- Emmet语法的前身是Zen coding，它使用缩写来提高html/css的编写速度，Vscode内部已经集成该语法。
#### 1.快速生成HTML结构语法
- 生成标签：直接输入标签名按下tab键即可。例如div按下tab键，就可以生成\<div>\</div>
- 如果想要生成多个相同标签，加上\*就可以了。例如div*3就可以生成3个div
- 如果有父子级关系的标签，可以用>。例如ul>li就可以了
- 如果有兄弟关系的标签，用+就可以了。例如 div+p
- 如果生成带有类名或id名字的，直接写.demo或#two tab键就可以了
- 如果生成的div类名是有顺序的，可以用自增符号$，从1开始排序。
- 如果想要在生成的标签内部写内容可以用{}表示
    ```
      <!-- div + tab键 -->
        <div></div>
        <table></table>
        <!-- div*4 -->
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <!-- ul>li -->
        <ul>
            <li></li>
        </ul>
        <!-- div+p -->
        <div></div>
        <p></p>
        <!-- .nav -->
        <div class="nav"></div>
        <!-- #banner -->
        <div id="banner"></div>
        <!-- p.one -->
        <p class="one"></p>
        <!-- span#gray -->
        <span id="gray"></span>
        <!-- ul>li#two -->
        <ul>
            <li id="two"></li>
        </ul>
        <!-- .demo$*5 -->
        <div class="demo1"></div>
        <div class="demo2"></div>
        <div class="demo3"></div>
        <div class="demo4"></div>
        <div class="demo5"></div>
        <!-- 我们想生成的标签里面默认显示几个文字 -->
        <div>pink老师不是gay</div>
        <!-- div{我是你爸爸，哈哈}*5 -->
        <div>我是你爸爸，哈哈</div>
        <div>我是你爸爸，哈哈</div>
        <div>我是你爸爸，哈哈</div>
        <div>我是你爸爸，哈哈</div>
        <div>我是你爸爸，哈哈</div>
        <!-- div{$}*5 -->
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    ```
#### 2.快速生成CSS样式语法
- CSS基本采用简写形式即可，如下所示：
    - 例如w200，按下tab键就可以生成width: 200px;
    - 例如lh26，按下tab键就可以生成line-height: 26px;
#### 3.快速格式化代码
- Vscode中快速格式化代码快捷键：shift + alt + f
- **也可以设置当前保存页面的时候自动格式化代码**：
    - 文件->首选项->设置;
    - 搜索emmet.include;
    - 在settings.json下的**工作区设置**中添加下面的语句：
    ```
    "editor.formatOnType": true,
    "editor.formatOnSave": true
    ```