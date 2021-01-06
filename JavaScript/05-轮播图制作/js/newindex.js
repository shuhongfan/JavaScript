window.addEventListener('load',function () {
    var arrow_l=document.querySelector('.arrow-l')
    var arrow_r=document.querySelector('.arrow-r')
    var focus=document.querySelector('.focus')

    focus.addEventListener('mouseenter',function () {
        arrow_l.style.display='block'
        arrow_r.style.display='block'
        clearInterval(timer)
        timer=null
    })
    focus.addEventListener('mouseleave',function () {
        arrow_l.style.display='none'
        arrow_r.style.display='none'
        timer=setInterval(function () {
            arrow_r.click()
        },2000)
    })


    var ol=document.querySelector('.circle')
    var ul=focus.querySelector('ul')
    var focusWidth=focus.offsetWidth
    // console.log(ul.children.length)
    for (var i = 0; i <ul.children.length ; i++) {
        var li=document.createElement('li')
        li.setAttribute('index',i)
        li.addEventListener('click',function () {
            for (var j = 0; j <ol.children.length; j++) {
                ol.children[j].className=''
            }
            this.className='current'

            console.log(focusWidth)
            var index=this.getAttribute('index')
            circle=num=index
            console.log(index)
            animate(ul,-focusWidth*index)
        });
        ol.appendChild(li)
    }
    ol.children[0].className='current'


    var first=ul.children[0].cloneNode(true)
    console.log(first)
    ul.appendChild(first)


    var num=0
    var circle=0
    var flag=true
    function circleChange(){
        for (var i = 0; i <ol.children.length; i++) {
            ol.children[i].className=''
        }
        ol.children[circle].className='current'
    }
    arrow_r.addEventListener('click',function () {
        if (flag){
            flag=false

            if (num==ul.children.length-1){
                ul.style.left=0
                num=0
            }
            num++
            animate(ul,-focusWidth*num,function () {
                flag=true
            })

            circle++
            if (circle==ol.children.length){
                circle=0
            }
            circleChange()
        }

    })
    arrow_l.addEventListener('click',function () {
        if (flag){
            flag=false
            if (num==0){
                num=ul.children.length-1
                ul.style.left=-num*focusWidth+'px'

            }
            num--
            animate(ul,-focusWidth*num,function () {
                flag=true
            })

            circle--
            // if (circle<0){
            //     circle=ol.children.length-1
            // }
            circle=circle<0?ol.children.length-1:circle
            circleChange()
        }

    })

    var timer=setInterval(function () {
        arrow_r.click()
    },2000)
})