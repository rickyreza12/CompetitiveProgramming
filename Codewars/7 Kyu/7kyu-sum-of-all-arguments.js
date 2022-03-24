function sum() {
    // return the sum of all arguments given.
    // let count = 0;
    // for (const item of arguments) {
    //     count += item;
    // }

    // return count;
    return [...arguments].reduce((a, b) => a + b)
}


const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

TestAsert(sum(1), 1)
TestAsert(sum(1, 2), 3)
TestAsert(sum(5, 7, 9), 21)
TestAsert(sum(12, 1, 1, 1, 1), 16)
TestAsert(sum(12, 1, 1, 1, 1, 1, 1), 18)