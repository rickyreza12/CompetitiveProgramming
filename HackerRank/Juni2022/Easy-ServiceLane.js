function serviceLane(n, cases) {
    let result = []
    for (const items of cases) {
        let temp = 100000;
        for (let i = items[0]; i <= items[1]; i++) {
            if(temp > n[i])
            {
                temp = n[i]
            }
        }
        result.push(temp)
    }

    return result
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA.join(" ") === valueB.join(" ") ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]), [1,2,3,2,1] )
