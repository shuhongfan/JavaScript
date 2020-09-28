//写网站的步骤
//1.网站拥有的功能:轮播图
//2.要使用哪些技术:html,css,js(jquery),使用一些图标iconfont
//做轮播图的步骤
//1.获取窗口的宽度
// var screenWidth = $(document).___(1)____();
var screenWidth = $(document).width();
//2.设置每张图片的宽度==窗口的宽度
// $('.swipe-item').___(1)____(screenWidth);
$('.swipe-item').width(screenWidth);
//3.包含轮播图片的父元素,设置为轮播图的张数*窗口的宽度
var pages = $('.swipe-item').length; //轮播图的张数
// $('.wrapper-inner').___(1)____(pages * screenWidth)
$('.wrapper-inner').width(pages * screenWidth)

//设置图片自动切换,每隔5s中切换一次
// var autoMove = ___(2)____(function (){
var autoMove = setInterval(function (){
	toLeft();
}, 5000)
//下一张
$('#next').click(function(){
	// ___(3)____(autoMove); //清除自动切换
	clearInterval(autoMove); //清除自动切换
	//动画实现偏移
	toLeft();
})

//上一张
$('#prev').click(function(){
	// ___(3)____(autoMove); //清除自动切换
	clearInterval(autoMove); //清除自动切换
	//动画实现偏移
	toRight();
})

//图片向左切换
function toLeft() {
	$('.wrapper-inner').animate({
		'margin-left': '-' + screenWidth + 'px'
	}, 1000, function(){ //把处在第一个位置上的图片移到最后一个图片的后面
		// $($('.swipe-item')[0]).remove().__(4)___($('.wrapper-inner'));
		$($('.swipe-item')[0]).remove().appendTo($('.wrapper-inner'));
		//修改margin-left值
		$('.wrapper-inner').css('margin-left', '0px');
	})
}

//图片向右切换
function toRight() {
	//把最后一个元素B挪到第一个元素A的前面
	// $('.swipe-item').last().remove().___(5)____($('.wrapper-inner'))
	$('.swipe-item').last().remove().prependTo($('.wrapper-inner'))
	//设置css偏移,把这个B元素隐藏起来,移到屏幕的外面
	$('.wrapper-inner').css('margin-left', '-'+ screenWidth + 'px');
	//动画实现偏移
	$('.wrapper-inner').animate({
		'margin-left':'0px'
	}, 1000)
}
