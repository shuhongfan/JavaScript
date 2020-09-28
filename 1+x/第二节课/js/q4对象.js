//构造函数:方法1
function Person(name, age) {
	this.name = name; // 实例对属性
	this.age = age;
	this.sayHello = function(){
		console.log('Hello, my name is ' + this.name)
	}

	var gender = '男'; //私有属性
	this.getGender = function(){
		return gender;
	}
}

//生成实例对象
var p1 = new Person('Jack', 18);
var p2 = new Person('Alice', 19);
console.info(p1);
p1.sayHello();
console.log(p1.constructor); //构造方法
console.log(p1.getGender());
//Es6, class定义类:方法二
class Person_1{
	constructor(name, age) {//构造方法
		this.name = name; //实例成员
		this.age = age; //实例成员
	}

	sayHello(){ //实例成员
		console.log('Hello, my name is ' + this.name)
	}
}
//静态成员
Person_1.gender = '女';
Person_1.introduce = function(){
	console.log(this.gender);
}

//生成实例对象
//实例化时会自动调用constructor()构造函数
var p3 = new Person('Jim', 19);
p3.sayHello();
console.info(p3);
Person_1.introduce()
//访问静态成员
