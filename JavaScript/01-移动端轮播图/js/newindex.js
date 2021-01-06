window.addEventListener('load',function () {
    var focus=document.querySelector('.focus')
    var ul=focus.children[0]
    var ol=focus.children[1]
    var w=focus.offsetWidth

    var index=0

    var timer=setInterval(function () {
        index++
        var tanslatex=-index*w
        ul.style.transition='all .3s'
        ul.style.transform='translateX('+tanslatex+'px)'
    },2000)
    // 监听过渡完成事件   transitionend
    ul.addEventListener('transitionend',function () {
        if (index>=3){
            index=0
            ul.style.transition='none'
            var tanslatex=-index*w
            ul.style.transform='translateX('+tanslatex+'px)'
        }else if(index<0){
            index=2
            ul.style.transition='none'
            var tanslatex=-index*w
            ul.style.transform='translateX('+tanslatex+'px)'
        }

        // 小圆点跟随变化
        // 去掉所有current类
        ol.querySelector('.current').classList.remove('current')
        // 当前li添加current
        ol.children[index].classList.add('current')
    })

    var startX=0
    var moveX=0
    var flag=false
    // 手指初始坐标
    ul.addEventListener('touchstart',function (e) {
        clearInterval(timer)
        startX=e.targetTouches[0].pageX
    })
    // 手指移动距离
    ul.addEventListener('touchmove',function (e) {
        moveX=e.targetTouches[0].pageX-startX
        var tanslatex=-index*w+moveX
        ul.style.transition='none'
        ul.style.transform='translateX('+tanslatex+'px)'
        flag=true
        e.preventDefault()
    })
    // 手指离开
    ul.addEventListener('touchend',function (e) {
        if (flag){
            if (Math.abs(moveX)>50){
                if (moveX>0){
                    // 右划
                    index--
                }else {
                    // 左滑
                    index++
                }
                var tanslatex=-index*w
                ul.style.transition='all .3s'
                ul.style.transform='translateX('+tanslatex+'px)'
            }else {
                var tanslatex=-index*w
                ul.style.transition='all .3s'
                ul.style.transform='translateX('+tanslatex+'px)'
            }
        }
        clearInterval(timer)
        timer=setInterval(function () {
            index++
            var tanslatex=-index*w
            ul.style.transition='all .3s'
            ul.style.transform='translateX('+tanslatex+'px)'
        },2000)
    })

    var goBack=document.querySelector('.goBack')
    var nav=document.querySelector('nav')
    window.addEventListener('scroll',function (e) {
        if (window.pageYOffset>=nav.offsetTop){
            goBack.style.display='block'
        }else {
            goBack.style.display='none'
        }
    })
    goBack.addEventListener('click',function () {
        window.scroll(0,0)
    })
})