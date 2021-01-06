function fun() {
    for (let i = 0; i <arguments.length; i++) {
        console.log(arguments[i])
    }
}
fun(1,2,3,56,7,1,66,53)


function getMax() {
    var max=arguments[0]
    for (let i = 0; i <arguments.length; i++) {
        if (arguments[i]>max) {
            max = arguments[i]
        }
    }
    return max
}

console.log(getMax(1,2,3,56,7,1,66,53,101))


function reverse(arr) {
    var newArr=[]
    for (let i = 0; i <=arr.length; i++) {
        newArr[arr.length-i]=arr[i]
    }
    return newArr
}
var arr=[1,3,5,7,6,9]
var arr2=['blue','pink','red']
console.log(reverse(arr))
console.log(reverse(arr2))

function sort(arr) {
    for (let i = 0; i <arr.length-1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(sort([1,3,6,8,5]))


function isRunYear(year) {
    var flag=false
    if (year%4==0&&year%100!=0||year%400==0){
        flag=true
    }
    return flag
}

console.log(isRunYear(2000))
console.log(isRunYear(1999))

function backDay() {
    var year=prompt('请你输入年份')
    if(isRunYear(year)){
        alert('闰年')
    }else {
        alert('平年')
    }
}
backDay()


