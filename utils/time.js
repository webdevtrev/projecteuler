export function time(func){
    const start = Date.now();
    const output = func();
    console.log(`The answer is ${output}`);
    console.log(`${(Date.now() - start) /1000} seconds`);
}