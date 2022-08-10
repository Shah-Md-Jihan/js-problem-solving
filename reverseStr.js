function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
    }
    return reversed;
}

const myText = "I love my country very much.";
const reversed = reverseString(myText);
console.log(reversed);