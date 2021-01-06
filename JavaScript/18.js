var sum=0

for (let i = 0; i <=100; i++) {
    if (i%10!=3){
        continue
    }
    sum+=i
}
console.log(sum)

