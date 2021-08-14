const start = Date.now();
const numberOfDivisors = 200;

let counter = 0;
let triangleNum =0;
while(true){
    counter++;
    triangleNum+=counter;
    if(getDivisors(triangleNum).length>numberOfDivisors){
        console.log("Found");
        break;
    }
    
}
console.log(triangleNum);

function getDivisors(num){
    let arr = [1,num]
    for (let i = 2; i <= (num%2?num/3:num/2); i++) {
        if(num%i == 0){
            arr.push(i)
        }
        
    }
    return arr;
}

console.log(`It took ${(Date.now() - start) /1000} seconds to get the answer.`);