document.getElementById('calBtn').onclick = function (e) {
	var weight = document.getElementById('weightIns').value;
	var height = document.getElementById('heightIns').value;
	var BMI = weight / (height * height);
	
	//数据格式化,保留一位小数
	BMI = BMI.toFixed(1); 
	
	//Math.round(BMI);整数四舍五入
	//Math.floor(BMI);整数,向下取整
	//Math.ceil(BMI);整数,向上取整
	
	//BMI指数对应的描述,小于18.5,偏瘦;18.5-24.9正常;25-29.9超重;30肥胖
	var result = '';
	if(BMI >= 30) {
		result = '您需要减肥了，多吃蔬菜多运动～';
	} else if(BMI >=25 ){
		result = '您需要制体重，多吃蔬菜多运动，加油加油～';
	} else if(BMI >=18.5 ){
		result = '您的体重非常标准，继续保持哦～';
	} else {
		result = '您需要增重啦，多吃美食多锻炼哦～';
	}
	
	var resultStr = '体重(千克):' + weight + ',身高(米):'+ height + ',BMI=' + BMI + '<br/> '+ result;
	
	document.getElementById('result').innerHTML = resultStr;
	//阻止默认刷新
	e.preventDefault();
	
}
