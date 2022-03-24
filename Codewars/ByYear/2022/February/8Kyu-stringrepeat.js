function repeatStr(n, s) {
    return n === 0 ? '' : s + repeatStr(n - 1, s);
}