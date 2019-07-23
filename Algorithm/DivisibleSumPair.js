// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    var numDivisible = 0;
    for (var i = 0; i < ar.length-1; i++){
        for (var x = i + 1; x < ar.length; x++){
            var pairSum = ar[i] + ar[x];
            if ( (pairSum % k) === 0) {
                numDivisible++;
            }
        }
    }
    return numDivisible;

}