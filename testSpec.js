//----------------------------APPLICATION FUNCTIONS-------------------------------
//multiplication sample function---------------------------------------------------------
const multiplication=(a, b)=> {
    return a * b;
}

//concatOdds sample function-------------------------------------------------------------
const array1= [3,6,9,12];
const array2= [1,3,4,8];

function concatOff(array1,array2) {
    return [...array1, ...array2]
    .filter(num => num % 2 !== 0)
    .sort((a, b) => a - b);
  }

console.log(concatOff(array1, array2));