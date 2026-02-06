const arr = [23, 21, 19, 110];
function sortMyArray(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(sortMyArray(arr));

// clouser
function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log("Clount value is " + count);
    }
    return inner;
}
const counter = outer();
counter();
counter();
counter();

console.log('*********************************');
const sumOfArray = [3, 45, 67];
const sum = sumOfArray.reduce((a, b) => a + b, 0);
console.log(sum);


console.log('******************Prmise methods*******');
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.reject(30);
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results))
    .catch(err => console.log(err));


console.log('******************Prmise.race & promise.amy*******');