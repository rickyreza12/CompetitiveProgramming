function procedure(n) {
    //Your code here!
    let count = 1;
    let array = []
    let value = 0

    while (value <= 100) {
        if (value != 0) array.push(value.toString().split(""))
        value = n * count
        count++
    }
    
    if(value > 0) value = 0

    array = array.join("").split(",").join("");

    for (const item of array) {
        value +=  parseInt(item)
    }
    return value
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

// TestAsert(procedure(30), 18);
// TestAsert(procedure(12), 72);
// TestAsert(procedure(49), 30);
// TestAsert(procedure(17), 48);
TestAsert(procedure(10), 46);