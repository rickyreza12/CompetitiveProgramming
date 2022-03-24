const cannonsReady = (gunners) => {
    //your solution here
    for (const key in gunners) {
        let value = gunners[key]

        if (value === "nay") {
            return "Shiver me timbers!"
        }
    }

    return "Fire!";
}