const start = Date.now();

let sum = 0;
for (let i = 1; i < 1000; i++){
    if(Number.isInteger(i/3)||Number.isInteger(i/5)){
        sum += i;
    }
}
console.log(sum);
console.log(`${(Date.now() - start) /1000} seconds`);