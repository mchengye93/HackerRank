/*
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in this pattern in 's 
graphical representation:

a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the 
hourglass sum for every hourglass in , then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following  hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
Our highest hourglass value is  from the hourglass:

0 4 3
  1
8 6 6
Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this
 challenge.

Function Description

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass
 sum in the array.

hourglassSum has the following parameter(s):

arr: an array of integers
Input Format

Each of the  lines of inputs  contains  space-separated integers .

Constraints

Output Format

Print the largest (maximum) hourglass sum found in .

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output

19
*/
function hourglassSum(arr) {
    var max = Number.NEGATIVE_INFINITY;
    var hourglass;
    for (var i = 0; i < 4; i++){
        for (var x = 0; x < 4; x++){
            var sum = arr[i][x] + arr[i][x + 1] + arr[i][x + 2] + arr[i + 1][x + 1]
                + arr[i + 2][x] + arr[i + 2][x + 1] + arr[i + 2][x + 2];
            if (sum > max) {
                max = sum;
                hourglass = [[arr[i][x], arr[i][x + 1], arr[i][x + 2]], [0, arr[i + 1][x + 1], 0], [arr[i + 2][x], arr[i + 2][x + 1], arr[i + 2][x + 2]]];

            }
        }
    }
    return max;

}