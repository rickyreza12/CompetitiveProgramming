function chocolateFeast(n, c, m) {
    // Write your code here
    let bar =Math.floor(n/c)
    if(bar < m) return bar
    let feast = bar
    let wrapper = bar
    while(wrapper >= m)
    {
        let modulus = wrapper % m
        let result = Math.floor(wrapper / m)
        feast +=  result
        modulus += result
        wrapper = modulus
    }
    return feast
}

const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(chocolateFeast(10, 2, 5), 6)
TestAsert(chocolateFeast(12, 4, 4), 3)
TestAsert(chocolateFeast(6, 2, 2), 5)