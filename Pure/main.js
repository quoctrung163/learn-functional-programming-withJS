// Pure Function not Side Effect :))
const number = [1, 5]

function add(...number) {
    return number.reduce((a, b) => a + b, 0);
}
console.log(add(...number));