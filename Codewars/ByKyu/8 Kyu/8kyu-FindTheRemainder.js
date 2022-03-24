
/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    // Write your code here
   a
    let count = 0;
    for (const item of a) {
        item
        if(item < 0 || item == 0)
        {
            item
            count++;
        }
    }
    count
    k

    if(count >= k)
    {
        return "NO"
    }else{
        return "YES"
    }
}

const TestAsert = (valueA, valueB) => {
  return console.log(
    valueA === valueB ? "no error : " + valueA : "error : " + valueA
  );
};

// TestAsert(angryProfessor(3, [-1, -3, 4, 2]), "YES");
TestAsert(angryProfessor(2, [0, -1, 2, 1]), "NO");
