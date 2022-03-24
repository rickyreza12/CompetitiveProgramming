function appendAndDelete(s, t, k) {
    // Write your code here
    let tIndex = 0;
   
    for (let i = 0; i === tIndex && i < s.length; i++) {
        if(s[i] === t[i])
        {
            tIndex++
        }
    }

    let total =  s.length - tIndex + t.length - tIndex; 
    let values = s.length - tIndex
    let valueA = t.length - tIndex
    valueA
    values

    total

    if(k < total) return "No"

    if(k >= s.length + t.length) return "Yes"

    if((k - total) % 2 == 0) return "Yes"

    return "No"
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};


// TestAsert(appendAndDelete("hackerhappy", "hackerrank", 9), "Yes");
// TestAsert(appendAndDelete("aba", "aba", 7), "Yes");
// TestAsert(appendAndDelete("aaaaaaaaaa", "aaaaa", 7), "Yes");
// TestAsert(appendAndDelete("qwerasdf", "qwerbsdf", 6), "No");
// TestAsert(appendAndDelete("y", "yu", 2), "No");
TestAsert(appendAndDelete("zzzzz", "zzzzzzz",4), "Yes");





