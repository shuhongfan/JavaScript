del();

function del() {
	$('.list>ul>li').hover(function() {
		$index = $(this).index();
		$(this).addClass('hover');
		$('.del').eq($index).show();

		$('.del').click(function() {
			$(this).parent('div').parent('div').parent('li').remove();
		})
	}, function() {
		$(this).removeClass('hover');
		$('.del').hide();
	})
}
$('#face>img').click(function() {
	$(this).addClass('current').siblings().removeClass('current');
	$index = $(this).index();
	console.log($index);
})

function append() {
	$('#face>img').click(function() {
		$(this).addClass('current').siblings().removeClass('current');
		$index = $(this).index();
		console.log($index);
	})
	var myDate = new Date;
    var year = myDate.getFullYear(); 
    var mon = myDate.getMonth() + 1; 
    var date = myDate.getDate(); 
    var h = myDate.getHours();
    var m = myDate.getMinutes();
    var s = myDate.getSeconds();
	var userName = $('#userName').val();
	var conBox = $('#conBox').val();
	var html = '<li>' +
		'<div class="userPic">' + '<img src="images/face.gif"  />' + '</div>' +
		'<div class="content">' +
		'<div class="userName">' +
		'<a href="javascript:;">' + userName + '</a>' + ':' + '</div>' +
		'<div class="msgInfo">' + conBox + '</div>' +
		'<div class="times">' + '<span>'+mon+'月'+date+'日'+h+':'+m+'</span>' +
		'<a class="del" href="javascript:;">' + '删除' + '</a>' +
		'</div>' +
		'</div>' +
		'</li>';
	$('.list>ul').append(html);
	$img = ['images/face1.gif',
		'images/face2.gif',
		'images/face3.gif',
		'images/face4.gif',
		'images/face5.gif',
		'images/face6.gif',
		'images/face7.gif',
		'images/face8.gif'
	]
	$('.userPic>img').last().attr('src', $img[$index]);
	del();
}


$('#sendBtn').click(function() {
	if (($('#userName').val().length!=0)&&($('#conBox').val().length!=0)) {
		append();
	}else{
		alert('请输入数据！！！');
	}
})


$(document).keydown(function(e) {
	if(e.ctrlKey) {
		if(e.which == 13) {
			append();
		}
	}
})


$('#banner .menu li a span').eq(4).css('background-color', 'green');

$('#conBox').keyup(function  () {
	$('.maxNum').text(140-$('#conBox').val().length);
	if (($('#conBox').val().length)>=140) {
		alert('字数太多！！！');
	}
})


