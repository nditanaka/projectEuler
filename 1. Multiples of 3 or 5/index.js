function multiplesOf3Or5(limit) {
    /**
     * Find the sum of all the multiples of 3 or 5 below 1000
     * 
     * time complexity: 0(n)
     * space complexity: O(n)
     */
    let nums = []
    console.log('nums', nums)
    console.log('limit',limit)
    for (let i = 0; i < limit; i++){
        if (i % 3 === 0 || i % 5 === 0) {
            nums.push(i)
        }
    }
    let sum = 0
    for(let num of nums){
        sum += num
    }
    console.log('sum',sum)
    return sum
}

console.log(multiplesOf3Or5(1000))