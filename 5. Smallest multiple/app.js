const start = Date.now();

let counter = 2520;
while (true) {
    let valid = true;
    for (let i = 1; i <= 20; i++) {
        if(!Number.isInteger(counter/i)){
            valid = false;
            break;
        }
    }
    if(valid){
        console.log(counter);
        break;
    }
    counter++;
}
console.log(`It took ${(Date.now() - start) /1000} seconds to get the answer.`);