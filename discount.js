const firstTicketRate = 100;
const secondTicketRate = 80;
const restTicketRate = 70;

function ticketPrice(ticketQuantities) {
    if (ticketQuantities <= 100) {
        totalPrice = 100 * ticketQuantities;
        return totalPrice;
    }
    else if (ticketQuantities <= 200) {
        const firstTicketPrice = 100 * 100;
        const secondTicketPrice = (ticketQuantities - 100) * 80;
        const totalPrice = firstTicketPrice + secondTicketPrice;
        return totalPrice;
    }
    else {
        const firstTicketPrice = 100 * 100;
        const secondTicketPrice = 100 * 80;
        const restTicketPrice = (ticketQuantities - 200) * 70;
        const totalPrice = firstTicketPrice + secondTicketPrice + restTicketPrice;
        return totalPrice;
    }
}

const totalCost = ticketPrice(201);
console.log(totalCost);