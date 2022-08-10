function sumOfArray(numbers) {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
    }
    return sum;
}
// let numbers = [10, 20, 50, 100, 70];
// let output = sumOfArray(numbers);
// console.log(output);

// get odd number from array 
function getOddFromArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
let numbers = [47, 30, 10, 31, 63];
let oddNumberArray = getOddFromArray(numbers);
let oddTotal = sumOfArray(oddNumberArray);
console.log(oddNumberArray);
console.log("Odd number total = " + oddTotal);