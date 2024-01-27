function flatlandSpaceStations(n, c) {
    // Write your code here
    let md = 0
    
    let stations = c
    stations = stations.sort((a, b) => a - b)

    if(stations[0] != 0)
    {
        let distance = Math.floor((stations[0] - 0));
        md = maxDistance(md, distance)
    }

    if(stations[stations.length - 1] != n)
    {
        let distance = Math.floor((n - stations[stations.length - 1]) - 1)
        md = maxDistance(md, distance)
    }

    for (let i = 0; i < stations.length; i++) {
        let distance = Math.floor((stations[i + 1] - stations[i]) / 2)
        md = maxDistance(md, distance)
    }

    return md
}

const maxDistance = (before, after) => {
    return before < after ? before = after : before;
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

// TestAsert(flatlandSpaceStations(5, [0, 4]), 2)
// TestAsert(flatlandSpaceStations(20, [13, 1, 11, 10, 6]), 6)
// TestAsert(flatlandSpaceStations(6, [0,1,2,4,3,5]), 0)
// TestAsert(flatlandSpaceStations(100, [93, 41, 91, 61, 30, 6, 25, 90, 97]), 14)
TestAsert(flatlandSpaceStations(95, [68, 81, 46, 54, 30, 11, 19, 23, 22, 12, 38,,91, 48, 75, 26, 86, 29, 83, 62]), 11)
