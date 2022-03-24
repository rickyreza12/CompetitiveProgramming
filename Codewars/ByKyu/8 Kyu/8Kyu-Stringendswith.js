function solution(str, ending) {
    // TODO: complete
    return str.endsWith(ending);
}

function solution(str, ending) {
    // TODO: complete
    let arraystring = [];
    let arraystart = []

    if (ending == "") {
        return true;
    }

    let indes = str.length - ending.length;

    for (var i = 0; i < str.length; i++) {
        if (i == indes) {
            arraystart.push(str[i])
            indes++;
        }

    }

    console.log(arraystart);

    for (var i = 0; i < ending.length; i++) {
        if (arraystart[i] == ending[i]) {
            arraystring.push(arraystart[i] == ending[i])
        }
    }

    console.log(arraystring);
    if (arraystring.length <= 0 || arraystring.length != ending.length) {
        return false;
    }

    for (const item of arraystring) {

        if (item === false) {
            return false;
        } else {
            return true;
        }
    }

}