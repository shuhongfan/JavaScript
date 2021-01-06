i=1
while (i<100){
    num=parseFloat(prompt('输入数字'))
    if (num==0){
        i=100
    }

    if (num%2==0){
        alert('偶数')
    }else if (num%2!=0){
        alert('奇数')
    }


}

