function narcissistic(value) {
    // Code me to return true or false
    const number = value.toString().split("");

    let totalSums = 0;

    number.forEach((e, index) => {
        e = parseInt(e);

        let results = Math.pow(e, number.length);

        totalSums += results;
    })

    return value === totalSums;
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

TestAsert(narcissistic(153), true);