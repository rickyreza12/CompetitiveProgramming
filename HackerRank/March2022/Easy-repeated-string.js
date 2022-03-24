function repeatedString(s, n) {
    // Write your code here
    let countA = 0;
    let length = s.length
    let remainder = n % length

    if(n >= s.length)
    {
        let indentA = s.slice(0, n).split("").filter(e => e === 'a').length
        
        countA = indentA * Math.floor(n / s.length);
    }

    let variabel = 0;

    while(remainder != 0)
    {
        s[variabel] === 'a' ? countA++ : false
        variabel++
        remainder--
    }

    return countA 
    
}


const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA == valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

// TestAsert(repeatedString('abcac', 10), 4);
TestAsert(repeatedString('aba', 10), 7);
// TestAsert(repeatedString('a', 1000000000000), 1000000000000);
// TestAsert(repeatedString('ababa', 3), 2);