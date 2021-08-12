import {isPrime} from '../util/isPrime.js';

const start = Date.now();

let counter = 1;
let primeCounter = 0;
let lastPrime;



while(true){
    counter++;
    if(isPrime(counter)){
        lastPrime= counter;
        primeCounter++;
    }

    if (primeCounter===10001){
        break;
    }
}

console.log(lastPrime);
console.log(`It took ${(Date.now() - start) /1000} seconds to get the answer.`);