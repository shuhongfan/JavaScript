let su=0
function sum(arg1,arg2) {
    for (let j = 0; j <=100; j++) {
        su+=j
    }
    return arg1+arg2+su
}

console.log(sum(1,2))

var aa=0
function get(a,b) {
    for (let i = a; i <=b; i++) {
        aa+=i
    }
    return aa
}

console.log(get(0,100))

function getmax(num1,num2) {
    // if (num1>num2){
    //     return num1
    // }else {
    //     return num2
    // }
    return  num1>num2?num1:num2
}

console.log(getmax(10,11))


function getArrMax(arr) {
    var max=arr[0]
    for (let i = 0; i <arr.length; i++) {
        if (arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

console.log(getArrMax([5,2,99,101,67,55]))