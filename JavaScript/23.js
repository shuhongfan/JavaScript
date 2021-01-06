var arr=[5,4,55,2,1]
console.log(arr)
// 趟数
for (let i = 0; i <=arr.length-1; i++) {
    // 每一趟交换次数
    for (let k = 0; k <=arr.length-i-1; k++) {
        if (arr[k]>arr[k+1]){
            let tmp=arr[k]
            arr[k]=arr[k+1]
            arr[k+1]=tmp
        }
    }
}
console.log(arr)