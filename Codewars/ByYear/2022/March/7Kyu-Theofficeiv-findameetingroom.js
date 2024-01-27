// function meeting(x) {

//     // let result = 0;
//     for (let i = 0; i < x.length; i++) {
//         if(x[i] === 'O')
//         {
//             return i
//         }
//     }

//     return 'None available'

// }
function meeting(x) {
    return x.indexOf('O') !== -1 ? x.indexOf('O') : 'None available!'
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};


TestAsert(meeting(['X', 'O', 'X']), 1);
TestAsert(meeting(['O', 'X', 'X', 'X', 'X']), 0);
TestAsert(meeting(['X', 'X', 'X', 'X', 'X']), 'None available!');