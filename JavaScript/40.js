var str='oabcoefoxyozzopp'
// 查找第一个
var index=str.indexOf('o')
// console.log(index)
var num=0
while (index!=-1){
    console.log(index)
    num++
    // 从3后面开始查找 并重新赋值
    index=str.indexOf('o',index+1)
}
console.log('o出现的次数是：'+num)


var arr=['red','blue','red','green','pink','red']
// red出现的位置和次数
// 查找第一个
var index=arr.indexOf('red')
var num=0
while(index!=-1){
    console.log(index)
    num++
    index=arr.indexOf('red',index+1)
}
console.log('red出现的次数是：'+num)

// charAt(index)根据位置返回字符
var str='andy'
console.log(str.charAt(3))
for (let i = 0; i <str.length; i++) {
    console.log(str.charAt(i))
}
// charcodeAt(index) 返回响应索引号的字符assic
console.log(str.charCodeAt(0))
console.log(str[0])

var str='abcoefoxyozzopp'
var o={}
for (let i = 0; i <str.length; i++) {
    var chars=str.charAt(i)
    if(o[chars]){
        o[chars]++
    }else{
        o[chars]=1
    }
}
var max=0
var ch=''
for (var k in o){
    if (o[k]>max){
        max=o[k]
        ch=k
    }
}
console.log(o)
console.log(max+'---'+ch)


var str='andy'
console.log(str.concat('red'))
console.log('andy'+'red')

var str1='改革春风吹满地'
console.log(str1.substr(2,2))
console.log(str1.replace('春风','gg'))
var str3='abcefoxyozzopp'
while(str3.indexOf('o')!==-1){
    str3=str3.replace('o','*')
}
console.log(str3)

var str2='red&pink&blue'
console.log(str2.toUpperCase().split('&'))






