// Problem solving 1

// var fruits = ['Apple', 'Banana', 'Orange'];
// find the index of Banana
// console.log(fruits.indexOf('Banana'));

// replace Banana with Mango
// console.log(fruits.indexOf('Banana'));
// fruits[1] = 'Mango';
// console.log(fruits);

// remove orange and add watermelon
// fruits.pop();
// fruits.push('Watermelon');
// console.log(fruits);

// Problem solving 2
// var marks = 40;

// if (marks >= 80) {
//     console.log('You have got A');
// }
// else if (marks >= 60) {
//     console.log('You have got B');
// }
// else if (marks >= 50) {
//     console.log('You have got C');
// }
// else if (marks >= 40) {
//     console.log('You have got D');
// }
// else {
//     console.log('You are failed!');
// }


// problem solving 3
// var number1 = 103;
// var number2 = 79;
// var number3 = 1045;

// if (number1 > number2 && number1 > number3) {
//     console.log('largest number is = ' + number1);
// }
// else if (number2 > number1 && number2 > number3) {
//     console.log('largest number is = ' + number2);
// }
// else {
//     console.log('largest number is = ' + number3);
// }



// problem solving 4
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2) {
    console.log('This is a Isosceles');
}
else if (side1 == side3) {
    console.log('This is a Isosceles');
}
else if (side2 == side1) {
    console.log('This is a Isosceles');
}
else if (side2 == side3) {
    console.log('This is a Isosceles');
}
else if (side3 == side1) {
    console.log('This is a Isosceles');
}
else if (side3 == side2) {
    console.log('This is a Isosceles');
}
else {
    console.log('This is not a Isosceles');
}