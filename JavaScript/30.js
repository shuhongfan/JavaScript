f1()
console.log(c)
console.log(b)
console.log(a)
function f1() {
    var a=b=c=9
    // 相当于 var a=9;b=9;c=9;
    console.log(a)
    console.log(b)
    console.log(c)
}
// 相当于以下代码
function f1() {
    var a
    a=b=c=9
    console.log(a)
    console.log(b)
    console.log(c)
}
f1()
console.log(c)
console.log(b)
console.log(a)