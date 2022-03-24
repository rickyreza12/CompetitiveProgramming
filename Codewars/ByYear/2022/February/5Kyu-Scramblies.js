function scramble(str1, str2) {
    let objects = {};

    for (let word of str1) {
        // console.log(objects)
        if (objects[word]) {
            objects[word]++;
        }
        else {
            objects[word] = 1
        };
    }

    for (let word of str2) {
        //find the value using property of object
        if (!objects[word]) {
            return false
        } else {
            objects[word]--;
        }
    }
    return true;
}