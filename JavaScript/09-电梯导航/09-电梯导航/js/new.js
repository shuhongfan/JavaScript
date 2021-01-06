$(function () {
    var flag=true

    var recommendTop=$('.recommend').offset().top
    // console.log(recommendTop)

    $(window).scroll(function () {
        if ($(document).scrollTop()>=recommendTop){
            $('.fixedtool').fadeIn()
        }else {
            $('.fixedtool').fadeOut()
        }

        if (flag){
            $('.floor .w').each(function (i,ele) {
                if ($(document).scrollTop()>=$(ele).offset().top){
                    console.log(i)
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current')
                }
            })
        }

    })

    $('.fixedtool li').click(function () {
        var index=$(this).index()
        console.log(index)
        flag=false
        var current=$('.floor .w').eq(index).offset().top
        $('body,html').stop().animate({
            scrollTop:current
        },function () {
            flag=true
        })
        $(this).addClass('current').siblings().removeClass('current')
    })
})