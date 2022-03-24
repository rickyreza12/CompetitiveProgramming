function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    //if book is returned on or before the expected return date, no fine will be charget fine =0
    //if the book is returned after the expeted return day but still iwhtin the same calendar month and year as the expected return date
    //fine = 15 x days late
    //if the book is returned after the expected return month but still within the same calender year as the expected return date
    //fine = 500 hackos x moonth late
    //if the book is returned after the calendar year in which it was expected  fine 10000


    if (y1 < y2) return 0;

    let fine = 0;
    if (y1 === y2) {
        if (m1 === m2) {
            d1
            d2
            if (d1 < d2) {

                fine = 0
            }
            else {

                fine = 15 * (d1 - d2)
            }

        } else {
            if (m1 < m2) return 0

            fine = 500 * (m1 - m2);
        }
    } else {
        fine = 10000
    }

    return fine;
}

const TestAsert = (valueA, valueB) => {
    return console.log(
        valueA === valueB ? "no error : " + valueA : "error : " + valueA
    );
};

// TestAsert(libraryFine(14, 7, 2018, 5, 7, 2018), 135);
// TestAsert(libraryFine(6, 6, 2018, 9, 6, 2018), 0);
TestAsert(libraryFine(2, 7, 1014, 1, 1, 1014), 3000);