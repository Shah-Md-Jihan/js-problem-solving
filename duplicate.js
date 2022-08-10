const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'febul', 'abul', 'kabul', 'cabul', 'jabul', 'dabul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);