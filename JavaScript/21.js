var arr=['red','green','blue']

for (let i = 0; i <arr.length; i++) {
    console.log(arr[i])
}

var arr=[2,6,1,7,4]
var sum=0
var avg=0
for (let i = 0; i <arr.length; i++) {
    sum+=arr[i]
}
avg=sum/arr.length
console.log(sum,avg)