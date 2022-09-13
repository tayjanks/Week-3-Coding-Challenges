// Write your code below this line.

const findLuckyNumbers = (num) => {
    let numarry = [1,2,3,4,5,6,7,8,9,10]
    let luckynums =[]
    for (let i=0; i<num;i++){
        let x = Math.floor(Math.random() * numarry.length);
        luckynums.push(numarry[x]);
        numarry.splice(x,1)
    }
    return luckynums
}

console.log(findLuckyNumbers(3));