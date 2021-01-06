function aa() {
    var a=0
    num=prompt('number')
    for (let i =2; i <=num; i++) {
        if (num%i==0){
            a++
        }
    }
    if (a==0){
        alert('质数')
    }else{
        alert('不是质数')
    }
}
aa()