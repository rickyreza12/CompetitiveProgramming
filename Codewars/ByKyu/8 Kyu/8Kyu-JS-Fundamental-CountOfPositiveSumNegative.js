function countPositivesSumNegatives(input) {
    //[count positive, sum negative]


    // if > 0 count++
    // if < 0 +++

    // if length = 0 => []
    let count = 0;
    let sumNegatife = 0;
    input.forEach((value) => {
        if (value > 0) {
            count++;
        }
        if(value < 0)
        {
            sumNegatife += value
        }
    })

    return input.length != 0 ? [count, sumNegatife] : [];
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

let testData1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let actual1 = countPositivesSumNegatives(testData1);
let expected1 = [10, -65];
TestAsert(actual1, expected1);

let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let actual = countPositivesSumNegatives(testData);
let expected = [8, -50];
TestAsert(actual, expected);