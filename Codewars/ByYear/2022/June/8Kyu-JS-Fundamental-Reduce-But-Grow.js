function grow(x){
    return x.length !== 0?  x.reduce((a, b) => a * b, 1) : 0
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}


TestAsert(grow([1, 2, 3]), 6);
TestAsert(grow([]), 0);
TestAsert(grow([4, 1, 1, 1, 4]), 16); 
TestAsert(grow([2, 2, 2, 2, 2, 2]), 64); 