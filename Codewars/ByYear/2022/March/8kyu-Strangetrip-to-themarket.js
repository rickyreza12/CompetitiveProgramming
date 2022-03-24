function isLockNessMonster(s) {
    //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
    return /tree fiddy/.test(s) || /tree fifty/.test(s) || /3.50/.test(s);
}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB ? "no Error : " + valueA : "error : " + valueA);
    } catch (error) {
        return console.error(error.message);
    }
}

// console.log("Your girlscout cookies are ready to ship. Your total comes to tree fiddy");
TestAsert(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"), true);
// console.log("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.");
TestAsert(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."), false);
