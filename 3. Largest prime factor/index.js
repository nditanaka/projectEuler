/**
 * Largest prime factor
 * What is the largest prime factor of the number 600851475143 ?
 * 
 * Example:
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * time complexity: O(Sqrt(n))
 * space complecity: O(n)
 */
function generateLargestPrimeFactor(n) {
    let maxPrime = -1;
    // check for divisibility by 2
    while (n % 2 == 0) {
        n = n / 2;
        maxPrime = 2;
    }
    // check for divisibility by 3
    while (n % 3 == 0) {
        n = n / 3;
        maxPrime = 3;
    }
    
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        while (n % i == 0) {
            maxPrime = i;
            n = n / i;
        }
        while (n % (i + 2) == 0) {
            maxPrime = i + 2;
            n = n / (i + 2);
        }
    }        
    console.log(n)
    return n > 4 ? n : maxPrime;
}

console.log(generateLargestPrimeFactor(60000001))