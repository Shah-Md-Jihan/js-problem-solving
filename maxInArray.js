function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}

const height = [1000, 167, 190, 120, 165, 137, 360];
const tallest = maxInArray(height);
console.log("Tallest number is = ", tallest);