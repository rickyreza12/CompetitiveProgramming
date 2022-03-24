// function repeatStr(n, s) {
//     let array = []
//     for (let index = 0; index < n; index++) {
//         array.push(s);

//     }

//     return array.join("");
// }
function repeatStr(n, s)
{
    return n === 0 ? "" : s + repeatStr(n - 1, s);
}


let value = repeatStr(5, "Hello");
value