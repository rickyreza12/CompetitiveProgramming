
function kaprekarNumbers(p, q) {
    // Write your code here
    const result = []
    for (let i = p; i <= q; i++) {
        const value = i * i
        let array = [[], []]
        let kaprekaArray = [...value.toString()].map((value) => parseInt(value))
        let digits = i.toString().length
        for (let j = kaprekaArray.length - 1; j >= 0; j--) {
            if (array[1].length !== digits) {
                array[1].unshift(kaprekaArray[j])
            } else {
                array[0].unshift(kaprekaArray[j])
            }
        }
        let leftNumbers = array[1].length === 0 ? 0 : parseInt(array[1].join(''))
        let rightNumbers = array[0].length === 0 ? 0 : parseInt(array[0].join(''))
        let total = leftNumbers + rightNumbers
        if (total == i) {
            result.push(i)
        }
    }

    result.length === 0 ? console.log("INVALID RANGE") : console.log(result.join(" ")) 
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA.join("") === valueB.join("") ? "no error : " + valueA : "error : " + valueA
    );
};

let failedTestCase1 = "1 9 45 55 99 297 703 999 2223 2728 4950 5050 7272 7777 9999 17344 22222 77778 82656 95121 99999"
failedTestCase1 = failedTestCase1.split(" ").map((item) => parseInt(item))
failedTestCase1

// TestAsert(kaprekarNumbers(1, 100), [1, 9, 45, 55, 99])
TestAsert(kaprekarNumbers(1, 99999), failedTestCase1)