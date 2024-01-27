function howManyGames(p, d, m, s) {
    // Return the number of games you can buy

    let cost = 0;
    let count = 0;
    let priceList = p
    s
    while(cost <= s)
    {
        cost = cost +  priceList
        priceList = priceList - d;
        if(priceList <= m)
        {
            priceList = m
        }
        count++
    }

    return count - 1
}

const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(howManyGames(20, 3, 6, 85), 7)