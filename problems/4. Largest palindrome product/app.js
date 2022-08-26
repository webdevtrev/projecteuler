import {isPalindrome} from '../../utils/isPalindrome.js';
const start = Date.now();

let palindromes = [];
const largest = 999;
for (let x = largest; x > 0; x--) {
    for (let y = largest; y > 0; y--) {
        if(isPalindrome(String(x*y))){
            palindromes.push(x*y)
        }
    }
}
console.log(Math.max(...palindromes));
console.log(`${(Date.now() - start) /1000} seconds`);