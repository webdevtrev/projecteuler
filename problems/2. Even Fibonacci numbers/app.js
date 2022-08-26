const start = Date.now();
let prevPrev = 1;
let prev = 2;
let sum = prev;
while (prev +prevPrev < 4000000) {
    if((prev+prevPrev)%2==0){
        sum  += (prev + prevPrev);
    }
    const temp = prev + prevPrev;
    prevPrev = prev;
    prev = temp;
}
console.log(sum);
console.log(`${(Date.now() - start) /1000} seconds`);