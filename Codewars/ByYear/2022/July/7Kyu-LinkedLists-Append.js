const Node = (data) => {
    this.data = data;
    this.next = null;
}

const append = (listA, listB) => {
    console.log(listA)

}

const TestAsert = (valueA, valueB) => {
    try {
        return console.log(valueA === valueB)
    } catch (error) {
        console.error(error.message)
    }
}


TestAsert(append(null, null), null);
TestAsert(append(null, buildOneTwoThree()), buildOneTwoThree());
TestAsert(append(buildOneTwoThree(), null), buildOneTwoThree());
TestAsert(append(new Node(1), new Node(2)), buildOneTwo());
TestAsert(append(new Node(2), new Node(1)), buildTwoOne());
TestAsert(append(new Node(2), new Node(1)).next.next, null);
TestAsert(append(buildOneTwoThree(), buildFourFiveSix()), buildOneTwoThreeFourFiveSix());
TestAsert(append(buildFourFiveSix(), buildOneTwoThree()), buildFourFiveSixOneTwoThree());
TestAsert(append(buildFourFiveSix(), buildOneTwoThree()).next.next.next.next.next.next, null);