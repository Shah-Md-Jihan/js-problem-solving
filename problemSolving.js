// procatice problem 1
/* function returnCalculator(money, totalCost) {
    const returnAmount = money - totalCost;
    return returnAmount;
}

const returnMoney = returnCalculator(1000, 700);
console.log(returnMoney); */

// practice problem 2

/* function avgCalculator(mark1, mark2, mark3, mark4, mark5) {
    totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;
    avgMarks = totalMarks / 5;
    return avgMarks;
}

const averageMarksOfStudent = avgCalculator(85, 80, 90, 88, 95);
console.log(averageMarksOfStudent); */

// practice problem 3

/* const text1 = "I am going to be";
const text2 = "an awesome web developer."

const text3 = text1.concat(' ', text2);
console.log(text3); */

// practice problem 4

/* function divider(number, divider) {
    const remainder = number % divider;
    return remainder;
}

const remainginValue = divider(119, 5);
console.log(remainginValue); */

// practice problem 5

/* Var price = 33
var name - Shabana var
    boxName = ‘Cocola;
var 88_price = 34;
var enum = -1;
var _$box’78 = ‘Monika’;
var home-address = “kochu khet” */

// practice problem 6

/* var fruits = ['Apple', 'Banana', 'Orange'];

console.log(fruits.indexOf('Banana'));
fruits[1] = 'Mango';
console.log(fruits);
fruits.pop();
fruits.push('Watermelon');
console.log(fruits); */

// practice problem 7

/* function gradingSystem(marks) {
    if (marks > 100 || marks < 0) {
        return "Please input marks 0 to 100!";
    } else {
        if (marks >= 80) {
            const result = "You have got A";
            return result;
        }
        else if (marks >= 60) {
            const result = "You have got B";
            return result;
        }
        else if (marks >= 50) {
            const result = "You have got C";
            return result;
        }
        else if (marks >= 40) {
            const result = "You have got D";
            return result;
        }
        else {
            const result = "You have got F";
            return result;
        }
    }
}

const myResult = gradingSystem(40);
console.log(myResult); */

/*-------------------------- PROBLEM NO 8 --------------------------------------*/

/* function largestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        const largestNumber = num1;
        return largestNumber;
    }
    else if (num2 > num1 && num2 > num3) {
        const largestNumber = num2;
        return largestNumber;
    }
    else {
        const largestNumber = num3;
        return largestNumber;
    }
}
const largestValue = largestNumber(100, 200, 310);
console.log(largestValue); */


/*----------------------------- PROBLEM -9 --------------------------------*/

/* function isIsosceles(side1, side2, side3) {
    if (side1 === side2 && side1 === side3 && side2 === side3) {
        return "This triange is not a isosceles";
    }
    else if (side1 === side2) {
        return "This triange is isosceles";
    }
    else if (side1 === side3) {
        return "This triange is isosceles";
    }
    else if (side2 == side3) {
        return "This triange is isosceles";
    }
    else {
        return "This triange is not an isosceles";
    }
}

const isosceles = isIsosceles(30, 20, 30);
console.log(isosceles); */

/*---------------------------------- PROBLEM -10 -------------------------------*/

/* function resultSystem(marks) {
    if (marks < 0 || marks > 100) {
        return "Out of mank range!";
    }
    else if (marks < 50) {
        return "Your grade point is F";
    }
    else if (marks >= 50 && marks < 60) {
        return "Your grade point is D";
    }
    else if (marks >= 60 && marks < 70) {
        return "Your grade point is C";
    }
    else if (marks >= 70 && marks < 80) {
        return "Your grade point is B";
    }
    else if (marks >= 80 && marks < 90) {
        return "Your grade point is A";
    }
    else if (marks >= 90) {
        return "Your grade point is A+";
    }
}

const myResult = resultSystem(10);
console.log(myResult); */


/*-------------------------------- PROBLEM -11 --------------------------------*/

// let signal = "yallow";

