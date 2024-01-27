function minimumDistances(a) {
    // Write your code here 
    let mapObject = {}
    let minDis = 10000;
    for (let i = 0; i < a.length; i++) {
        const currenValues = i
        currenValues
        const isExists = mapObject[a[i]] != undefined
        isExists
        if (isExists) {
            const prev = mapObject[a[i]]
            currenValues
            prev
            let dif = Math.abs(currenValues - prev)
            dif
            if(minDis > dif)
            {
                minDis = dif
            }
        } else {
            mapObject[a[i]] = i
        }
    }

    return minDis === 10000 ? -1 : minDis
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(minimumDistances([7, 1, 3, 4, 1, 7]))