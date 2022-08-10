function bringSingara(money) {
    var singaraPrice = 10;
    // console.log(singaraPrice);
    var singaraQuantity = money / singaraPrice;
    return singaraQuantity;
}

var singaras = bringSingara(200);
console.log(singaras);