var md5 = require('md5');
// var crypto = require('crypto')

function passHash(str) {
    // return crypto.createHash('md5').update(str).digest('hex')
    return md5(str)
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

TestAsert(passHash('password'), '5f4dcc3b5aa765d61d8327deb882cf99');