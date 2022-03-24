function jumpingOnClouds(c, k) {
    let i = undefined;
    let e = 100;
    while( i !== 0 && e >= 0)
    {
        if(i == undefined)
        {
            i = 0;
        }
        i = (i + k) % c.length;
        
        if(c[i] == 1)
        {
            e -= 3;
        }else{
            e -= 1;
        }
    }

    return e;
}

function jumpingOnClouds2(c, k) {
    let energy = 100;
    let count = 0;
    let index;
    while (index !== 0 && energy >= 0) {
        index
        count === 0 && (index = 0);
        index = (index + k) % c.length;
        
        energy = c[index] > 0 ? energy - 3 : energy - 1;
        index
        energy
        count++;
        count
    }

    return energy;
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

// TestAsert(jumpingOnClouds([0, 0, 1, 0], 2), 96);
// TestAsert(jumpingOnClouds2([0, 0, 1, 0, 0, 1, 1, 0], 2), 92);
TestAsert(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3), 80);
TestAsert(jumpingOnClouds2([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3), 80);
