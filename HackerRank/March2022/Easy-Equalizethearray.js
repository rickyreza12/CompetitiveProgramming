function equalizeArray(arr) {
    // Write your code here
    let object = {}

    for (const items of arr) {
        if(object[items])
        {
            object[items]++
        }else{
            object[items] = 1;
        }
    }

    //highest 
    let newarray = Object.values(object)
    let max = Math.max(...newarray);
    max
    
    return arr.length - max
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA == valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

// TestAsert(equalizeArray([3, 3, 2, 1, 3]), 2)
// TestAsert(equalizeArray([1,2,2,3]), 2)
TestAsert(equalizeArray([1,2,2, 3, 3]), 3)