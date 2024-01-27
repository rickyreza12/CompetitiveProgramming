// Sum Numbers
function sum (numbers) {
    if(numbers.length === 0) return 0
    return numbers.length > 1 ? numbers.reduce((a, b) => a + b, 0) : numbers[0];
};


const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}


TestAsert(sum([]), 0);
TestAsert(sum([1, 5.2, 4, 0, -1]), 9.2);
