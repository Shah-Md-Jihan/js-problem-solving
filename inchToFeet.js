// inch to feet converter
function inchTofeet(inch) {
    var feet = inch / 12;
    return feet;
}

var output = inchTofeet(62).toFixed(2);
console.log(output);