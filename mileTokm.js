function mileToKm(mile) {
    const km = mile * 1.60934;
    return km;
}

const km = mileToKm(10).toFixed(2);
console.log(km);