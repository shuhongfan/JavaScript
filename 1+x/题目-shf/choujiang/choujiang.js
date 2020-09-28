$(function(){
	var number = ['189', '131', '151', '152', '153', '154', '155', '157', '158', '159', '132', '133', '134', '135', '136', '137', '138']

	for(var i = 0; i < 10; i ++) {
		temp = number[Math.floor(Math.random()*number.length)];

		for(var j = 0; j < 8; j ++) {
			temp = temp + Math.floor(Math.random() * 10);
		}

		//设置延时动画,等待10毫秒执行create_animation函数
		// ____(2)___(create_animation(i, temp), 10);
		setTimeout(create_animation(i, temp), 10);
	}
})

function create_animation(i, temp) {
	// $('#div_p p:eq(' + i + ')').___(3)__(temp);//将temp作为最后一个子元素插入下标为i的p元素
	$('#div_p p:eq(' + i + ')').text(temp);//将temp作为最后一个子元素插入下标为i的p元素
	$('#div_p p:eq(' + i + ')').animate({
		left: '47.3%'
	})
}

$(document).on('click', '#btn_prize', function(){
	// temp = Math.floor(Math.___(4)___ * 10);//获取随机数
	temp = Math.floor(Math.random() * 10);//获取随机数

	for(var i = 0; i <= 10; i ++) {
		if(i != temp) {
			$('#div_p p:eq(' + i + ')').toggle("fade");
		} else {
			// $('#div_p p:eq(' + i + ')').____(5)____({ //设置自定义动画
			$('#div_p p:eq(' + i + ')').animate({ //设置自定义动画
				fontSize: '2em',
				left: '44.6%',
				backgroundColor: '#aa0000',
				color: '#fff',
				width: 210,
			}).css('color','RED');
		}
	}

	// $('#btn_prize').___(6)___('disabled', 'true'); //修改属性disable为true
	$('#btn_prize').attr('disabled', 'true'); //修改属性disable为true
})

$(document).on('click', '#btn_re', function(){
	$('body').toggle('puff');
	//设置延时,等待1s中之后执行
	// ____(2)___(function(){
	setTimeout(function(){
		// window.location.___(7)__(); //重新加载页面
		window.location.reload(); //重新加载页面
	}, 1000)
})
