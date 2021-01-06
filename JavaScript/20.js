var sum=100
var str=''

do{
    input=prompt('请输入你要的操作：\n1.存钱\n2.取钱\n3.显示余额\n4.退出')
    if (input==1){
        input1=prompt('请输入金额')
        sum+=parseFloat(input1)
        alert('你有'+sum+'元钱')
        continue
    }
    if (input==2){
        input2=prompt('请输入金额')
        sum-=parseFloat(input2)
        alert('你有'+sum+'元钱')
        continue
    }
    if (input==3){
        alert('你有'+sum+'元钱')
        continue
    }
    if (input==4){
        alert('欢迎再次光临！！！')
        break
    }
}while (1)