function viralAdvertising(n) {
    // Write your code here
    let shared = 5;
    let liked = 2;
    let cumulativeLike = 0;

    if(n == 1) return liked
    if(n == 0) return cumulativeLike
    for (let i = 2; i <= n; i++) {
        //update shared
        liked = Math.floor(shared/2) 
        shared = liked * 3
        cumulativeLike += liked
    }

    liked = Math.floor(shared/2) 

    return cumulativeLike += liked
}

const TestAsert = (valueA, valueB) => {
    valueA
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

// TestAsert(viralAdvertising(3), 9);
TestAsert(viralAdvertising(4), 12)