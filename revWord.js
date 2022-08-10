function revWord(str) {
    const word = str.split(' ');
    const result = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const element = word[i];
        result.push(element)
    }
    const resultText = result.join(' ');
    return resultText;
}

const myString = "I am a good boy.";
const reverseWord = revWord(myString);
console.log(reverseWord);
