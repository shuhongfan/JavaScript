var str='abaasdffggghhjjkkgfddsssss3444343'
// 1.字符串长度
console.log(str.length)
// 2.取出字符串指定位置的字符
console.log(str[0])
console.log(str[3])
console.log(str[5])
console.log(str[9])
// 3.查找指定字符串是否在以上字符串中存在
console.log(str.indexOf('i'))
console.log(str.indexOf('c'))
console.log(str.indexOf('b'))
// 4.替换指定字符
function replaceAll(str,oldstr,newstr) {
    for (let i = 0; i <str.length; i++) {
        if (str.indexOf(oldstr)!=-1){
            str=str.replace(oldstr,newstr)
        }
    }
    return str
}
console.log(replaceAll(str,'g',22))
console.log(replaceAll(str,'ss','b'))

// 5.截取指定开始位置到结束的字符串
console.log(str.substr(1,5))

// 6.找出以上字符串中出现次数最多的字符和出现的次数
var o={}
for (let i = 0; i <str.length; i++) {
    var chars=str.charAt(i)
    if(o[chars]){
       o[chars]++
    }else {
        o[chars]=1
    }
}
var max=0
var cha=''
for (var k in o){
    if (o[k]>max){
        max=o[k]
        cha=k
    }
}

console.log(o)
console.log(max+'------'+cha)