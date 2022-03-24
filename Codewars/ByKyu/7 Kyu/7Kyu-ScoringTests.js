function scoreTest(str, right, omit, wrong) {
    //insert code here
    return str.filter(a => a == 0).length * right + (str.filter(a => a === 1).length * omit) - (str.filter(a => a === 2).length * wrong)
}