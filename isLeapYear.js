function isLeapYear(year) {
    const leapYear = year % 4;
    if (leapYear === 0) {
        return true;
    }
    return false;
}
const leap_year = isLeapYear(1952);
console.log(leap_year);