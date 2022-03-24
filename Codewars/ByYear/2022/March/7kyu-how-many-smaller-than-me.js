function smaller(nums) {
    //code me
    //check value next to the curent number
    

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i; j < nums.length; j++) {
            if(nums[i] > nums[j])
            {
                count++;
            }
        }

        nums[i] = count;
    }

    return nums;

}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA.join("") === valueB.join("") ? "no error : " + valueA : "error : " + valueA
    );
};


// TestAsert(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
// TestAsert(smaller([1, 2, 3]), [0, 0, 0]);
TestAsert(smaller([1, 2, 0]), [1, 1, 0]);
// TestAsert(smaller([1, 2, 1]), [0, 1, 0]);
// TestAsert(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
// TestAsert(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);