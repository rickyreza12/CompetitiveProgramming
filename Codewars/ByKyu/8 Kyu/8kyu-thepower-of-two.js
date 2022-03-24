function powersOfTwo(n){
    let result = []
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i)
    }

    return result
  }

  const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA.join("") === valueB.join("") ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(powersOfTwo(0), [1])
TestAsert(powersOfTwo(1), [1, 2])
TestAsert(powersOfTwo(2), [1, 2, 4])