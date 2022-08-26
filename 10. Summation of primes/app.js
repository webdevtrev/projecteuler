import {isPrime} from '../util/isPrime.js';
import {Worker, isMainThread, threadId,parentPort} from 'worker_threads';
import { cpus } from 'os';

const numCPUs = cpus().length;
const under = 2000000;
let bigSum = 2;
let counter = 0;


if (isMainThread) {
    const start = Date.now();
    let workArray = [];
    for (let i = 0; i < numCPUs; i++) {
        const worker = new Worker('./app.js');
        workArray.push(worker)
    }

    workArray.forEach(workman => {
        workman.once('message', (message) => {
            bigSum += parseInt(message);
            counter++;
            if (counter ==numCPUs){
                console.log(bigSum);
                console.log(`It took ${(Date.now() - start) /1000} seconds to get the answer.`);
            }
          });
    });
    
} 
else {
    var sum = 0;
    for (let i = Math.floor(under/numCPUs)*(threadId-1)+1; i < Math.floor(under/numCPUs)*threadId; i+=2) {
        if(isPrime(i))
        {
            sum += i;
        } 
    }
    parentPort.postMessage(sum);
}