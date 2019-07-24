/*
You have been asked to help study the population of birds migrating across the continent.
 Each type of bird you are interested in will be identified by an integer value. Each time a particular
  kind of bird is spotted, its id number will be added to your array of sightings. You would like to be 
  able to find out which type of bird is most common given a list of sightings. Your task is to print the 
  type number of that bird and if two or more types of birds are equally common, choose the type with the
   smallest ID number.

For example, assume your bird sightings are of types arr[1,1,2,2,3]. There are two each of types 1 and 2, and one sighting 
of type 3 . Pick the lower of the two types seen twice: type 1.

Function Description

Complete the migratoryBirds function in the editor below. It should return the lowest type number of the 
most frequently sighted bird.

migratoryBirds has the following parameter(s):

arr: an array of integers representing types of birds sighted
Input Format

The first line contains an integer denoting n , the number of birds sighted and reported in the array arr. 
The second line describes arr as n space-separated integers representing the type numbers of each bird sighted.

Constraints
5 <= n <= 2* 10^5
It is guaranteed that each type is 1,2,3,4, or 5.
Output Format

Print the type number of the most common bird; if two or more types of birds are equally common, choose the 
type with the smallest ID number.

Sample Input 0

6
1 4 4 4 5 3
Sample Output 0

4
*/
function migratoryBirds(arr) {
    var birdCount = {};

    
    for (var i = 0; i < arr.length; i++){
        if (birdCount[arr[i]] === undefined) {
            birdCount[arr[i]] = 1;
        } else {
            birdCount[arr[i]] += 1;
        }
    }
    console.log(birdCount);
    var max = 0;
    for (var key in birdCount) {
        if (birdCount[key] > max) {
            max = birdCount[key];
        }
    }
    for (var i = 1; i <= 5; i++) {
        if (birdCount[i] === max) {
            return i;
        }
    }

}