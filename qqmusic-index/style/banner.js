$.fn.THBanner = function (arg) {
    
    var itemLen = $(this).find(".banner-item").length;//banner������
    var opt = {}
    opt.timer = 8000;
    opt.index = 0;//��ǰ��ʾ����
    opt = $.extend(opt, arg);//�ϲ������ȡ����
    var firstMark = true;
    var timeOut = null;

   
    //flag = true��ʧ flag = false��ʾ
    function AddShowClass(flag) {
        if (flag) {
            var oldBanner = $(".banner-item[data-role='out']");
            if (oldBanner) {
                oldBanner.addClass("banner-item-remove " + oldBanner.attr("data-classout"));

                var textList = oldBanner.find(".banner-text > div > div");
                textList && textList.toArray().forEach(function (obj) {
                    $(obj).attr("class", "animated").addClass($(obj).attr("data-classout"));
                });
            }
        } else {
            var newBanner = $(".banner-item[data-role='in']");
            if (newBanner) {
                newBanner.addClass("banner-item-cur "+newBanner.attr("data-classin"));
                var textList = newBanner.find(".banner-text > div > div");
                textList && textList.toArray().forEach(function (obj) {
                    $(obj).attr("class", "animated").addClass($(obj).attr("data-classin"));
                });
            }
        }
    }

    function change() {//�л��¼�
        $(".banner .banner-tool .tool-item").removeClass("tool-item-cur");
        $(".banner .banner-tool .tool-item").eq(opt.index).addClass("tool-item-cur");

        $(".banner .banner-item").removeClass("banner-item-remove");//�Ƴ�Ч������
        $(".banner-item[data-role='out']").removeAttr("data-role");
        $(".banner-item[data-role='in']").removeAttr("data-in");

        var oldBanner = $(".banner .banner-item-cur");//��ʧ��bannerЧ������
        if (oldBanner.length) {
            oldBanner.attr("class", "banner-item animated").attr("data-role","out");
            AddShowClass(true);
        }
        
        var newBanner = $(".banner .banner-item").eq(opt.index);//��ʾ��bannerЧ����ʾ
        if (newBanner.length) {
            if (firstMark) {
                firstMark = false;
                newBanner.attr("class", "banner-item animated").attr("data-role", "in");;
                AddShowClass();
            } else {
                clearTimeout(timeOut);
                newBanner.attr("class", "banner-item animated").attr("data-role", "in");;
                timeOut = setTimeout(AddShowClass, oldBanner.attr("data-time"));
            }   
        }

        var prevIndex = opt.index - 1, nextIndex = opt.index + 1;
        if (prevIndex < 0) {
            prevIndex = itemLen - 1;
        }
        if (nextIndex >= itemLen) {
            nextIndex = 0;
        }

        var prevItem = $(".banner .banner-item").eq(prevIndex);
        var nextItem = $(".banner .banner-item").eq(nextIndex);

        //$(".banner .banner-prev").css({ "background-image": "url(" + prevItem.attr("data-thumb") + ")" });
        //$(".banner .banner-next").css({ "background-image": "url(" + nextItem.attr("data-thumb") + ")" });

    }//��ʾ�¼�
    
    function IntervalFun() {
        opt.index++;
        if (opt.index >= itemLen) {
            opt.index = 0;
        }
        change();
    }
    if (itemLen > 1) {
        var bannerTool = $(this).find(".banner-tool");//���õײ��ײ�Сͼ����¼�
        for (var i = 0; i < itemLen; i++) {
            bannerTool.append($("<div data-num='" + i + "' class='tool-item " + ((i == 0) ? "tool-item-cur" : "") + "'></div>"));
        }
        $(this).find(".banner-tool .tool-item").click(function () {
            if (opt.index != $(this).attr("data-num")) {
                opt.index = $(this).attr("data-num");
                change();
            }
        });

        var bannerInterval = setInterval(IntervalFun, opt.timer);
        $(this).hover(function () {
            clearInterval(bannerInterval);
        }, function () {
            bannerInterval = setInterval(IntervalFun, opt.timer);
        });

        //touch�¼�
        var beginX, endX;
        $(this).on("touchstart", function (e) {
            clearInterval(bannerInterval);
            var touch = e.originalEvent.touches[0];
            beginX = touch.clientX;
        });
        $(this).on("touchmove", function (e) {
            var touch = e.originalEvent.touches[0];
            endX = touch.clientX;

        });
        $(this).on("touchend", function (e) {
            if ((beginX - endX) < 0) {
                opt.index--;
                if (opt.index < 0) {
                    opt.index = itemLen - 1;
                }
                change();
            } else if ((beginX - endX) > 0) {
                opt.index++;
                if (opt.index >= itemLen) {
                    opt.index = 0;
                }
                change();
            }
            bannerInterval = setInterval(IntervalFun, opt.timer);
        });
    }
    change();

    $(this).find(".banner-prev").click(function () {
        opt.index--;
        if (opt.index < 0) {
            opt.index = itemLen - 1;
        }
        change();
    });
    $(this).find(".banner-next").click(function () {
        opt.index++;
        if (opt.index >= itemLen) {
            opt.index = 0;
        }
        change();
    });
}