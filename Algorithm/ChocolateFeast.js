/*
There is a chocolate promotion. Each bar cost c and you can exchange one free chocolate bar for every m wraps.
Given a budget of n. Find total number of chocolate bar you can eat before you run out of budget.
*/
//n - budget
// c - cost of chocolate bar
// m - number of wrapper to exchange into free bar
function chocolateFeast(n, c, m) {
    //total number of chocolate bar bought & num of wrapper
    var numOfBar = Math.floor(n / c);
    var numOfWrapper = Math.floor(n / c);

    while (numOfWrapper >= m) {
        var leftOverWraps = numOfWrapper % m;
        var barExchanged = Math.floor(numOfWrapper / m);
        numOfBar += barExchanged;
        //remaining number of wrapper
        numOfWrapper = leftOverWraps + barExchanged;
    }
    return numOfBar;

}