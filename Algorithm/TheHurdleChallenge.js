/*
Find max different between k and all height available.
*/
function hurdleRace(k, height) {
    
    var maxHeight = 0;
    for (var i = 0; i < height.length; i++) {
        if (height[i] > maxHeight) {
            maxHeight = height[i];
        }
    }
    if (maxHeight > k) {
        return maxHeight - k;
    }
    return 0;
}