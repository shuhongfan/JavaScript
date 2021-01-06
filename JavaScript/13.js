var str=''
for (let i = 1; i <=10; i++) {
    for (let j = i; j <=10; j++) {
        str+='*'
    }
    str+='\n'
}
console.log(str)

var str2=''
for (let i = 0; i <=10; i++) {
    for (let j = 0; j <=i; j++) {
        str2+='*'
    }
    str2+='\n'
}
console.log(str2)

var str3=''
for (let i = 0; i <=10; i++) {
    for (let j = (10-i); j <=10; j++) {
        str3+=' '
    }
    for (let j = i; j <=10; j++) {
        str3+='*'
    }
    str3+='\n'
}
console.log(str3)

var str4=''
for (let i = 0; i <=10; i++) {
    for (let j = (10-i); j <=10; j++) {
        str4+='*'
    }
    for (let j = i; j <=10; j++) {
        str4+=' '
    }
    str4+='\n'
}
console.log(str4)

var str5=''
for (let i = 0; i <=10; i++) {
    for (let j = i; j <=10; j++) {
        str5+='*'
    }
    for (let j = (10-i); j <10; j++) {
        str5+=' '
    }
    for (let j =(10-i); j <10; j++) {
        str5+=' '
    }
    for (let j = i; j <=10; j++) {
        str5+='*'
    }
    str5+='\n'
}
for (let i = 0; i <=10; i++) {
    for (let j = 0; j <=i; j++) {
        str5+='*'
    }
    for (let j =i; j <10; j++) {
        str5+=' '
    }
    for (let j =i; j <10; j++) {
        str5+=' '
    }
    for (let j =(10-i) ; j <=10; j++) {
        str5+='*'
    }
    str5+='\n'
}

console.log(str5)