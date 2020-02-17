// Higher Order Function
const getItem = by => arr => by(arr);

// Pure Function
function plus(a, b) {
    return a + b;
}

const arrNumber = [1, 4, 5, 111, -444];
const maxNumber = arr => Math.max(...arr);
const plusArrNumber = arr => arr.reduce(plus);

const arrWords = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const filterWords = arr => arr.filter(arr => arr.length > 6);
const joinWords = arr => arr.join(`-${1+1}-`);

const getMaxNumber = getItem(maxNumber);
const getFilterWords = getItem(filterWords);
const getJoinWords = getItem(joinWords);
const getPlusNumber = getItem(plusArrNumber);

console.log(getMaxNumber(arrNumber));
console.log(getFilterWords(arrWords));
console.log(getJoinWords(arrWords));
console.log(getPlusNumber(arrNumber));