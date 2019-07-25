/*
Calculate factorial of n
*/
function extraLongFactorials(n) {
    var factorial = 1;
    for (var i = n; i >= 1; i--) {
        factorial *= i;
    }
    console.log(factorial);
    return factorial;

}