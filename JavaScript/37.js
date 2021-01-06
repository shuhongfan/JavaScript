var myMath={
    PI:3.141592653,
    max:function () {
        var max=arguments[0]
        for (let i = 0; i <arguments.length; i++) {
            if (arguments[i]>max){
                max=arguments[i]
            }
        }
        return max
    },
    min:function () {
        var min=arguments[0]
        for (let i = 0; i <arguments.length; i++) {
            if (arguments[i]<min){
                min=arguments[i]
            }
        }
        return min
    }
}
console.log(myMath.PI)
console.log(myMath.max(1,5,9))
console.log(myMath.min(1,5,9))

console.log(Math.PI)
console.log(Math.abs('-5'))
console.log(Math.floor(1.1))
console.log(Math.floor(1.99))
console.log(Math.ceil(2.00001))
console.log(Math.ceil(2.9999999999999))
console.log(Math.round(3.5))
console.log(Math.round(3.9999))
console.log(Math.round(-1.5))

console.log(Math.random())

function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

console.log(getRandom(1,10))

var arr=['张三','张三疯','李四','王五']
console.log(arr[getRandom(0,arr.length-1)])


var random=getRandom(1,50)
var i=10
while(true){
    var num=prompt('你来猜？输入1-10之间的一个数字(只有10次机会) 现在还有'+i+'次机会')
    i--;
    if (i<=0){
        alert('10次机会用完了')
        break
    }
    if(num>random){
        alert('你猜大了')
    }else if(num<random){
        alert('你猜小了')
    }else {
        alert('你猜对了')
        break
    }
}

