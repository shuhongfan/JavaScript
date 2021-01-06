function Hero(name,type,blood) {
    this.name=name
    this.type=type
    this.blood=blood
    this.attack=function (attack) {
        console.log(attack)
    }
}

var lianpo=new Hero('廉颇','力量型','500血量')
console.log(lianpo)
console.log(lianpo.name)
console.log(lianpo.type)
console.log(lianpo.blood)
for(var k in lianpo){
    console.log(k)
    console.log(lianpo[k])
}
lianpo.attack('近战')

var houyi=new Hero('后裔','射手型','100血量')
console.log(houyi)
houyi.attack('远程')