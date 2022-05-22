/**
 * Generate fibonacci numbers
 * filter fibonacci numbers that are even and return their sum
 * 
 * time complexity: O(n)
 * space complecity: O(n)
 * Example:
 * 
 * 1, 2, 3, 5 
 */
 function generateFibonacciNumbers(limit) {
    let fibonacciNumbers = [1]
    let lastFib = 1
    for (let i = 0; i < limit; i++){
        let currentFib = (fibonacciNumbers[fibonacciNumbers.length - 2] ? fibonacciNumbers[fibonacciNumbers.length - 2] : 1)+ fibonacciNumbers[fibonacciNumbers.length - 1]
        if(currentFib < limit){
            fibonacciNumbers.push(currentFib)
            lastFib = currentFib
        }
    }
    return fibonacciNumbers
}


let evenFibonacciNumbers = generateFibonacciNumbers(4000000).filter(i => i % 2 === 0)
let sumEvenFibonacciNumbers = evenFibonacciNumbers.reduce(function(i,j){return i + j},0)
console.log('evenFibonacciNumbers', evenFibonacciNumbers)
console.log('sumEvenFibonacciNumbers', sumEvenFibonacciNumbers)