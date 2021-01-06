function jsq() {
    do {
        var str='\'欢迎使用简易计算器：\n1.加法计算\n2.减法计算\n3.乘法计算\n4.除法计算\n5.退出\n请输入您的选项\''
        var do1=prompt(str)
        if (do1=='5'){
            alert('欢迎再次光临')
            break
        }
        var num1=parseFloat(prompt('请输入数字1'))
        var num2=parseFloat(prompt('请输入数字2'))
        var sum=0
        switch (do1) {
            case '1':{
                sum=num1+num2
                alert(sum)
                continue
            }
            case '2':{
                sum=num1-num2
                alert(sum)
                continue
            }
            case '3':{
                sum=num1*num2
                alert(sum)
                continue
            }
            case '4':{
                sum=num1/num2
                alert(sum)
                continue
            }
            case '5':{
                alert('欢迎再次光临')
                break
            }
        }
    }while (1)
}
jsq()