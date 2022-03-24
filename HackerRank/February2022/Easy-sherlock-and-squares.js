

function squares(a, b) {
    // Write your code here
    let count = 0;
    let value = 0;
    // let i = 0;

    // while(value <= b)
    // {
    //     value = i * i
    //     if(value >= a && value <=b)
    //     {
    //         count++;
    //     }

    //     i++;
    // }

    for (let i = 0; value <= b / 2; i++) {
        value = i * i
        if (a <= value && value <= b) {
            count++;
        }
    }
    return count;
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

let testCaseString = ""

TestAsert(squares(3, 9), 2)
TestAsert(squares(17, 24), 0);
TestAsert(squares(35, 70), 3);
TestAsert(squares(100, 1000), 22);
TestAsert(squares(11, 734), 24);