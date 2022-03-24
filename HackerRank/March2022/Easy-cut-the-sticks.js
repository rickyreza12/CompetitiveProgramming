// function cutTheSticks(arr) {
//     // Write your code here
//     //find the minimum number
//     //cut every piece with minimum number
//     //return every cut into the arrray
//     //if array .length = 0 return length of every cutting piece

//     let cuttingPiece = []
    
//     let length = arr.length;
//     cuttingPiece.push(length);
//     while(length > 0)
//     {
//         let minPiece = Math.min(...arr)
//         minPiece
//         let count = 0;
//         for (let i = 0; i < arr.length; i++) {
//             let substract = arr[i] - minPiece;
//             let cutPiece = substract < 0 ? 0 : substract;
            
//             arr[i] = cutPiece
//             if(cutPiece != 0)
//             {
//                 count++
//             }
            
//         }

//         if(count == 0) break;
//         cuttingPiece.push(count)
//         length = length -1
//     }
//     return cuttingPiece
// }

function cutTheSticks(arr) {
    let output = [];
    while (arr.length != 0) {

        let minVal = Math.min(...arr);
        minVal
        arr
        output.push(arr.length);
        for (let i = 0; i < arr.length; i++) {
            let sub = arr[i] - minVal;

            if (sub === 0) {
                arr.splice(i, 1);
                i -= 1;
            } else {
                arr[i] = sub;
            }
         }
    }
    return output;
}

function findMin(arr) {

    let min;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != 0)
        {
            
            min = arr[i]
        }
    }

    for (const items of arr) {
        if (min > items && items > 0) {
            min = items;
        }
    }

    return min
}


const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA.join("") === valueB.join("") ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}
let oupput1 = `8
7
6
4
3
2`

output1 = oupput1.split("\n").map(e => Number(e));
output1

TestAsert(cutTheSticks([5, 4, 4, 2, 2, 8]), [6, 4, 2, 1]);
TestAsert(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]), [8, 6, 4, 1]);
// TestAsert(cutTheSticks([8, 8, 14, 10, 3, 5, 14, 12]), output1);
