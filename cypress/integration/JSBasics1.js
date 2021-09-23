var fruits = ['banana', 'pomo', 'guava', 'apple']
console.log(fruits.sort())
console.log(fruits.reverse())

var numbers = [3,6,76,12,342,45]
console.log(numbers.sort((a, b) => a-b))
console.log(numbers.sort((a, b) => b-a))

function add(a, b){
    return a + b
}
let sum = add(2,5)
console.log(sum)

let sum1 = function(a, b){
    return a + b
}
console.log(sum1(2, 5))

let sum2 = (a, b) => a + b
console.log(sum2(2, 5))