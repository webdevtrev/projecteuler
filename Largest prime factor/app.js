import {isPrime} from '../util/isPrime.js';
const start = Date.now();

const largest = 600851475143;

for (let i = 2; i < largest; i++){
    if(!Number.isInteger(largest/i)){
        continue;
    }
    if(isPrime(largest/i)){
        console.log(largest/i);
        break;
    }
}
console.log(`It took ${(Date.now() - start) /1000} seconds to get the answer.`);