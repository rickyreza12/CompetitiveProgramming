var min = function (list) {
    let min = list[0];
    for (const item of list) {
        if (min > item) {
            min = item;
        }
    }
    return min;
}

var max = function (list) {
    let max = list[0];
    for (const item of list) {
        if (max < item) {
            max = item;
        }
    }
    return max;
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};


TestAsert(min([-52, 56, 30, 29, -54, 0, -110]), -110);
TestAsert(min([42, 54, 65, 87, 0]), 0);
TestAsert(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
TestAsert(max([5]), 5);
TestAsert(min([-3032]), -3032);
TestAsert(min([ 11483, 24096, 65532, 4677 ]), 4677);