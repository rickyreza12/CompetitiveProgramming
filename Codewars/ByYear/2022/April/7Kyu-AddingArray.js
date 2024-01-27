function arrAdder(arr) {
    let string = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let value = arr[j][i]
            if(value !== '' && typeof value !== "undefined" )
            {
                string.push(value)
            }
        }
        string.push(" ");
    }

    console.log(string)
    return string.join("");
}

const TestAsert = (valueA, valueB) => {
    valueA
    valueB
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

// TestAsert(arrAdder([
//     ['J', 'L', 'L', 'M'],
//     ['u', 'i', 'i', 'a'],
//     ['s', 'v', 'f', 'n'],
//     ['t', 'e', 'e', '']
// ]), "Just Live Life Man");

TestAsert(arrAdder([
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', '']]), "The Mitochondria is the powerhouse of the cell");
