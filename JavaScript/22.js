var arr=[2,6,55,77,52,25,7,100]
var max=[0]
var min=[100]
for (let i = 0; i <arr.length; i++) {
    if (arr[i]>max[0]){
        max[0]=arr[i]
        continue
    }
    if (arr[i]<min[0]){
        min[0]=arr[i]
        continue
    }
}
console.log(max[0])
console.log(min[0])

var arr=['red','green','blue','pink']
var str=''
for (let i = 0; i <arr.length; i++) {
    str+=arr[i]+'|'
}
console.log(str)

var arr=[]
for (let i = 0; i <10; i++) {
    arr[i]=i+1
}
console.log(arr)


var arr=[2,0,6,1,77,0,52,0,25,7]
var arr2=[]
var j=0
for (let i = 0; i <arr.length; i++) {
    if (arr[i]>=10){
        // arr2.push(arr[i])
        // arr2[j]=arr[i]
        arr2[arr2.length]=arr[i]
        j++
    }
}
console.log(arr2)

var arr=[2,0,6,1,77,0,52,0,25,7,7,52]
var arr2=[]
for (let i = 0; i <arr.length; i++) {
    if (arr[i]!=0){
        arr2[arr2.length]=arr[i]
    }
}
console.log(arr2)


var arr=['red','green','blue','pink','purple']
var arr2=[]
for (let i = 0; i <arr.length ; i++) {
    arr2[arr.length-i]=arr[i]
}
console.log(arr2)

