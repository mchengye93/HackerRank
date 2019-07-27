/*
Given an array of integer in ascending order find the 3 integers that would satisfy
 a[i] < a[j] < a[k]
 a[j] - a[i] = d;
 a[k] - a[j] = d;
*/
function beautifulTriplets(d, arr) {
    var triplets = [];
    for (var i = 0; i < arr.length - 2; i++){
        var num = arr[i];
        if (arr.indexOf(num + d) !== -1 && arr.indexOf(num + 2*d) !== -1) {
            triplets.push([num, num + d, num + 2 * d]);
        }

    }
    return triplets.length;

}