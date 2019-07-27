/*
Given an array, find the minimum distance between pairs. If no such pair exist return -1;

Sample Input

6
7 1 3 4 1 7
Sample Output

3
*/
function minimumDistances(a) {
    var minPairDistance = a.length;

    for (var i = 0; i < a.length; i++) {
        var num = a[i];
        for (var x = i + 1; x < a.length; x++){
            if (num === a[x]) {
                var dis = x - i;
                if (dis < minPairDistance) {
                    minPairDistance = dis;
                }
            }
        }
    }
    if (minPairDistance === a.length) {
        return -1;
    }
    return minPairDistance;

}