// function permutationEquation(p) {
//     // Write your code here
//     //first is the permutation of 1, and then the second permutations
//     //1,2,3,4,5
//     //1 = p[3]
//     //it is where the value of 1 on index 3 
//     //5, 2, 1
//     //

//     let result = []

//     for (let i = 1; i <= p.length; i++) {
//         let value = p.indexOf(i) + 1
//         value
//         let integralValue = p.indexOf(value) + 1
//         integralValue
        
//         result.push(p.indexOf(p.indexOf(i) + 1) + 1)
//     }

//     let changes = p;
//     let changess = Array.from(changes, (x, i) => changes.indexOf(changes.indexOf(i) + 1) + 1); // array from and set
//     changess

//     return result
// }
function permutationEquation(p) {
    // Write your code here
    //first is the permutation of 1, and then the second permutations
    //1,2,3,4,5
    //1 = p[3]
    //it is where the value of 1 on index 3 
    //5, 2, 1
    //

    let result = []

    for (let i = 1; i <= p.length; i++) {
        result.push(p.indexOf(p.indexOf(i) + 1) + 1)
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

// TestAsert(permutationEquation([5, 2, 1, 3, 4]), [4, 2, 5, 1, 3])
TestAsert(permutationEquation([4, 3, 5, 1, 2]), [1, 3,5, 4,2])


// 5,2,1,3,4 4,2,5,1,3