$(function() {
    $(".banner ul").append($(".banner ul li:first").clone(true));
    var loopIndex = 0;
    var yuanDian = 0;
    var timer01 = null;
    var timerFn = function() {
        yuanDian++;
        if (yuanDian > 3) {
            yuanDian = 0
        }
        $(".banner ol li").eq(yuanDian).addClass("banCurrent").siblings().removeClass("banCurrent");
        loopIndex++;
        if (loopIndex > 4) {
            loopIndex = 1;
            $(".banner ul").css("left", "0")
        }
        var moveLeft = -1260 * loopIndex;
        $(".banner ul").stop().animate({
            "left": "" + moveLeft + "px"
        },
        500)
    };
    timer01 = setInterval(timerFn, 3000);
    $(".banner").hover(function(e) {
        clearInterval(timer01);
        $(".banner .rightBtn,.banner .leftBtn").show()
    },
    function() {
        clearInterval(timer01);
        timer01 = setInterval(timerFn, 3000);
        $(".banner .rightBtn,.banner .leftBtn").hide()
    });
    $(".banner .rightBtn").click(timerFn);
    $(".banner .leftBtn").click(function(e) {
        yuanDian--;
        if (yuanDian < 0) {
            yuanDian = 3
        }
        $(".banner ol li").eq(yuanDian).addClass("banCurrent").siblings().removeClass("banCurrent");
        loopIndex--;
        if (loopIndex < 0) {
            loopIndex = 3;
            $(".banner ul").css("left", "-5040px")
        }
        var moveLeft = -1260 * loopIndex;
        $(".banner ul").stop().animate({
            "left": "" + moveLeft + "px"
        },
        500)
    });
    $(".banner ol li").click(function() {
        $(this).addClass("banCurrent").siblings().removeClass("banCurrent");
        var moveLeft = -1260 * $(this).index();
        $(".banner ul").stop().animate({
            "left": "" + moveLeft + "px"
        },
        500);
        loopIndex = $(this).index();
        yuanDian = $(this).index()
    });
    var BanIndex = 0;
    var padTimer = null;
    var padTimerFn = function() {
        BanIndex++;
        if (BanIndex == $(".padBanner ul li").length) {
            BanIndex = 0
        }
        $(".padBanner ul li:eq(" + BanIndex + ")").hide().stop().fadeIn().siblings().hide();
        $(".padBanner ol li:eq(" + BanIndex + ")").addClass("padBan_cur").siblings().removeClass("padBan_cur")
    };
    $(".padBanner ul li:first").show();
    padTimer = setInterval(padTimerFn, 3000);
    $(".padBanner").hover(function(e) {
        $(".padBanner .rightBtn,.padBanner .leftBtn").show();
        clearInterval(padTimer)
    },
    function(e) {
        clearInterval(padTimer);
        $(".banner .rightBtn,.banner .leftBtn").hide();
        padTimer = setInterval(padTimerFn, 3000)
    });
    $(".padBanner ol li").mouseenter(function(e) {
        $(this).addClass("padBan_cur").siblings().removeClass("padBan_cur");
        var padIndex = $(this).index();
        $(".padBanner ul li:eq(" + padIndex + ")").hide().stop().fadeIn().siblings().hide();
        BanIndex = padIndex
    });
    $(".webUl li").hover(function(e) {
        $(this).children("div").children(".webHover").stop().fadeIn();
        $(this).children("div").children(".webCur").css("background", "#00ccb8")
    },
    function() {
        $(this).children("div").children(".webHover").stop().fadeOut();
        $(this).children("div").children(".webCur").css("background", "#94c1c1")
    });
    $(".close").click(function() {
        $(".closeAll").stop().fadeOut();
        $("body,html").css("overflow", "auto")
    });
    function out(par1, par2) {
        $(par1).click(function() {
            $(par2).stop().fadeIn();
            $("body,html").css("overflow", "hidden")
        })
    }
    out(".pic0 .webHover", ".wclick0");
    out(".pic1 .webHover", ".wclick1");
    out(".pic2 .webHover", ".wclick2");
    out(".pic3 .webHover", ".wclick3");
    out(".pic4 .webHover", ".wclick4");
    out(".pic5 .webHover", ".wclick5");
    var json0 = {
        "width": 114,
        "height": 206,
        "left": -200,
        "top": 224,
        "z-index": 98
    };
    var json1 = {
        "width": 149,
        "height": 269,
        "left": 8,
        "top": 132,
        "z-index": 99
    };
    var json2 = {
        "width": 196,
        "height": 353,
        "left": 216,
        "top": 40,
        "z-index": 100
    };
    var json3 = {
        "width": 149,
        "height": 269,
        "left": 471,
        "top": 132,
        "z-index": 99
    };
    var json4 = {
        "width": 114,
        "height": 206,
        "left": 726,
        "top": 224,
        "z-index": 98
    };
    var timer02 = null;
    var appFn = function() {
        if (!$(".imagelist ul li").is(":animated")) {
            $(".imagelist .no1").animate(json0, 300);
            $(".imagelist .no2").animate(json1, 300);
            $(".imagelist .no3").animate(json2, 300);
            $(".imagelist .no4").animate(json3, 300);
            $(".imagelist .no0").css(json4);
            var myno4 = $(".no4");
            $(".no0").attr("class", "waiting");
            $(".no1").attr("class", "no0");
            $(".no2").attr("class", "no1");
            $(".no3").attr("class", "no2");
            $(".no4").attr("class", "no3");
            if (myno4.next().length != 0) {
                myno4.next().attr("class", "no4")
            } else {
                $(".imagelist ul li").eq(0).attr("class", "no4")
            }
            $(".no4").css(json4)
        }
    };
    timer02 = setInterval(appFn, 2000);
    $(".appIn").hover(function() {
        clearInterval(timer02);
        $(this).children(".buttons").children(".alBtn,.arBtn").show()
    },
    function() {
        clearInterval(timer02);
        timer02 = setInterval(appFn, 2000);
        $(this).children(".buttons").children(".alBtn,.arBtn").hide()
    });
    $(".arBtn").click(appFn);
    $(".alBtn").click(function() {
        if (!$(".imagelist ul li").is(":animated")) {
            $(".imagelist .no0").animate(json1, 300);
            $(".imagelist .no1").animate(json2, 300);
            $(".imagelist .no2").animate(json3, 300);
            $(".imagelist .no3").animate(json4, 300);
            $(".imagelist .no4").css(json0);
            var myno0 = $(".no0");
            $(".no4").attr("class", "waiting");
            $(".no3").attr("class", "no4");
            $(".no2").attr("class", "no3");
            $(".no1").attr("class", "no2");
            $(".no0").attr("class", "no1");
            if (myno0.prev().length != 0) {
                myno0.prev().attr("class", "no0")
            } else {
                $(".imagelist ul li:last").attr("class", "no0")
            }
            $(".no0").css(json0)
        }
    });
    var xiaoyuandiankuandu = $(".bwIn .bwNav ol li").outerWidth(true);
    var geshu = $(".bwIn .bwNav ol li").length;
    $(".bwNav").css("width", xiaoyuandiankuandu * geshu);
    var jsBwLi0 = {
        "width": 307,
        "height": 155,
        "left": -24,
        "top": 56
    };
    var jsBwLi1 = {
        "width": 444,
        "height": 187,
        "left": 0,
        "top": 41
    };
    var jsBwLi2 = {
        "width": 533,
        "height": 225,
        "left": 70,
        "top": 22
    };
    var jsBwLi3 = {
        "width": 640,
        "height": 270,
        "left": 170,
        "top": 0
    };
    var jsBwLi4 = {
        "width": 533,
        "height": 225,
        "left": 377,
        "top": 22
    };
    var jsBwLi5 = {
        "width": 444,
        "height": 187,
        "left": 528,
        "top": 41
    };
    var jsBwLi6 = {
        "width": 307,
        "height": 155,
        "left": 698,
        "top": 56
    };
    var nowimg = 0;
    var lock = false;
    var donghuashijian = 300;
    var timer03 = setInterval(bwRBntFunc, 2000);
    $(".bwIn").hover(function() {
        $(this).children(".bwBnts").children(".bwLBnt,.bwRBnt").show();
        clearInterval(timer03)
    },
    function() {
        $(this).children(".bwBnts").children(".bwLBnt,.bwRBnt").hide();
        clearInterval(timer03);
        timer03 = setInterval(bwRBntFunc, 2000)
    });
    $(".bwRBnt").click(bwRBntFunc);
    function bwRBntFunc() {
        if (!$(".bwImgList ul li").is(":animated") || lock) {
            if (nowimg < geshu - 1) {
                nowimg++
            } else {
                nowimg = 0
            }
            $(".bwNav ol li").eq(nowimg).addClass("bwLiCur").siblings().removeClass("bwLiCur");
            $(".bwImgList .bwLi1").animate(jsBwLi0, donghuashijian);
            $(".bwImgList .bwLi2").animate(jsBwLi1, donghuashijian);
            $(".bwImgList .bwLi3").animate(jsBwLi2, donghuashijian);
            $(".bwImgList .bwLi4").animate(jsBwLi3, donghuashijian);
            $(".bwImgList .bwLi5").animate(jsBwLi4, donghuashijian);
            $(".bwImgList .bwLi6").animate(jsBwLi5, donghuashijian);
            $(".bwImgList .bwLi0").css(jsBwLi6);
            var mybwLi6 = $(".bwLi6");
            $(".bwLi0").attr("class", "bwWaiting");
            $(".bwLi1").attr("class", "bwLi0");
            $(".bwLi2").attr("class", "bwLi1");
            $(".bwLi3").attr("class", "bwLi2");
            $(".bwLi4").attr("class", "bwLi3");
            $(".bwLi5").attr("class", "bwLi4");
            $(".bwLi6").attr("class", "bwLi5");
            if (mybwLi6.next().length != 0) {
                mybwLi6.next().attr("class", "bwLi6")
            } else {
                $(".bwImgList ul li").eq(0).attr("class", "bwLi6")
            }
            $(".bwLi6").css(jsBwLi6)
        }
    }
    $(".bwLBnt").click(bwLBntFunc);
    function bwLBntFunc() {
        if (!$(".bwImgList ul li").is(":animated") || lock) {
            if (nowimg > 0) {
                nowimg--
            } else {
                nowimg = geshu - 1
            }
            $(".bwNav ol li").eq(nowimg).addClass("bwLiCur").siblings().removeClass("bwLiCur");
            $(".bwImgList .bwLi0").animate(jsBwLi1, donghuashijian);
            $(".bwImgList .bwLi1").animate(jsBwLi2, donghuashijian);
            $(".bwImgList .bwLi2").animate(jsBwLi3, donghuashijian);
            $(".bwImgList .bwLi3").animate(jsBwLi4, donghuashijian);
            $(".bwImgList .bwLi4").animate(jsBwLi5, donghuashijian);
            $(".bwImgList .bwLi5").animate(jsBwLi6, donghuashijian);
            $(".bwImgList .bwLi6").css(jsBwLi0);
            var mybwLi0 = $(".bwLi0");
            $(".bwLi6").attr("class", "bwWaiting");
            $(".bwLi5").attr("class", "bwLi6");
            $(".bwLi4").attr("class", "bwLi5");
            $(".bwLi3").attr("class", "bwLi4");
            $(".bwLi2").attr("class", "bwLi3");
            $(".bwLi1").attr("class", "bwLi2");
            $(".bwLi0").attr("class", "bwLi1");
            if (mybwLi0.prev().length != 0) {
                mybwLi0.prev().attr("class", "bwLi0")
            } else {
                $(".bwImgList ul li:last").attr("class", "bwLi0")
            }
            $(".bwLi0").css(jsBwLi0)
        }
    }
    $(".bwIn .bwNav ol li").click(function() {
        var beifen = donghuashijian;
        donghuashijian = 100;
        lock = true;
        var yonghudianji = $(this).index();
        if (yonghudianji > nowimg) {
            var cishu = yonghudianji - nowimg;
            for (var i = 1; i <= cishu; i++) {
                bwRBntFunc()
            }
        } else {
            var cishu = nowimg - yonghudianji;
            for (var i = 1; i <= cishu; i++) {
                bwLBntFunc()
            }
        }
        lock = false;
        donghuashijian = beifen;
        nowimg = $(this).index();
        $(".bwNav ol li").eq(nowimg).addClass("bwLiCur").siblings().removeClass("bwLiCur")
    });
    var timer04 = null;
    aConNum = 0;
    aConTime = function() {
        aConNum++;
        if (aConNum > 360) {
            aConNum = 0
        }
        $(".aboutCon_left .aCon_l_bg").css("transform", "rotate(" + aConNum + "deg)")
    };
    timer04 = setInterval(aConTime, 30);
    $(".aboutCon_left .aCon_l_img").hover(function(e) {
        clearInterval(timer04)
    },
    function() {
        timer04 = setInterval(aConTime, 30)
    });
    $(".aboutCon_right .aCon_r_bottom ul li").hover(function(e) {
        $(this).children("span").stop().fadeIn()
    },
    function() {
        $(this).children("span").stop().fadeOut()
    });
    $(".padAppIn_ul ul").append($(".padAppIn_ul ul li:first").clone(true));
    var padAppIndex = 0;
    var padAppOl = 0;
    var padAppTimer = null;
    var padAppFn = function() {
        padAppOl++;
        if (padAppOl > 10) {
            padAppOl = 0
        }
        $(".padAppIn ol li").eq(padAppOl).addClass("padApp_cur").siblings().removeClass("padApp_cur");
        padAppIndex++;
        if (padAppIndex > 11) {
            padAppIndex = 1;
            $(".padAppIn_ul ul").css("left", "0")
        }
        var moveLeft = -149 * padAppIndex;
        $(".padAppIn_ul ul").stop().animate({
            "left": moveLeft + "px"
        },
        500)
    };
    padAppTimer = setInterval(padAppFn, 2000);
    $(".padApp").hover(function(e) {
        clearInterval(padAppTimer);
        $(".padAppBnts .padApp_LBnt,.padAppBnts .padApp_RBnt").show()
    },
    function() {
        clearInterval(padAppTimer);
        padAppTimer = setInterval(padAppFn, 2000);
        $(".padAppBnts .padApp_LBnt,.padAppBnts .padApp_RBnt").hide()
    });
    $(".padAppBnts .padApp_RBnt").click(padAppFn);
    $(".padAppBnts .padApp_LBnt").click(function(e) {
        padAppOl--;
        if (padAppOl < 0) {
            padAppOl = 10
        }
        $(".padAppIn ol li").eq(padAppOl).addClass("padApp_cur").siblings().removeClass("padApp_cur");
        padAppIndex--;
        if (padAppIndex < 0) {
            padAppIndex = 10;
            $(".padAppIn_ul ul").css("left", "-1639px")
        }
        var moveLeft = -149 * padAppIndex;
        $(".padAppIn_ul ul").stop().animate({
            "left": moveLeft + "px"
        },
        500)
    });
    $(".padAppIn ol li").click(function() {
        $(this).addClass("padApp_cur").siblings().removeClass("padApp_cur");
        var moveLeft = -149 * $(this).index();
        $(".padAppIn_ul ul").stop().animate({
            "left": moveLeft + "px"
        },
        500);
        padAppIndex = $(this).index();
        padAppOl = $(this).index()
    });
    $(".padUiIn_ul ul").append($(".padUiIn_ul ul li:first").clone(true));
    var padUiIndex = 0;
    var padUiOl = 0;
    var padUiTimer = null;
    var padUiFn = function() {
        padUiOl++;
        if (padUiOl > 4) {
            padUiOl = 0
        }
        $(".padUiIn ol li").eq(padUiOl).addClass("padUi_cur").siblings().removeClass("padUi_cur");
        padUiIndex++;
        if (padUiIndex > 5) {
            padUiIndex = 1;
            $(".padUiIn_ul ul").css("left", "0")
        }
        var moveLeft = -149 * padUiIndex;
        $(".padUiIn_ul ul").stop().animate({
            "left": moveLeft + "px"
        },
        500)
    };
    padUiTimer = setInterval(padUiFn, 2000);
    $(".padUi").hover(function(e) {
        clearInterval(padUiTimer);
        $(".padUiBnts .padUi_LBnt,.padUiBnts .padUi_RBnt").show()
    },
    function() {
        clearInterval(padUiTimer);
        padUiTimer = setInterval(padUiFn, 2000);
        $(".padUiBnts .padUi_LBnt,.padUiBnts .padUi_RBnt").hide()
    });
    $(".padUiBnts .padUi_RBnt").click(padUiFn);
    $(".padUiBnts .padUi_LBnt").click(function(e) {
        padUiOl--;
        if (padUiOl < 0) {
            padUiOl = 4
        }
        $(".padUiIn ol li").eq(padUiOl).addClass("padUi_cur").siblings().removeClass("padUi_cur");
        padUiIndex--;
        if (padUiIndex < 0) {
            padUiIndex = 4;
            $(".padUiIn_ul ul").css("left", "-745px")
        }
        var moveLeft = -149 * padUiIndex;
        $(".padUiIn_ul ul").stop().animate({
            "left": moveLeft + "px"
        },
        500)
    });
    $(".padUiIn ol li").click(function() {
        $(this).addClass("padUi_cur").siblings().removeClass("padUi_cur");
        var moveLeft = -149 * $(this).index();
        $(".padUiIn_ul ul").stop().animate({
            "left": moveLeft + "px"
        },
        500);
        padUiIndex = $(this).index();
        padUiOl = $(this).index()
    });
    var banNowImg = 0;
    var padBanwTimer = null;
    $(".padBanwIn").prepend("<div class='maoni'></div>");
    for (var i = 0; i <= 24; i++) {
        $(".maoni").append("<p></p>");
        $(".maoni p").eq(i).css("top", parseInt(i / 5) * 42);
        $(".maoni p").eq(i).css("left", i % 5 * 94);
        $(".maoni p").eq(i).css("background-position", (i % 5 * -94) + "px " + parseInt(i / 5) * -42 + "px")
    }
    var padBanwInFn = function() {
        if (banNowImg < 9) {
            banNowImg++
        } else {
            banNowImg = 0
        }
        $(".padBwImg").attr("src", "style/images/padBwImg0" + banNowImg + ".jpg");
        $(".maoni p").css("transition", "all 1s ease 0s");
        $(".padBanwIn").addClass("fei");
        $(".maoni p").each(function() {
            $(this).css("-webkit-transform", "rotateX(" + -parseInt(Math.random() * 90) + "deg) rotateY(" + parseInt(Math.random() * 100) + "deg) translateZ(500px)")
        });
        setTimeout(function() {
            $(".padBanwIn").removeClass("fei");
            $(".maoni p").css("transition", "none");
            $(".maoni p").css("background-image", "url(style/images/padBwImg0" + banNowImg + ".jpg)");
            $(".maoni p").css("-webkit-transform", "none")
        },
        1000)
    };
    padBanwTimer = setInterval(padBanwInFn, 2000);
    $(".padBanw").hover(function(e) {
        clearInterval(padBanwTimer);
        $(".padBanwBnts .padBanw_LBnt,.padBanwBnts .padBanw_RBnt").show()
    },
    function() {
        clearInterval(padBanwTimer);
        padBanwTimer = setInterval(padBanwInFn, 2000);
        $(".padBanwBnts .padBanw_LBnt,.padBanwBnts .padBanw_RBnt").hide()
    });
    $(".padBanwBnts .padBanw_RBnt").click(padBanwInFn);
    $(".padBanwBnts .padBanw_LBnt").click(function() {
        if (banNowImg > 0) {
            banNowImg--
        } else {
            banNowImg = 9
        }
        $(".padBwImg").attr("src", "style/images/padBwImg0" + banNowImg + ".jpg");
        $(".maoni p").css("transition", "all 1s ease 0s");
        $(".padBanwIn").addClass("fei");
        $(".maoni p").each(function() {
            $(this).css("-webkit-transform", "rotateX(" + -parseInt(Math.random() * 90) + "deg) rotateY(" + parseInt(Math.random() * 100) + "deg) translateZ(500px)")
        });
        setTimeout(function() {
            $(".padBanwIn").removeClass("fei");
            $(".maoni p").css("transition", "none");
            $(".maoni p").css("background-image", "url(style/images/padBwImg0" + banNowImg + ".jpg)");
            $(".maoni p").css("-webkit-transform", "none")
        },
        1000)
    });
    var mbanNowImg = 0;
    var mobBanwTimer = null;
    $(".mobBanwIn").prepend("<div class='mobBanwAdd'></div>");
    for (var i = 0; i <= 24; i++) {
        $(".mobBanwAdd").append("<p></p>");
        $(".mobBanwAdd p").eq(i).css("top", parseInt(i / 5) * 18);
        $(".mobBanwAdd p").eq(i).css("left", i % 5 * 34);
        $(".mobBanwAdd p").eq(i).css("background-position", (i % 5 * -34) + "px " + parseInt(i / 5) * -18 + "px")
    }
    var mobBanwInFn = function() {
        if (mbanNowImg < 9) {
            mbanNowImg++
        } else {
            mbanNowImg = 0
        }
        $(".mobBwImg").attr("src", "style/images/mobBwImg0" + mbanNowImg + ".jpg");
        $(".mobBanwAdd p").css("transition", "all 1s ease 0s");
        $(".mobBanwIn").addClass("mobFei");
        $(".mobBanwAdd p").each(function() {
            $(this).css("-webkit-transform", "rotateX(" + -parseInt(Math.random() * 90) + "deg) rotateY(" + parseInt(Math.random() * 100) + "deg) translateZ(500px)")
        });
        setTimeout(function() {
            $(".mobBanwIn").removeClass("mobFei");
            $(".mobBanwAdd p").css("transition", "none");
            $(".mobBanwAdd p").css("background-image", "url(style/images/mobBwImg0" + mbanNowImg + ".jpg)");
            $(".mobBanwAdd p").css("-webkit-transform", "none")
        },
        1000)
    };
    mobBanwTimer = setInterval(mobBanwInFn, 2000);
    $(".mobBanw").hover(function(e) {
        clearInterval(mobBanwTimer);
        $(".mobBanwBnts .mobBanw_LBnt,.mobBanwBnts .mobBanw_RBnt").show()
    },
    function() {
        clearInterval(mobBanwTimer);
        mobBanwTimer = setInterval(mobBanwInFn, 2000);
        $(".mobBanwBnts .mobBanw_LBnt,.mobBanwBnts .mobBanw_RBnt").hide()
    });
    $(".mobBanwBnts .mobBanw_RBnt").click(mobBanwInFn);
    $(".mobBanwBnts .mobBanw_LBnt").click(function() {
        if (mbanNowImg > 0) {
            mbanNowImg--
        } else {
            mbanNowImg = 9
        }
        $(".mobBwImg").attr("src", "style/images/mobBwImg0" + mbanNowImg + ".jpg");
        $(".mobBanwAdd p").css("transition", "all 1s ease 0s");
        $(".mobBanwIn").addClass("mobFei");
        $(".mobBanwAdd p").each(function() {
            $(this).css("-webkit-transform", "rotateX(" + -parseInt(Math.random() * 90) + "deg) rotateY(" + parseInt(Math.random() * 100) + "deg) translateZ(500px)")
        });
        setTimeout(function() {
            $(".mobBanwIn").removeClass("mobFei");
            $(".mobBanwAdd p").css("transition", "none");
            $(".mobBanwAdd p").css("background-image", "url(style/images/mobBwImg0" + mbanNowImg + ".jpg)");
            $(".mobBanwAdd p").css("-webkit-transform", "none")
        },
        1000)
    })
});