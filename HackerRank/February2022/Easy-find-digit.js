
function findDigits(n) {
    // Write your code here
    // split the integer
    // check if every intiger is divisor of n

    let count = 0;
    n.toString().split("").forEach(e => n % e == 0 && e != 0 ? count++ : count);
    return count
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

let testCaseString = ""


// TestAsert(findDigits(12), 2);
// TestAsert(findDigits(1012), 3);

TestAsert(findDigits(123456789), 3) 
// TestAsert(findDigits(114108089), 3) 
// TestAsert(findDigits(110110015), 6) 
// TestAsert(findDigits(121), 2) 
// TestAsert(findDigits(33), 2) 
// TestAsert(findDigits(44), 2) 
// TestAsert(findDigits(55), 2) 
// TestAsert(findDigits(66), 2) 
// TestAsert(findDigits(77), 2) 
// TestAsert(findDigits(88), 2) 
// TestAsert(findDigits(106108048), 5) 