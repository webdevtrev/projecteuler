export function isPrime(x){
    if(x===1) return false;
    else if(x===2 || x===3) return true;
    else if(x % 2 === 0) return false;
    else if(x < 9) return true;
    else if (x % 3 === 0) return false;
    else{
        let r = Math.floor(Math.sqrt(x));
        let f = 5;

        while(f<=r){
            if(x % f === 0) return false;
            if(x % (f+2) === 0) return false;
            f += 6;
        }
        return true;
    }
}