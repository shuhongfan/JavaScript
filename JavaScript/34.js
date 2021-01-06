function Computer(color,weight,brand,type) {
    this.color=color
    this.weight=weight
    this.brand=brand
    this.type=type
    this.film=function (film) {
        console.log(film)
    }
    this.music=function (music) {
        console.log(music)
    }
    this.game=function (game) {
        console.log(game)
    }
    this.code=function (code) {
        console.log(code)
    }
}
var xiaoming=new Computer('red','1.1kg','lenovo','table computer')
console.log(xiaoming)
for (var key in xiaoming){
    console.log(key)
    console.log(xiaoming[key])
}
xiaoming.film('电影')
xiaoming.music('音乐')
xiaoming.game('游戏')
xiaoming.code('代码')


function Button(weight,height,background) {
    this.weight=weight
    this.height=height
    this.background=background
    this.click=function (click) {
        console.log(click)
    }
}
var btn=new Button(50,10,'yellow')
console.log(btn)
for (var k in btn){
    console.log(btn[k])
}
btn.click('点击了')

function Car(weight,color,plate) {
    this.weight=weight
    this.color=color
    this.plate=plate
    this.manned=function (manned) {
        console.log(manned)
    }
    this.goods=function (goods) {
        console.log(goods)
    }
    this.plowing=function (plowing) {
        console.log(plowing)
    }
}
var bmw=new Car(200,'black','鄂A666666')
console.log(bmw)
for(var k in bmw){
    console.log(bmw[k])
}
bmw.manned('可以载人')
bmw.goods('可以拉货')
bmw.plowing('可以耕田')