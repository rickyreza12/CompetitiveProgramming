function countBy(x, n) {
    const z = []
    let i = x;
    while(z.length < n)
    {
        z.push(i)
        i+=x
    }
    return z;
}


const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}


TestAsert(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match")
// TestAsert(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Array does not match")