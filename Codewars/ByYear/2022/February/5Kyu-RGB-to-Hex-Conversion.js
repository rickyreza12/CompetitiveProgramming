function rgb(r, g, b) {
    // complete this function  
    let rgbArray = [r, g, b];
    for (var i = 0; i < rgbArray.length; i++) {
        if (rgbArray[i] < 0) {
            rgbArray[i] = 0;
        }

        if (rgbArray[i] > 255) {
            rgbArray[i] = 255;
        }
    }

    rgbArray = rgbArray.map(value => {
        let array = [];
        let word = "ABCDEF";
        let x = value / 16;
        if (x == 0) {
            x = 0;
        } else {
            x = Math.floor(x)
        }
        let y = value % 16

        let max = 0;

        for (var i = 10; i < 16; i++) {
            array[i] = word[i - (i - max)];

            max++;
        }

        for (var i = 0; i <= 9; i++) {
            array[i] = i;
        }

        return `${array[x]}${array[y]}`;
    })

    return rgbArray.join('');
}