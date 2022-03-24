//The tree goest trough 2 cycles pf growth every year
//each spring it doubles in height
//each summer its height increase by 1
//weatcher summer, winter, spring autumn

//first time is doubled
//so the queue are more like
//1,2,3,6,7,12
// 1 * 2 , 1 + 1, 3 * 2 , 6 + 1, 7 *2 
// function utopianTree(n) {
//     let cycle = 1;
//     let height = 1;
//     let array = []
//     while (cycle <= n.length)
//     {
//         array.push(height)
//         if(cycle % 2 !== 0)
//         {
//             height *=2;
            
//         }else{
//             height++
            
//         }
//         cycle++;
//     }

//     array

//     return height;
// }

function utopianTree(n) {
    // Write your code here
    let object = {}
    let array = []
    let max = 0;
    //get the highest
    for (const item of n) {
        item
        if(max < item)
        {
            max = item;
        }
    }

    let count = 1;
    //get thevalue of 
    for (let i = 0; i <= max; i++) {
        // object[i] = count;
        array.push(count)
        if(i % 2 == 0)
        {
            count *= 2;
        }
        if(i % 2 == 1)
        {
            count += 1
        }
    }

    // object
    
   return array
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA.join("") === valueB.join("") ? "no error : " + valueA : "error : " + valueA
    );
};
  
TestAsert(utopianTree([3, 0, 1, 4]), [1, 2, 7]);
TestAsert(utopianTree([0, 1, 2, 3, 4, 5]), [1, 2, 3, 6, 7, 14]);

