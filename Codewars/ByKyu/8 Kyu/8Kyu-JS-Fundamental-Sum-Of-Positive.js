function positiveSum(arr) {
    return arr.length === 0 ? 0 : arr.filter((value) => value > 0).reduce((a, b) => a + b,  0)
}


const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(positiveSum([1, 2, 3, 4, 5]), 15);
TestAsert(positiveSum([1, -2, 3, 4, 5]), 13);
TestAsert(positiveSum([]), 0);
TestAsert(positiveSum([-1, -2, -3, -4, -5]), 0);
TestAsert(positiveSum([-1, 2, 3, 4, -5]), 9);
