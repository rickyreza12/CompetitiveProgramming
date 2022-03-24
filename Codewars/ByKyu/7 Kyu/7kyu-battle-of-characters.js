function battle(x, y) {
    // Lets the battle begin!
    //create power
    //capital leter is 1 
    // let length = capitalPower.length 
    let capitalPower = createPower("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1)
    capitalPower

    //lowercase leter is 0.5
    let lowerCasePower = createPower("abcdefghijklmnopqrstuvwxyz", 2)
    lowerCasePower

    let rulesOfPower = {...capitalPower, ...lowerCasePower}

    //combine and translate power
    let first = translatePower(x, rulesOfPower )
    let seconds = translatePower(y, rulesOfPower)

    first
    seconds

    if(first === seconds) return "Tie!"

    return first > seconds ? x : y

}

const createPower = (letters, power) => {
    let object = {};
    for (let i = 0; i < letters.length; i++) {
        object[letters[i]] = (i + 1) / power
    }
    return object
}

const translatePower = (x, objects) => {
    
    let words = [...x]
    let sums = 0;
    for (let i = 0; i < words.length; i++) {
        let value = objects[words[i]]
        sums += value
    }
    
    return sums
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

TestAsert(battle("One", "Two"), "Two");
TestAsert(battle("One", "Neo"), "One");
TestAsert(battle("One", "neO"), "Tie!");
TestAsert(battle("Foo", "BAR"), "Tie!");
TestAsert(battle("Four", "Five"), "Four");
