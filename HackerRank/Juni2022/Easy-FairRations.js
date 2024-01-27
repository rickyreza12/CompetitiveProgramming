function fairRations(B) {
    // Write your code here
    let loaves = 0, i = 0, end = B.length - 1
    while(i < end) 
    {
        if(B[i] % 2)
        {
            B[i]++, B[i+1]++;
            loaves += 2;
        }
        i++
    }
    if(B[end] % 2) return "NO"
    else return loaves
}


const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(fairRations([2, 3, 4, 5, 6]), 4)
TestAsert(fairRations([1, 2]),  "NO")