function animate(obj, target, callback){
    // 当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
    // 解决方法：让我们的元素只有一个定时器执行。即先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // 步长
        // 把步长值改为整数，不要出现小数
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target){
            // 停止动画本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面!!!
            if(callback) {
                callback(); // 调用函数
            }
        }

        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}