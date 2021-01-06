var aa=123;
var bb=456;
console.log(aa);
console.log(bb);

aa=aa+bb;
bb=aa-bb;
aa=aa-bb;

console.log(aa);
console.log(bb);

// var num=010;
console.log(num);
var num=0x10;
console.log(num);
// 无穷大
console.log(Number.MAX_VALUE*2);
console.log(-Number.MAX_VALUE*2);

console.log(isNaN(12))
console.log(isNaN('12df'))

console.log('sdf\\tdsfds\tasdas')

var str='saafadsfds'
console.log(str.length)
var str2='sadasdas\tdreyrt54546'
console.log(str+str2)
console.log((str+str2).length)
console.log(12+12)
console.log('12'+12)
var age=18
console.log('pink老师'+age+'岁')
console.log(typeof age)

var num=10.1;
var str=num.toString()
var str=String(num)
console.log(typeof str)
console.log(10+'')

console.log(str)
console.log(parseInt(str))
console.log(parseFloat(str))
console.log(parseInt(3.99))
console.log(parseInt('12px'))
console.log(Number('12'))
console.log('12'-0)
console.log('12'*1)
console.log('12'/1)
console.log('132'-'130')

console.log(123&&456)
console.log(0&&456)