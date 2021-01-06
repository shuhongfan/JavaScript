var input=prompt('请输入年份')
year=parseInt(input)
if ((year%4==0 && year%100!=0)||(year%400==0)){
    alert('闰年')
}else {
    alert('不是闰年')
}