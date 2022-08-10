const phones = [
    { name: 'Nokia', camera: '13mp', Storage: '64gb', price: 44000 },
    { name: 'Oppo', camera: '16mp', Storage: '128gb', price: 35000 },
    { name: 'Samsung', camera: '13mp', Storage: '64gb', price: 25000 },
    { name: 'Xaomi', camera: '13mp', Storage: '64gb', price: 12000 },
    { name: 'Realme', camera: '13mp', Storage: '64gb', price: 11900 },
    { name: 'Walton', camera: '13mp', Storage: '64gb', price: 14000 },
    { name: 'Realme C12', camera: '13mp', Storage: '64gb', price: 11000 },
];

function cheapestPhone(phones) {
    let cheapestPhone = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapestPhone.price) {
            cheapestPhone = phone;
        }
    }
    return cheapestPhone;
}

const myPhone = cheapestPhone(phones);
console.log(myPhone);