// function extraLongFactorials(n) {
//     // Write your code here
//     let count = 1;
//     for (let i = 32; i > 0; i--) {
//         count *= i
//     }

//     let values = BigInt(count)
//     values

// }
function extraLongFactorials(n)
{
    let array = new Array(100);
    array[0] = 1;
    let len = 1;

    for (let i = len; i <= n; i++) {
        const r = multiply(i, array, len);
        array = r.res;
        len = r.size;
    }
    
    let str = '';

    for (let i = len - 1; i >= 0; i--) {
        str += array[i]
    }

    return str
}

function multiply(x, res, size){
    let carry = 0;

    for (let i = 0; i < size; i++) {
        let prod = (res[i] * x) + carry;
        res[i] = prod % 10;
        carry = Math.floor(prod/10);
    }

    while(carry)
    {
        res[size] = carry % 10;
        carry = Math.floor(carry /10);
        size++;
    }

    // res

    return {res, size}
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        Number(valueA) === Number(valueB) ? "no error : " + valueA : "error : " + valueA
    );
};
  
// TestAsert(extraLongFactorials(30), 265252859812191058636308480000000);
// TestAsert(extraLongFactorials(25), 15511210043330985984000000);  
TestAsert(extraLongFactorials(5), 120);  