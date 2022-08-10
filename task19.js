// function make_avg(num1, num2, num3) {
//     var total = num1 + num2 + num3;
//     var avg = total / 3;
//     /* fuction er vitore output dekhile */
//     // console.log(avg);
//     /* function er bahire output print korle */
//     return avg;
// }

// output = make_avg(100, 100, 100);
// console.log(output);

// function foo() {
//     console.log('foo');
//     bar();
// }

// foo();
// function bar() {
//     console.log('bar');
// }
/* var myArray = [10, 20, 30, 40, 50, 60]
function make_avg(myArray) {
    var total = 0;
    for (var i = 0; i < myArray.length; i++) {
        total += myArray[i];
        var avg = total / myArray.length;
    }
    console.log(avg);
}

make_avg(myArray); */


// has parameter but no return
/* function odd_even(number) {
    if (number % 2 == 0) {
        console.log(number + " is an even number.");
    }
    else {
        console.log(number + " is an odd number.");
    }
}

odd_even(132); */


// has parameter and return
/* function odd_even(number) {
    var result;
    if (number % 2 == 0) {
        result = number + " is a even number."

    }
    else {
        result = number + " is a odd number."
    }
    return result;

}

// console.log(odd_even(10));

var output = odd_even(10);
console.log(output); */


// switch case

/* var color = 'yellow';
switch (color) {
    case 'red':
        console.log('if you try to cross the road you may in danger!');
        break;
    case 'yellow':
        console.log('You should stop');
        break;
    case 'green':
        console.log('You can cross the road');
        break;
    default:
        console.log('wrong input');
} */

// 13 er namata function

/* function namata(number, range) {
    for (i = 1; i <= range; i++) {
        if (i > 10) {
            console.log("Your second perameter should not be grater than 10");
            break;
        }
        console.log(number + " X " + i + " = " + number * i);
    }
}
namata(13, 11); */

// 13 er namat functio with no parameter
/* function Namata() {
    var number = 13;
    var range = 10;
    for (var i = 1; i <= range; i++) {
        console.log(number + " X " + i + " = " + number * i);
    }
}
Namata(); */

// full name function

/* function fullName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
}
var output = fullName("Shah", "Md Jihan");
console.log(output); */

// square value function 

/* function valSquare(value) {
    var square = "Square of your value is = " + value * value;
    return square;
}

var output = valSquare(5);
console.log(output); */


// object tast practice
const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}
console.log(pizza.toppings[2]);