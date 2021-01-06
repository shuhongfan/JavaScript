var sum=0
var avg=0
var odd=0
var even=0
var result=0
for(var i=1;i<=100;i++){
    sum+=i

    if (i%2==0){
        odd+=i
    }else {
        even+=i
    }

    if (i%3==0){
        result+=i
    }
}
console.log(sum)
console.log(sum/100)
console.log('偶数:'+odd)
console.log('奇数:'+even)
console.log('result:'+result)