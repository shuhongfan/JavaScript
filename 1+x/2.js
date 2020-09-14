// var weight = prompt('请输入你的体重 单位千克')
// var height = prompt('请输入你的身高 单位米')


// callBMI(weight,height)
// callBMI(60,1.6)
// callBMI(70,1.6)
// callBMI(30,1.6)

function callBMI(weight,height) {
    var BMI = weight / (height * height)
// 保留一位小数 四舍五入
    BMI = BMI.toFixed(1)

// Math.ceil()
// Math.floor()

    var hint = ''
    if (BMI >= 30) {
        hint = '你需要减肥了'
    } else if (BMI >= 25) {
        hint = '你需要控制体重'
    } else if (BMI >= 18.5) {
        hint = '你的体重非常标准'
    } else {
        hint = '你需要增重了'
    }
    document.getElementById('result').innerHTML=`体重: ${weight} 千克, 身高: ${height} 米, BMI: ${BMI}, ${hint}`
}

