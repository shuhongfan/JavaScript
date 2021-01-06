function reverse(arr) {
    var newarr=[]
    for (let i = 0; i <arr.length; i++) {
        newarr[arr.length-i-1]=arr[i]
    }
    return newarr
}
var arr=[1,53,5,7,5,6,4,55,2,654]
console.log(arr)
console.log(reverse(arr))

function max(arr) {
    var max=0
    for (let i = 0; i <=arr.length; i++) {
        if (arr[i]>=max){
            max=arr[i]
        }
    }
    return max
}

console.log(max(arr))


function sort(arr) {
    for (let i = 0; i <=arr.length; i++) {
        for (let j = 0; j <=arr.length; j++) {
            if (arr[j]>arr[j+1]){
                var tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }
    return  arr
}

console.log(sort(arr))

