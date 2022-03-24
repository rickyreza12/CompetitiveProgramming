function alphabetPosition(text) {

    let results = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    text = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (alphabet.indexOf(text[i]) != -1) {
            results.push(alphabet.indexOf(text[i]) + 1)
        }
    }

    return results.join(" ");
}