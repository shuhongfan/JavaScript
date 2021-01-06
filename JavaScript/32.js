function Star(name,age,sex) {
    this.name=name
    this.age=age
    this.sex=sex
    this.sing=function (sang) {
        console.log(sang)
    }
}

var ldh=new Star('刘德华',18,'男')
// 1.构造函数首字母要大写
// 2.构造函数不需要return就可以返回结果
console.log(ldh)
console.log(ldh.name)
ldh.sing('冰雨')

var zxy=new Star('张学友',19,'男')
console.log(zxy)
console.log(zxy.name)
console.log(zxy['age'])
zxy.sing('李香兰')