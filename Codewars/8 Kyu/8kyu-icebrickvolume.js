function iceBrickVolume(radius, bottleLength, rimLength) {
    // Your code should be here ;)
    //valume bottleLength - volume ringlength
    
    return ( bottleLength - rimLength ) * 2 * radius * radius

}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(iceBrickVolume(1, 10, 2), 16)
TestAsert(iceBrickVolume(5, 30, 7), 1150)