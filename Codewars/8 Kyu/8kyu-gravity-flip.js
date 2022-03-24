const flip = (d, a) => {
    //TODO
    let directions = 'R' === d ? true : false;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (directions) {
                if(a[j] > a[j + 1])
                {
                    swap(a, j, j+1)
                }
            }else{
                if(a[j] < a[j + 1])
                {
                    swap(a, j, j+1)
                }
            }
        }
    }

    return a
}

function swap(a, fp, sp) {
    let temp = a[fp];
    a[fp] = a[sp]
    a[sp] = temp
}


const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA.join("") === valueB.join("") ? "no error : " + valueA : "error : " + valueA
    );
};

TestAsert(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
TestAsert(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);