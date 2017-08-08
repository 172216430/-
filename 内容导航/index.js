/**
 * Created by Administrator on 2017/8/4.
 */
$(function () {
    var arr = [
        a = 0,
        b = 0,
        c = 0,
        d = 0,
    ];
    for (var i = 1; i < 5; i++) {
        (function (i) {
            $('.ul' + i).on('mousemove', function () {
                $(this).find('.page').css('display', 'block')
            }).on('mouseout', function () {
                $(this).find('.page').css('display', 'none')
            })
            $('.ul' + i).find('.button').find('.bt-div').on('click', function () {
                arr[i - 1]= $(this).index()
                $(this).css('background', '#fff').css('border', '1px solid  rgb(255, 172, 19)').siblings('.bt-div').css('background', '#b0b0b0').css('border', '1px solid transparent')
                $(this).parents('ul').find('>li').eq($(this).index()).css('display', 'block').siblings('li').css('display', 'none')
            })
            $('.ul' + i).find('.right').on('click', function () {
                if (arr[i - 1] < 3) {
                    $(this).parent('ul').find('li').eq(++arr[i - 1]).css('display', 'block').siblings('li').css('display', 'none').siblings('.button').find('.bt-div').css('background', '#fff').eq(arr[i - 1]).css('border', '1px solid  rgb(255, 172, 19)').siblings('.bt-div').css('background', '#b0b0b0').css('border', '1px solid transparent')
                }
            })
            $('.ul' + i).find('.left').on('click', function () {
                if (arr[i - 1] > 0) {
                    $(this).parent('ul').find('li').eq(--arr[i - 1]).css('display', 'block').siblings('li').css('display', 'none').siblings('.button').find('.bt-div').css('background', '#fff').eq(arr[i - 1]).css('border', '1px solid  rgb(255, 172, 19)').siblings('.bt-div').css('background', '#b0b0b0').css('border', '1px solid transparent')
                }
            })
        })(i);
    }
    // $('.ul1').find('.right').on('click', function () {
    //     if (a < 3) {
    //         a++
    //     }
    //     console.log(a)
    //     $(this).parent('.ul1').find('li').eq(a).css('display', 'block').siblings('li').css('display', 'none').siblings('.button').find('.bt-div').css('background', '#fff').eq(a).css('border', '1px solid  rgb(255, 172, 19)').siblings('.bt-div').css('background', '#b0b0b0').css('border', '1px solid transparent')
    // })
    // $('.ul' + i).find('.left').on('click', function () {
    //     if (a > 0) {
    //         a--
    //     }
    //     $(this).parent('ul').find('li').eq(a).css('display', 'block').siblings('li').css('display', 'none').siblings('.button').find('.bt-div').css('background', '#fff').eq(a).css('border', '1px solid  rgb(255, 172, 19)').siblings('.bt-div').css('background', '#b0b0b0').css('border', '1px solid transparent')
    // })
})