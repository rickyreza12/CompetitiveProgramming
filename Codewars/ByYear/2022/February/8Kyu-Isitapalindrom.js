function isPalindrome(x) {
    // your code here

    return x.toLowerCase() === [...x].reverse().join("").toLowerCase();
}