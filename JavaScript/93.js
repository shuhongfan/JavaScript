window.addEventListener('load',function () {
    var preview_img=document.querySelector('.preview_img')
    var mask=document.querySelector('.mask')
    var big=document.querySelector('.big')
    var bigImg=document.querySelector('.bigImg')

    preview_img.addEventListener('mouseover',function () {
        mask.style.display='block'
        big.style.display='block'
    })
    preview_img.addEventListener('mouseout',function () {
        mask.style.display='none'
        big.style.display='none'
    })
    preview_img.addEventListener('mousemove',function (e) {
        // 鼠标在盒子内的坐标
        var x=e.pageX-this.offsetLeft
        var y=e.pageY-this.offsetTop
        console.log(x,y)
        // 减去高度/宽度的一半
        var maskX=x-mask.offsetWidth/2
        var maskY=y-mask.offsetHeight/2
        // 遮挡层最大移动距离
        var maskMax=preview_img.offsetWidth-mask.offsetWidth
        if(maskX<=0){
            maskX=0
        }else if (maskX>=preview_img.offsetWidth-mask.offsetWidth){
            maskX=preview_img.offsetWidth-mask.offsetWidth
        }
        if(maskY<=0){
            maskY=0
        }else if(maskY>=preview_img.offsetHeight-mask.offsetHeight){
            maskY=preview_img.offsetHeight-mask.offsetHeight
        }
        mask.style.left=maskX+'px'
        mask.style.top=maskY+'px'

        // 大图片的移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离
        // 大图片最大移动距离
        var bifMax=bigImg.offsetWidth-big.offsetWidth
        // 大图片的移动距离x
        var bigX=maskX*bifMax/maskMax
        // 大图片的移动距离y
        var bigY=maskY*bifMax/maskMax
        bigImg.style.left=-bigX+'px'
        bigImg.style.top=-bigY+'px'
    })
})