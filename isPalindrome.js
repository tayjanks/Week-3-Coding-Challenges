// Write your code below

const isPalindrome = (word) => {
    let length = word.length
    for (let i=0; i< length/2; i++)
    if (word[i] !== word[length -1-i]) {return false}
    else {return true}
};

console.log(isPalindrome("raceca"));