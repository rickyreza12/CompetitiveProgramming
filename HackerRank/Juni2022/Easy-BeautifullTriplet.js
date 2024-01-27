function beautifulTriplets(d, arr) {
    // Write your code here
    const result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const subsValue = arr[j] - arr[i]
            if (subsValue == d) {
                result.push([arr[i], arr[j]])
            }
        }
    }

    const lastResult = []

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i][1] == result[j][0]) {
                lastResult.push([...new Set([...result[i], ...result[j]])])
            }
        }
    }
    return lastResult.length
}

function beautifulTriplets(d, arr) {
    // Write your code here
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        const y = d + arr[i]
        const z = (2 * d) + arr[i]
        if(arr.indexOf(y) !== -1 && arr.indexOf(z) !== -1)
        {
            counter++
        }
    }

    return counter
}


const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]), 3)