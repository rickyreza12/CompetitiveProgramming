function wrap(height, width, length) {
    //your code here
    //   return (2 * (height + width + (2 * length))) + 20;
    let [p, l, t] = [height, width, length].sort((a, b) => { return b - a });
    let result = 2 * p + 2 * l + 4 * t + 20
    return result;
}