function recursion(number) {
    if (number < 0) {
        return 'only non-negative numbers';
    } else if (number == 0) {
        return 1;
    } else {
        return (number * recursion(number - 1));
    }
}
console.log(`Recursion: ${recursion(3)}`);

function iteration(number) {
    var fact = 1;
    var n;
    if (number < 0) {
        return 'only non-negative numbers';
    }
    for (n = number; n > 1; n--) {
        fact *= n;
    }
    return fact;
};
console.log(`Iteration: ${iteration(3)}`);