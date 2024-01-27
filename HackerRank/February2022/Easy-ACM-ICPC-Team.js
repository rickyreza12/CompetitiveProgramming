function acmicpcTeam (topic)
{

    let max = 0;
    let countTim = 0;
    let total = []


    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let temp = []

            let A = topic[i]
            let B = topic[j]
            for (let k = 0; k < topic[i].length; k++) {
                
                if(A[k] == 1 || B[k] == 1)
                {
                    temp.push(1);
                }
                
            }

            if(temp.length > max)
            {
                max = temp.length;
                countTim = 1;
            }

            else if(temp.length === max)
            {
                countTim ++
            }

            total.push(temp)
        }
    }
    return [max, countTim]
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA.join("") === valueB.join("") ? "no error : " + valueA : "error : " + valueA
    );
};

let testCase2 = [
"11101",
"10101",
"11001",
"10111",
"10000",
"01110"]

let testCase1 = [
"10101",
"11100",
"11010",
"00101",
]

// TestAsert(acmicpcTeam(['10101', '11110', '00010']), [5, 1]);
TestAsert(acmicpcTeam(testCase2), [5, 6]);
TestAsert(acmicpcTeam(testCase1), [5, 2]);

