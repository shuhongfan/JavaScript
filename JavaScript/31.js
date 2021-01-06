var obj={
    uname:'张三疯',
    age:18,
    sayHi:function () {
        console.log('h1')
    }
}
console.log(obj.uname)
console.log(obj['age'])
obj.sayHi()

var obj1=new Object()
obj1.name=20
obj1.say=function(){
    console.log('dsfdsfd')
}

console.log(obj1.name)
console.log(obj1['name'])
obj1.say()