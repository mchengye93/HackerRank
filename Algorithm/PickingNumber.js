/*
Given an array of integers, find and print the maximum number of integers you can select from the array such
 that the absolute difference between any two of the chosen integers is less than or equal to 1 . For example, 
 if your array is a=[1,1,2,2,4,4,5,5,5], you can create two subarrays meeting the criterion: [1,1,2,2] and[4,4,5,5,5] . 
 The maximum length subarray has 5 elements.

Function Description

Complete the pickingNumbers function in the editor below. It should return an integer that represents the length
 of the longest array that can be created.

pickingNumbers has the following parameter(s):

a: an array of integers

Input Format

The first line contains a single integer , the size of the array a. 
The second line contains n space-separated integers a[i] .

Constraints
2 <= n <= 100
The answer will be >= 2 .
Output Format

A single integer denoting the maximum number of integers you can choose from the array such that the absolute
 difference between any two of the chosen integers is <= 1 .

Sample Input 0

6
4 6 5 3 3 1
Sample Output 0

3

Explanation 0

We choose the following multiset of integers from the array: {4,3,3}. Each pair in the multiset has an absolute 
difference <=1 (i.e., |4-3| and |3-3| =0 ), so we print the number of chosen integers, 3, as our answer.
*/
function pickingNumbers(a) {
    var aSort = a.sort((a, b) => a - b);
  
    var max = 0;

    for (var i = 0; i < aSort.length; i++) {
        var current = aSort[i];
        var group = [];
        for (var x = i+1; x < aSort.length-1; x++){
            
    
            var next = aSort[x];
            console.log('Current:', current);
            console.log('Next:', next);

            if (Math.abs(current - next) <= 1) {
                group.push(next);
            }
        }
        console.log(group);
        if (group.length > max) {
            max = group.length+1;
        }
    }
    return max;

}