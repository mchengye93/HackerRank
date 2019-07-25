/*
Given an internet n find out how many of it's digit is n divisible by.
*/
function findDigits(n) {
    var num = n.toString().split('');
    var divisor = 0;
    for (var i = 0; i < num.length; i++){
        if (n % num[i] === 0) {
            divisor++;
        }
    }
    return divisor;

}