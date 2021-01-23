
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    // window.location.href="移动端url";
    //  alert("mobile");
    //判断访问环境是 移动端 则加载以下样式
    //  setStyle(['2.css']);

    !function (n) {
        var e = n.document,
            t = e.documentElement,
            i = 750,
            d = i / 100,
            o = "orientationchange" in n ? "orientationchange" : "resize",
            a = function () {
                var n = t.clientWidth || 320; n > 750 && (n = 750);
                t.style.fontSize = n / d + "px"
                console.log(n / d + 'px');
            };
        e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
    }(window);
}