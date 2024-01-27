function cavityMap (map) {
    let cavs = []
    map
    for (let i = 1; i < map.length - 1 ; i++) {
        for (let j = 1; j < map.length - 1; j++) {
            let current = map[i][j]
            if(current > map[i-1][j] && current > map[i+1][j] && current > map[i][j-1] && current > map[i][j+1])
            {
                cavs.push([i, j])
            }
            
        }
    }
    cavs.forEach((cavity) => {
        let str = map[cavity[0]].split('')
        str[cavity[1]] = 'X'
        map[cavity[0]] = str.join('')
    })

    return map
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}
let output = ['1112', '1X12', '18X2', '1234']

TestAsert(cavityMap(['1112', '1912', '1892', '1234']), output)