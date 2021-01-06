var num=10

function fn(){
    console.log(num)
    var num=20
    console.log(num)
}
fn()

// 相当于以下代码
var num
function fn(){
    var num
    console.log(num)
    num=20
    console.log(num)
}
num=10
fn()

var a=18
f1()
function f1() {
    var b=9
    console.log(a)
    console.log(b)
    var a='123'
}
// 相当于以下代码
var a
function f1() {
    var b
    var a
    b=9
    console.log(a)
    console.log(b)
    a='123'
}
a=18
f1()


