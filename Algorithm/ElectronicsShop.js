/*
Given prices for keyboard and USB. Find the maximum money that can be spend with a budget of b.
If you cannnot purchase keyboard and USB then return -1
*/
function getMoneySpent(keyboards, drives, b) {
    var max = 0;
    for (var i = 0; i < keyboards.length; i++) {
        for (var x = 0; x < drives.length; x++){
            var combinationCost = keyboards[i] + drives[x];
            if (combinationCost > max && combinationCost <= b) {
                max = combinationCost;
            }
        }
    }

    if (max === 0) {
        return -1;
    }
    return max;

}