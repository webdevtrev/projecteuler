export function isPrime(x){
    if(x===1) return false;
    for (let i = 2; i < x/2; i++) {
        if(Number.isInteger(x/i)){
            return false;
        }
    }
    return true;
}