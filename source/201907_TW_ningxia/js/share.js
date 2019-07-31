$(function () {
    //menuBtn
    $(".menuBtn").click(function () {
        $("html,body").toggleClass("active");
    });
    $(".meunGroup li").click(function () {
        $("html,body").removeClass("active");
    });

    //gotop
    var $window = $(window);
    $window.on("scroll", function () {
        if ($window.scrollTop() > 0) {
            $(".gotop").addClass("show");
        } else {
            $(".gotop").removeClass("show");
        }
    });

    $(".gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0 //屬性
        });
        return false;
    });

    //出場動畫
    function section_active() {
        $(".main_content>div").each(function (index, element) {
            var _scrollTop = $(window).scrollTop();
            var _href = $(this);
            var _contentHeight = $(_href).outerHeight(true);
            if ($(_href).offset() != undefined) {
                var _hrefPosition = ($(_href).offset().top) | 0;
            }
            //重整後出現一次
            window_halfh = $(window).height() / 7 * 6;
            //在區域範圍內顯示 && _scrollTop < _hrefPosition + _contentHeight-window_halfh
            if (_scrollTop >= _hrefPosition - window_halfh) {
                $(_href).addClass('approach');
            }
        });
    }
    $(window).scroll(function () {
        section_active();
    });
});