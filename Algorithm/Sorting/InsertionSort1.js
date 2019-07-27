/*
Insertion Sort 1 Problem
*/
function insertionSort1(n, arr) {
    var temp = arr[arr.length - 1];
    for (var i = arr.length - 1; i > 0; i--){
        if (arr[i-1] >= temp) {
            arr[i] = arr[i-1];
        } else {
            arr[i] = temp;
        }
        console.log(arr.toString().split(',').join(' '));
    }
   
}