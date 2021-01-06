function aa() {
    do {
        let sum=0
        num1=prompt('num1')
        num2=prompt('num2')
        point=prompt('point')
        switch (point) {
            case '+':
                sum=num1+num2
                alert(sum)
                continue
            case '-':
                sum=num1-num2
                alert(sum)
                continue
            case '*':
                sum=num1*num2
                alert(sum)
                continue
            case '/':
                sum=num1/num2
                alert(sum)
                continue
        }

        if(point=='quit'||num1=='quit'||num2=='quit'){
            break
        }
    }while (1)
}
aa()