function ConvertStringToarray(sentences){
    return sentences.split(" ")
}

const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA.join("") === valueB.join("") ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(ConvertStringToarray("Robin Singh"), ["Robin", "Singh"])