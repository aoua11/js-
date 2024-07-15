// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 



// Count Characters
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hello")); 




// Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log(capitalizeWords("hello world")); 




// Find Maximum and Minimum
function findMaximum(aou) {
    return Math.max(aou);
}

function findMinimum(aou) {
    return Math.min(aou);
}

console.log(findMaximum([1, 2, 3, 4, 5])); 
console.log(findMinimum([1, 2, 3, 4, 5])); 



// Sum of Array
function sumArray(arr) {
    return arr.reduce((aou, val) => aou + val, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); 


// Filter Array
function filterArray(aou, condition) {
    return aou.filter(condition);
}
console.log(filterArray([1, 2, 3, 4, 5], num => num > 3));




// Factorial
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));


// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));



// Fibonacci Sequence
function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
console.log(fibonacci(5));