//Design PDF Viewer
// There is a list of  character heights aligned by index to their letters. For example, 
// 'a' is at index  and 'z' is at index . There will also be a string. Using the letter heights given,
//  determine the area of the rectangle highlight in  assuming all letters are  wide.

// Sample Input 0

// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc
// Sample Output 0

// 9

function designerPdfViewer(h, word) {
    // Write your code here
    //formula word length * tallest 
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let object = {}
    if(h > 7 || h < 1) return console.log("the tall word must be between 0 and 8")
    if(word.length > 10) return console.log("word cannot contain more than 10 letter")

    for (let i = 0; i < alphabet.length; i++) {
        object[alphabet[i]] = h[i]
    }

    let max = 0;
    for (const item of word) {
        if(max < object[item])
        {
            max = object[item]
        }
    }

    return max * word.length
}

const TestAsert = (valueA, valueB) => {
    return console.log(
      valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
  };
  
TestAsert(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc"), 9);
TestAsert(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ,5 ,5, 7], "zaba"), 28);

