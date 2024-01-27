function removeEveryOther(arr) {
    //your code here
    return arr.filter((value, key) => {
        if(key % 2 != 1) return value
    })
}

const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
TestAsert(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
TestAsert(removeEveryOther([[1, 2]]), [[1, 2]]);
TestAsert(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]), [['Goodbye']]);