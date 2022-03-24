function dotCalculator(equation) {
    
    let array = equation.split(" ")
    
    let last = array.pop()
    let first = array.shift();
    let operator = array.join("");
    let total;

    switch (operator) {
        case '//':
            total = first.length / last.length
            break;
        case '+':
            total = first.length + last.length
            break;
        case '-':
            total = first.length - last.length
            break;
        case '*':
            total = first.length * last.length
            break;
        default:
            break;
    }
    let values = ''
    for (let i = 0; i < Math.floor(total); i++) {
        values += '.'
    }

    return values;
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

TestAsert(dotCalculator("..... + ..............."), "....................")
TestAsert(dotCalculator("..... - ..."), "..")
TestAsert(dotCalculator("..... - ."), "....")
TestAsert(dotCalculator("..... * ..."), "...............")
TestAsert(dotCalculator("..... * .."), "..........")
TestAsert(dotCalculator("..... // .."), "..")
TestAsert(dotCalculator("..... // ."), ".....")
TestAsert(dotCalculator(". // .."), "")
TestAsert(dotCalculator(". - ."), "")