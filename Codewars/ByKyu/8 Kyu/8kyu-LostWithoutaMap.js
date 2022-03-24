function maps(x){
    return  x.map(e => e*2)
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA.join("") === valueB.join("") ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
};

TestAsert(maps([1, 2, 3]), [2, 4, 6]);