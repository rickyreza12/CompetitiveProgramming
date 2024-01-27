function howMuchILoveYou(nbPetals) {
    // your code
    let result = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    while (nbPetals > result.length) {
        nbPetals = nbPetals - (result.length)
    }

    return result[nbPetals - 1]
}


const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}


TestAsert(howMuchILoveYou(7), "I love you")
TestAsert(howMuchILoveYou(3), "a lot")
TestAsert(howMuchILoveYou(6), "not at all")