var date=new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

function getTimes() {
    var year=date.getFullYear()
    var month=date.getMonth()+1
    var dates=date.getDate()
    var day=date.getDay()
    var hours=date.getHours()
    hours=hours<10?'0'+hours:hours
    var minutes=date.getMinutes()
    minutes=minutes<10?'0'+minutes:minutes
    var seconds=date.getSeconds()
    seconds=seconds<10?'0'+seconds:seconds
    var arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    console.log('今天是: '+year+' 年 '+month+' 月 '+dates+' 日 '+arr[day])
    console.log('现在是：'+hours+' : '+minutes+' : '+seconds)
}
getTimes()

// 获取1970-今 毫秒数
console.log(date.getTime())
console.log(date.valueOf())
var date3=+new Date()
console.log(date3)
console.log(Date.now())


var date1=new Date(2019,9,1)
console.log(date1)

var date2=new Date('2019-10-1 8:0:0')
console.log(date2)



function conutDown(time) {
    // 返回当前时间总的毫秒数
    var nowTime=+new Date()
    // 返回时用户输入的时间总的毫秒数
    var inputTime=+new Date(time)
    // 剩余时间的秒数
    var times=(inputTime-nowTime)/1000
    var d=parseInt(times/60/60/24)
    d=d<10?'0'+d:d
    var h=parseInt(times/60/60%24)
    h=h<10?'0'+h:h
    var m=parseInt(times/60%60)
    m=m<10?'0'+m:m
    var s=parseInt(times%60)
    s=s<10?'0'+s:s
    return d+'天'+h+'时'+m+'分'+s+'秒'
}

console.log(conutDown('2020-1-31 18:00:00'))