// Write your code below

const hasUniqueChars =(word) => {
    let uniqueChars = new Set ([])
    for (let i=0; i<word.length; i++) {uniqueChars.add(word[i])}
    return uniqueChars.size === word.length;

};

console.log(hasUniqueChars("Taaaaaylor"));

