const start = Date.now();

let nums = Array.from({length: 100}, (_, i) => i + 1);

const squareOfSums = Math.pow(nums.reduce((accumulator, currentValue)=>accumulator+currentValue),2)

const sumOfSquares = nums.reduce((accumulator, currentValue)=>accumulator+Math.pow(currentValue,2))

console.log(squareOfSums-sumOfSquares);
console.log(`It took ${(Date.now() - start) /1000} seconds to get the answer.`);