// if (signal === "red") {
//     console.log("You can't cross the road!");
// }
// else if (signal === "yellow") {
//     console.log("You shoul be stop!");
// }
// else if (signal === "green") {
//     console.log("You can move in the road!");
// }
// else {
//     console.log("Your inuput is wrong");
// }

/*------------------------------------ PROBLEM -12 ------------------------------*/

/* const tasks = ['unlock video on 8pm', 'watch video and practice task', 'takes notes when watching video', 'After end the module you will do practice task', 'If you can not understand anything you should join support session'];

for (let i = 1; i <= 10; i++) {
    console.log(tasks);
} */


/*-------------------------------- PROBLEM -13 ---------------------------------*/

// const tasks = ['unlock video on 8pm', 'watch video and practice task', 'takes notes when watching video', 'After end the module you will do practice task', 'If you can not understand anything you should join support session'];

// let i = 1;
// while (i <= 10) {
//     console.log(tasks);
//     i++;
// }

/*------------------------------- PROBLEM -14 -------------------------------*/
/* const tasks = ['unlock video on 8pm', 'watch video and practice task', 'takes notes when watching video', 'After end the module you will do practice task', 'If you can not understand anything you should join support session'];

let i = 10;
while (i >= 1) {
    console.log(tasks);
    i--;
} */


/*-------------------------- PROBLEM -15 -------------------------------*/

/* const tasks = ['unlock video on 8pm', 'watch video and practice task', 'takes notes when watching video', 'After end the module you will do practice task', 'If you can not understand anything you should join support session'];

for (let i = 10; i >= 1; i--) {
    console.log(tasks);
} */


/*---------------------------------- PROBLEM -16 -----------------------------*/

/* const money = 81000;

if (money > 80000) {
    console.log('I will buy mac');
}
else if (money > 60000) {
    console.log('I will buy gaming laptop');
}
else if (money > 40000) {
    console.log('I will buy lenevo youga');
}
else if (money > 20000) {
    console.log('I will buy used laptop');
}
else {
    console.log('I will do my work on mobile.');
} */

/*-------------------------------- PROBLEM -17 -----------------------------*/

/* const mon = "Ajke amar mon valo ney";

for (let i = 1; i < 40; i++) {
    console.log(mon);
} */


/*-------------------------------- PROBLEM -18 -----------------------------*/

/* const mon = "Ajke amar mon valo ney";
let i = 1;
while (i < 40) {
    console.log(mon, i);
    i++;
} */


/*-------------------------------- PROBLEM -19 ------------------------------*/

// for (let i = 58; i < 99; i++) {
//     console.log(i);
// }



/*-------------------------------- PROBLEM -20 --------------------------------*/

// for (let i = 412; i <= 456; i += 2) {
//     console.log(i);
// }


/*--------------------------------- PROBLEM -21 --------------------------------*/

/* for (let i = 581; i <= 623; i += 2) {
    console.log(i);
} */

/*----------------------------- PROBLEM -22 -------------------------------------*/

/* const topics = ['html', 'css', 'bootstrap', 'tailwind', 'javascript'];

for (let i = 0; i < topics.length; i++) {
    console.log(topics[i]);
} */


/*----------------------------- PROBLEM -23 ------------------------------------*/

/* const mobiles = ['symphony', 'nokia', 'itel', 'samsung', 'walton', 'realme'];

let i = 0;

while (i < mobiles.length) {
    console.log(mobiles[i]);
    i++;
} */


/*---------------------------- problem -24 ------------------------------------*/

/* for (let i = 30; i <= 86; i++) {
    if (i == 44) {
        break;
    }
    console.log(i);
} */

/*--------------------------- PROBLEM -25 ------------------------------------*/

/* const books = [
    { name: 'Bangla', price: 120 },
    { name: 'English', price: 220 },
    { name: 'Math', price: 420 },
    { name: 'Physics', price: 170 },
    { name: 'Chemistry', price: 195 }
];

for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (book.price > 200) {
        continue;
    }
    console.log(book.name);
} */
