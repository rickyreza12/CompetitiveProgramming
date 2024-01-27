function stringClean(s)
{
    let pattern = /([0-9])/g
    return s.replace(pattern, '')
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

TestAsert(stringClean("This looks5 grea8t!"), "This looks great!");