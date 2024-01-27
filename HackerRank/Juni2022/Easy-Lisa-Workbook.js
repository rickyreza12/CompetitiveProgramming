function workbook(n, k, arr) {
    // Write your code here
    let pages = 0
    let spesial = 0
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= arr[i]; j++) {
            if(k == 1 || j % k == 1)
            {
                pages++
            }
            if(j == pages)
            {
                spesial++
            }
        }
    }
    return spesial
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(workbook(5, 3, [4, 2, 6, 1, 10]), 4)
TestAsert(workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]), 8)