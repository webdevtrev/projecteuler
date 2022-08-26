const start = Date.now();

let longestCount = 0;
let longestNum = 0;
for (let i = 999999; i > 0; i-=2) {
    let count = 1;
    let n = i;
    
    while (n > 1) {
        n = !(n % 2) ? (n / 2) : ((3 * n)) + 1;
        count++;
    }
    if (count > longestCount){ 
        longestNum = i;
        longestCount = count;
    };
}
console.log(longestNum);

console.log(`${(Date.now() - start) /1000} seconds`);
