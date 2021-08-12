const start = Date.now();
loop1: 
for (let x = 0; x < 1000; x++) {
    for (let y = x; y < 1000; y++) {
        for (let z = y; z < 1000; z++) {
            if(x+y+z ===1000 && x<y && y < z && x*x + y*y === z*z){
                console.log(x*y*z);
                break loop1;
            }
        }
    } 
}
console.log(`It took ${(Date.now() - start) /1000} seconds to get the answer.`);