function anagrams(word, words) {
    let string1 = word.split("").sort().join("").toLowerCase();
    let array = [];
    for (const item of words) {
        let string2 = item.split("").sort().join("").toLowerCase();
        if (string1 === string2) {
            array.push(item)
        }
    }

    return array;
}