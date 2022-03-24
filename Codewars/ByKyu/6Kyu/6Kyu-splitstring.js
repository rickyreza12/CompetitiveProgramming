function solution(str) {
    let result = []

    let newArray = str.length % 2 == 0 ? str : str.concat(["_"])


    for (let i = 0; i <= newArray.length - 2; i += 2) {
        result.push(newArray.slice(i, i + 2))
    }

    return result;
}