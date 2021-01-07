//图片轮播
var c = 0;
function autorun() {
	c++;
	c = c == 4 ? 0 : c;
	$("#fk img").eq(c).stop().fadeIn(300).siblings('img').stop().fadeOut(300);
	$("#fk ul li").eq(c).css('background', '#A10000').siblings('li').css("background", '#DDDDDD');
}
var timer = setInterval(autorun, 1000);
$("#fk").mouseenter(function() {
	clearInterval(timer);
})
$("#fk").mouseleave(function() {
	timer = setInterval(autorun, 1000);
})
$("#fk ul li").mouseenter(function() {
	var jqthis = $(this);
	t = setTimeout(function() {
		c = jqthis.index();
		$("#fk img").eq(c).stop().fadeIn(200).siblings('img').stop().fadeOut(200);
		$("#fk ul li").eq(c).css('background', '#A10000').siblings('li').css("background", '#DDDDDD');
	}, 200)
})
$("#fk ul li").mouseleave(function() {
	clearTimeout(t);
})

//鼠标移入放大1.4倍
$('#star>dl').hover(function() {
	$(this).css({
		'transform': 'scale(1.4)',
		'transition': 'all 0.4s'
	});
}, function() {
	$(this).css({
		'transform': 'scale(1)',
		'transition': 'all 0.6s'
	});
})

//导航栏
$('#banner .menu>li').hover(function  () {
	$('#banner .menu>li>ul').eq($(this).index()).show().css('z-index','999');
},function  () {
	$('#banner .menu>li>ul').eq($(this).index()).hide();
	
})

//点击跳转
var local=['武汉市.html','荆门市.html','宜昌市.html','襄阳市.html','黄梅县.html','十堰市.html'];
$('#star>dl').click(function  () {
	location.href=local[$(this).index()-1];
})

var str=['黄鹤楼.html','神龙架.html','长江大桥.html','江汉平原皮影戏.html'];
$("#fk img").click(function  () {
	var index=$(this).index();
	var newlocal=str[index];
	location.href=newlocal;
})

$('#links .links_logo img').click(function  () {
	location.href='index.html';
})
