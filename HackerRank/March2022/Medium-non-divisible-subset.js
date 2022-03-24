function nonDivisibleSubset(k, s) {
    // Write your code here
    //MAXIMAL subset of S
    //where the sums of 2 numbers in s accent not evenly divisible by k 
    // (number 1 + number 2) % != 0
    let object = {}
    for (let j = 0; j < s.length; j++) {
        let value = s[j] % k
        value
        if(object[value])
        {
            object[value].push(s[j])
        }else{
            object[value] = []
        }
    }

    object

    return Object.keys(object).length
}



const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}


// TestAsert(processData(4, [19, 10, 12, 10, 24, 25, 22]), 3);
TestAsert(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]), 3);
// TestAsert(nonDivisibleSubset(3, [1, 7, 2, 4]), 3);
// TestAsert(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]), 11);
