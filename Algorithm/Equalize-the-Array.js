/*
Given an array of integers. Find the minimum number of deletes to equalize array.

Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. 
Determine the minimum number of elements to delete to reach his goal.

For example, if his array is arr = [1,2,2,3], we see that he can delete the 2 elements 1 and 3 leaving arr = [2,2]. 
He could also delete both twos and either the 1 or the 3, but that would take  deletions. 
The minimum number of deletions is 2 .

Sample Input

5
3 3 2 1 3
Sample Output

2   
*/

function equalizeArray(arr) {
    var count = {};
    var max = 1;
    for (var i = 0; i < arr.length; i++) {
        if (count[arr[i]] === undefined) {
            count[arr[i]] = 1;
            
        } else {
            count[arr[i]] += 1;
            if (count[arr[i]] > max) {
                max = count[arr[i]];
            }
        }
    }
    if (max === 1) {
        return arr.length - 1;
    }

    return arr.length - max;

}