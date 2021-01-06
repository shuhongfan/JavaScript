sum=0
for (let i = 0; i <=100; i++) {
    if (i%7==0){
        sum+=i
    }
}
console.log(sum)

var name=''
var pwd=''
do {
    name=prompt('用户名:')
    pwd=prompt('密码：')
}while ((name=='admin')&&(pwd=='123456'))