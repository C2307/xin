// 漂浮文本代码
window.onload = function () {
    //获取元素
    var div1 = document.getElementById('div1');
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    var gox = 1;
    var goy = 1;
    var a=0;
    //广告漂浮
    function move() {
        var x = div1.offsetLeft;
        var y = div1.offsetTop;
        if (x > w - 200 || x < 0) gox = -gox;
        div1.style.left = x + (5 * gox) + 'px';
        if (y > h - 80 || y < 0) goy = -goy;
        div1.style.top = y + (5 * goy) + 'px';
    }
    //漂浮定时器
    var timer = setInterval(move, 25);
    //移入移出时广告的浮动
    div1.onmouseover = function () {
        clearInterval(timer);
    }
    div1.onmouseout = function () {
        timer = setInterval(move, 25);
    }
}
