function evenNumbers(array, number) {
    // good luck
    let result = []
    for (let i = array.length - 1; i >= 0; i--) {
        if(result.length < number && array[i] % 2 == 0)
        {
            result.unshift(array[i])
        }
    }
    return result
}

const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}


TestAsert(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
TestAsert(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
TestAsert(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);