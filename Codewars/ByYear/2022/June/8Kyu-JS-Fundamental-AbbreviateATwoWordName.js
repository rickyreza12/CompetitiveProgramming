function abbrevName(name){
    return name.split(" ").map((value, index) => value[0].toUpperCase()
    ).join(".")
}

const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(abbrevName("Robin Singh"), ["R.S"])