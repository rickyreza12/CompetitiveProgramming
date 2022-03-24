function beautifulDays(i, j, k) {
    // Write your code here
    let array = []
    for (i; i <= j; i++) {
       
           let numReverse = i.toString().split("").reverse().join("");
           let subNumber = i - numReverse
        //    subNumber
           let divNumber = subNumber / k 
        //    divNumber
           let checkDecimal = divNumber % 1 != 0
        //    checkDecimal
           if(!checkDecimal)
           {
               array.push(i)  
           }
       
    }

    return array.length;
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}


TestAsert(beautifulDays(20,23,6), 2);