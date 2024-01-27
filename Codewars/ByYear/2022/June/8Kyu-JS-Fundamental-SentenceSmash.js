function smash(words) {
    return words.join(" ")
};


const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}
TestAsert(smash([]), "");
TestAsert(smash(["hello"]), "hello");
TestAsert(smash(["hello", "world"]), "hello world");
TestAsert(smash(["hello", "amazing", "world"]), "hello amazing world");
TestAsert(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");