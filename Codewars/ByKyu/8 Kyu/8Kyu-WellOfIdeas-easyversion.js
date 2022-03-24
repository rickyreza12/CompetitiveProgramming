function well(x) {
    let object = {}

    for (const item of x) {
        if (object[item]) {
            object[item]++;
        } else {
            object[item] = 1;
        }

    }

    console.log(object)
    if (!object['good']) {
        return 'Fail!'
    }
    else if (object['good'] <= 2) {
        // console.log('Publish!') 
        return 'Publish!'
    } else {
        // console.log('I smell a series!') 
        return 'I smell a series!'
    }
}