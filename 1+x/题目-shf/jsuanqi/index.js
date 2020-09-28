
//点击数字
var numberClick = function(value){
	var val = document.getElementById('output').value;

	if(value == '0' && val == "0") {
		return ;
	}
	if(val == "0") {
		document.getElementById('output').value = value;
	} else {
		document.getElementById('output').value = val + value;
	}
}
//点击操作符+-*/
var operatorClick = function (value) {
	var val = document.getElementById("output").value;

	if(val[val.length - 1] == " ") {
		return ;
	}
	document.getElementById('output').value = val + " " + value + " ";
}
//计算结果
var equalClick = function(){
	//将表达式以"空格"拆分成数组
	// this.number = document.getElementById('output').value.___(3)___;
	this.number = document.getElementById('output').value.split(' ');
	console.log(this.number)
	for(var index = 0; index < this.number.length; index ++) {
		if(this.number[index] == "*" || this.number[index] == '/') {
			//容错处理: 如果*或者/后面没有数字,则补一个1
			if(this.number[index + 1] == " ") {
				this.number[index + 1] == 1;
			}
			//乘法计算
			if(this.number[index] == "*") {
				var index_num = Number(index);
				var firstNum = Number(this.number[index_num - 1]);
				var secondNum = Number(this.number[index_num + 1]);
				var result = firstNum * secondNum;
				//从数组指定位置index_num -1开始,删除3个元素,并添加一个元素result
				// this.number.___(4)____(index_num - 1, 3, result);
				this.number.splice(index_num - 1, 3, result);
				console.info(this.number)
			} else if(this.number[index] == '/'){//除法的计算
				var index_num = Number(index);
				var firstNum = Number(this.number[index_num - 1]);
				var secondNum = Number(this.number[index_num + 1]);
				// if(___(5)____) { //被除数不能为0
				console.log(index_num,firstNum,secondNum)
				if(!firstNum) { //被除数不能为0
					alert('除数不能为0,请修改后重新计算');
					return;
				}
				var result = firstNum / secondNum;
				// this.number.___(4)____(index_num - 1, 3, result);
				this.number.splice(index_num - 1, 3, result);
			}
			index --;
		}
	}

	//加减法处理
	for(var index = 0; index < this.number.length; index ++) {
		if(this.number[index] == '+' || this.number[index] == "-"){
			if(this.number[index] == '+') {
				var index_num = Number(index);
				var firstNum = Number(this.number[index_num - 1]);
				var secondNum = Number(this.number[index_num + 1]);
				var result = firstNum + secondNum;
				// this.number.___(4)____(index_num - 1, 3, result);
				this.number.splice(index_num - 1, 3, result);
			} else if(this.number[index] == '-') {
				var index_num = Number(index);
				var firstNum = Number(this.number[index_num - 1]);
				var secondNum = Number(this.number[index_num + 1]);
				var result = firstNum - secondNum;
				// this.number.___(4)____(index_num - 1, 3, result);
				this.number.splice(index_num - 1, 3, result);
			}
			index --;
		}
		document.getElementById('output').value = this.number[0]; //将计算结果展示到output元素
	}
}
//清除
var cleanClick = function(){
	document.getElementById('output').value = "";
}
//计算器对象
var calculator = {
	number:[],
	numberClick: numberClick,
	operatorClick: operatorClick,
	equalClick: equalClick,
	cleanClick: cleanClick
}
