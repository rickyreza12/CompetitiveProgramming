// save-the-prisoner
function saveThePrisoner(n, m, s) {
    // Write your code here
    //n prisoners
    //m how many candies
    //distribution seat at s
    // let dist = s;
   return (((m % n) + (s -1)) % n  ) || n
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}


// TestAsert(saveThePrisoner(4, 6, 2), 3);
// TestAsert(saveThePrisoner(5, 2, 1), 2);
TestAsert(saveThePrisoner(7, 19, 2), 6);
// TestAsert(saveThePrisoner(3, 7, 3), 3);


