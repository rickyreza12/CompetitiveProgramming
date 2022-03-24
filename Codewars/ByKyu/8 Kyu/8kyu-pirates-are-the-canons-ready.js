const cannonsReady = (gunners) => {
    //your solution here
    for (const key in gunners) {
        let value = gunners[key]
        value
        if(value === "nay")
        {
            return "Shiver me timbers!"
        }
    }

    return "Fire!";
}

const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}
let a = { 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' };
let b = { 'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye' };

TestAsert(cannonsReady(a), 'Fire!');
TestAsert(cannonsReady(b), 'Shiver me timbers!');