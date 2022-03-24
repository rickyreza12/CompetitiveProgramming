//returns the test score
function scoreTest(str, right, omit, wrong) {
    //insert code here
    return str.filter(a => a == 0).length * right + (str.filter(a => a === 1).length * omit) -  (str.filter(a => a === 2).length * wrong)
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

TestAsert(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1), 9);
TestAsert(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2), 3);