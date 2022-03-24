function jumpingOnClouds(c) {
    // Write your code here
    let count = -1;
    for (let i = 0; i < c.length; i++, count++) {
        if( i + 2 < c.length && c[i+2] == 0)
        {
            i++
        }
    }

    return count
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA == valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4)