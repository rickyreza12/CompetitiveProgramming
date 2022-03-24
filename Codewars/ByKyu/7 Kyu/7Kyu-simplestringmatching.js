function solve(a, b) {
    //..
    let getIndexAbritari = [...a].indexOf("*");
    if (getIndexAbritari < 0) return a === b;

    let aBefore = a.slice(0, getIndexAbritari);
    let aAfter = a.slice(getIndexAbritari + 1, a.length);

    let j = 0;
    let newArray = [];

    while (j < b.length) {
        if (b[j] != aBefore[j]) {
            newArray.push(b[j]);
        }
        j++;
    }
    for (const item of aAfter) {
        let indexs = newArray.indexOf(item);
        if (indexs >= 0) {
            newArray.pop();
        }
    }

    let result = [...aBefore, ...newArray, ...aAfter].join("");
    return result === b;
}