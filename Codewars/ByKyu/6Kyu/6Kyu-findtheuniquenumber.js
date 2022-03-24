function findUniq(arr) {

    let object = {};

    for (const item of arr) {

        if (object[item]) {
            object[item]++;
        } else {
            object[item] = 1;
        }
    }

    for (var name in object) {
        if (object[name] == 1) {
            return Number(name);
        }
    }

}