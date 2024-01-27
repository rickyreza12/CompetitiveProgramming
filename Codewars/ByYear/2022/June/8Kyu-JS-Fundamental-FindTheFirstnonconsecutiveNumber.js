function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
    return null;
}
// function firstNonConsecutive(arr) {
//     console.log(arr)
//     let array = []
//     for (let i = 1; i < arr.length; i++) {
//         // 1-1 = 0 + 1 = 1 => arr[1] == arr[1]
//         let values = arr[i]
//         values
//         let anotherValues = arr[i+1] + 1
//         anotherValues
//         //4 !=  2, 3 
//         array.push([anotherValues, values])
//         let isExists = arr[i - 1] + 1 !== arr[i]
//         isExists
//         array
//         if (arr[i - 1] + 1 !== arr[i]) return arr[i];
//     }
//     return null;
// }
// function firstNonConsecutive(arr) {
//     let difference = arr[1] - arr[0]
//     difference
//     let nonConsecutive = difference
//     let i = 0
//     while(difference === nonConsecutive)
//     {
//         let checkDiff = arr[i+1] - arr[i]
//         checkDiff
//         if(checkDiff != difference)
//         {
//             nonConsecutive = 1
//             return arr[i+1]
//         }
//         i++
//     }
// }

const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}


const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])
// const second = firstNonConsecutive([-3,-2,-1,0,1,2,4,5])
// const negativeExample = firstNonConsecutive([ -3, -1, 0, 1, 2 ])
TestAsert(first, 6)
// TestAsert(second, null)
// TestAsert(negativeExample, -1)
