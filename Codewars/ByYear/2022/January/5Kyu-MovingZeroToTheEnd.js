var moveZeros = function (arr) {
    // TODO: Program me
    let result = [];
    let zeroElement = []

    arr.forEach((element, index) => {
        if (element === 0) {
            zeroElement.push(element);
        } else {
            result.push(element);
        }
    });

    return [...result, ...zeroElement]
}