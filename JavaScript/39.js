var arr=[]
var obj={}
console.log(arr instanceof Array)
console.log(obj instanceof Array)
console.log(Array.isArray(arr))
console.log(Array.isArray(obj))

function reverse(arr) {
    // if (arr instanceof Array){
    if (Array.isArray(arr)){
        var newarr=[]
        for (let i = 0; i <arr.length; i++) {
            newarr[arr.length-i-1]=arr[i]
        }
        return newarr
    }else {
        return 'error这个参数必须是数组格式！！！'
    }
}

console.log(reverse([1,2,3]))
console.log(reverse(1,2,3))

// push()数组末尾添加
var arr=[1,2,3]
console.log(arr.push(4,5,6,'pink'))
console.log(arr)

// unshift()数组开头添加
console.log(arr.unshift('red'))
console.log(arr)

// pop删除最后一个元素
console.log(arr.pop())
console.log(arr)

// shift()删除数组第一个
console.log(arr.shift())
console.log(arr)

var arr=[1500,1200,2000,2100,1800]
var newarr=[]
for (let i = 0; i <arr.length; i++) {
    if (arr[i]<2000){
        // newarr[newarr.length]=arr[i]
        newarr.push(arr[i])
    }
}
console.log(newarr)

var arr=['pink','red','blue']
console.log(arr)
arr.reverse()
console.log(arr)

var arr1=[3,4,8,57,45]
console.log(arr1)
arr1.sort(function (a,b) {
    // return a-b
    return b-a
})
console.log(arr1)

var arr=['red','green','blue','pink','blue']
console.log(arr)
console.log(arr.indexOf('blue'))
console.log(arr.lastIndexOf('blue'))
console.log(arr.indexOf('aaa'))

var arr=['c','a','z','a','x','a','x','c','b']
console.log(arr)
function unique(){
    var newarr=[]
    for (let i = 0; i <arr.length; i++) {
        if (newarr.indexOf(arr[i])===-1){
            newarr.push(arr[i])
        }
    }
    return newarr
}

console.log(unique(arr))

// 数组转为字符串
var arr=[1,2,3]
console.log(arr)
console.log(arr.toString())

var arr1=['green','red','blue']
console.log(arr)
console.log(arr1.join('----'))

console.log(aa=arr.concat(arr1))
console.log(aa)

var arr=['c','a','z','a','x','a','x','c','b']
console.log(arr)
console.log(arr.slice(2,5))
console.log(arr)
console.log(arr.splice(3,5))
console.log(arr)

var str='andy'
console.log(str.length)

var str='dsgdssgsd'
console.log(str.indexOf('dss'))