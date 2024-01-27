// function happyLadybugs(b) {
//     // Write your code here
//     b
//     let value = b.split('').sort()
//     value   

// }

function happyLadybugs(b){
    let space = false;
    let beside = true;

    for(let i = 0; i < b.length; i++){
        if(b.charAt(i) === `_`){ space = true; }

        else if(b.indexOf(b.charAt(i)) === i){
            let count = 0;
            let j = i + 1;
            let k = i;

            while(j !== 0){
                j = b.indexOf(b.charAt(i), j);

                if(j-k > 1) { beside = false; }
                
                k = j;
                count++;
                j++;
            }
            if(count === 1){ return `NO`; }
        }
    }
    return (space || beside) ? `YES` : `NO`;
}

const TestAsert = (valueA, valueB) => {
    // valueA = valueA.join("")
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

TestAsert(happyLadybugs('RBY_YBR'), 'YES')
// TestAsert(happyLadybugs('X_Y__X'), 'NO')
// TestAsert(happyLadybugs('__'), 'YES')
// TestAsert(happyLadybugs('B_RRBR'), 'YES')