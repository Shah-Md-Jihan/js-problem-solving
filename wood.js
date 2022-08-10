function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const chair = 3;
    const table = 10;
    const bed = 50;

    const chairWood = chair * chairQuantity;
    const tableWood = table * tableQuantity;
    const bedWood = bed * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

const woodCalculation = woodCalculator(10, 1, 2);
console.log(woodCalculation);