function stones(n, a, b) {
    // Write your code here
    // return [2, 3, 4]
    let result = new Set();
    if(a == b)
    {
        result.add((n-1) * a)
    }else{
        for (let i = 0; i < n; i++) {
            result.add((n - i - 1) * a + i * b)
        }
    }
    console.log([...result])
    return [...result].sort((a, b) => a - b)
}

const TestAsert = (valueA, valueB) => {
    valueA = valueA.join("")
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(stones(3, 1, 2), '234')
TestAsert(stones(4, 10, 100), '30120210300')