/**
 * Created by Administrator on 2017/7/31.
 */
$(function () {
    //顶部的鼠标移入颜色
    //1.发生的元素目标a
    //2.发生的事件 mouseover ,mouseout
    //3.改变连接颜色
    $('.top a').on('mouseover', function () {
        $(this).css('color', '#fff').mouseout(function () {
            $(this).css('color', '#a4b094');
        })
    })
    $('.shopCar').on('mouseover', function () {
        $('.shopCar').css('background', '#fff')
        $('.goods').stop(true, false).slideDown();
    })
    $('.shopCar').on('mouseout', function () {
        $('.shopCar').css('background', '#424242')
        $('.goods').stop(true, false).slideUp();
    })
    // 头部导航/二级导航
    //表单输入
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #000');
            $('.ser2').css('border', '1px solid #000').css('borderLeft', 'none');
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none');
        }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function () {
        $(this).css({
            'color': '#fff',
            'background': 'orange'
        })
    }).mouseout(function () {
        $(this).css({
            'color': '#757575',
            'background': '#eee'
        })
    })
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function () {
        if (flag) {
            $('.ser1 input').css({
                'border': '1px solid #000',
                'border-right': 'none'
            });
            $(this).css({
                'background': 'orange',
                'color': '#fff',
                'border': '1px solid #000'
            })
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $(this).css({
                'background': '#fff',
                'color': '#000',
                'border': '1px solid #ccc',
                'border-left': 'none'
            })
        }
    })
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color', 'orange');
        $('.ser2').css('border-color', 'orange');
        $('.keywordsList').show().css('border-color', 'orange').css('z-index', '5');
    }).blur(function () {
        flag = true;
        $(this).css('border-color', '#ccc');
        $('.ser2').css('border-color', '#ccc');
        $('.keywordsList').hide().css('border-color', '#ccc');
    })
//    导航移入
    $('.nav li ').mouseover(function () {
        $(this).children('a').css('color', '#ff6700');
        if ($(this).index() < 7) {
            $('.select').removeClass('hide');
            $('.select').slideDown().finish()
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide')
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#000');
        $('.select').slideUp();
    })
    $('.nav').mouseout(function () {
        $('.select').slideUp().finish();
    })
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish() //停止当前动画效果和动画列队
    }).mouseout(function () {
        $('.select').slideUp()
    })
//     轮播图
    var num = 0;
    var timer;
    timer = setInterval(autoplay, 1000)

    $('.round li').mouseover(function () {
        clearInterval(timer);
        num = $(this).index()
        displayImg()
    })
    $('.banner').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(autoplay, 1000)
    });
    $('.direcL').click(function () {
        num = num - 1
        if (num < 0) {
            num = 4
        }
        displayImg()
        // 上一张
    })
    $('.direcR').click(function () {
        // 下一张
        num = num + 1
        if (num > 4) {
            num = 0
        }
        displayImg()
    })
    function displayImg() {
        $('.round li').eq(num).css('background', 'orange').siblings().css({
            'background': "#000",
            'opacity': '0.8'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }

    function autoplay() {
        num++;
        if (num > 4) {
            num = 0;
        }
        displayImg();
    }

    //轮播图二级导航
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700')
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background', 'transparent')
    })
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide')
    })
//    用户移入三级导航
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background', '#ff6700')
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background', 'transparent')
    })
    // 小米明星单滚动
    var kg = true
    var timer1 = setInterval(fun, 5000)
    $('.next').on('click', function () {
        fun()
    })
    $('.prev').on('click', function () {
        fun()
    })
    $('.starPro > div').on('mouseover', function () {
        clearInterval(timer1)
    }).on('mouseout', function () {
        timer1 = setInterval(fun, 5000)
    })
    function fun() {
        if (kg == true) {
            $('.scroll').animate({'left': '-1220px'})
            $('.prev').css('color', '#ff6709')
            $('.next').css('color', '#e0e0e0')
            kg = false
        } else if (kg == false) {
            $('.scroll').animate({'left': '0'})
            $('.next').css('color', '#ff6709')
            $('.prev').css('color', '#e0e0e0')
            kg = true
        }
    }

    // 搭配 配件  周边 移入之后的广告
    $('.match .match-div ul li').on('mouseover', function () {
        $(this).children('.slideDiv').stop().css('display', 'block').animate({'height': '76px'})
    }).on('mouseout', function () {
        $(this).children('.slideDiv').stop().animate({'height': '0'}).css('display', 'none')
    })
    //搭配 周边 配件
    for (var o = 1; o < 4; o++) {
        $('.match' + o).find('.match-nav').find('li').on('mouseover', function () {
            $(this).css('border-bottom', '2px solid rgb(250,103,0)').siblings().css('border-bottom', 'none')
            $(this).parents('.match').find('.match-div').find('>ul').eq($(this).index()).css('display', 'flex').siblings().css('display', 'none')
        })
    }
    //为你推荐
    $('.match4 .match-nav .divR').on('click', function () {
        $('.match4 .match-div ul').css('top', '-315px')
        $('.match4 .match-nav .divL').css('color', '#ff6700').siblings('.divR').css('color', '#e0e0e0')
    })
    $('.match4 .match-nav .divL').on('click', function () {
        $('.match4 .match-div ul').css('top', '0')
        $('.match4 .match-nav .divR').css('color', '#ff6700').siblings('.divL').css('color', '#e0e0e0')
    })
    //内容
    var z = [0, 0, 0, 0, 0]
    for (var i = 0; i < 5; i++) {
        (function (i) {
            $('.li-' + i).find('#nva-yuan').find('div').on('click', function () {
                $(this).css('border', '4px solid #ff6700').siblings('div').css('border', '4px solid transparent')
                $(this).parents('li').find('>div').eq($(this).index()).css('display', 'block').siblings('div').css('display', 'none')
                z[i] = $(this).index()
            })
            $('.li-' + i).on('mousemove', function () {
                $(this).find('#nav-jt').find('div').css('display', 'block')
            }).on('mouseout', function () {
                $(this).find('#nav-jt').find('div').css('display', 'none')
            })
            $('.li-' + i).find('.div-R').on('click', function () {
                if (z[i] < 3) {
                    $('.li-' + i).find('>div').eq(++z[i]).css('display', 'block').siblings('div').css('display', 'none')
                    $(this).parents('li').find('#nva-yuan > div').eq(z[i]).css('border', '4px solid #ff6700').siblings('div').css('border', '4px solid transparent')
                }
            })
            $('.li-' + i).find('.div-L').on('click', function () {
                if (z[i] > 0) {
                    $('.li-' + i).find('>div').eq(--z[i]).css('display', 'block').siblings('div').css('display', 'none')
                    $(this).parents('li').find('#nva-yuan > div').eq(z[i]).css('border', '4px solid #ff6700').siblings('div').css('border', '4px solid transparent')
                }
            })
        })(i);
    }
})

