var fibonacci = function (n, memoization = []) {
    if (memoization[n] != null) {
        return memoization[n];
    }
    let result;

    if (n == 0 || n == 1) {
        result = n;
    }
    else {
        result = fibonacci(n - 1, memoization) + fibonacci(n - 2, memoization);
    }
    memoization[n] = result;
    return result;
}