function reverseWords(str) {
    // Go for it
    return [...str].reverse().join("").split(" ").reverse().join(" ")

}