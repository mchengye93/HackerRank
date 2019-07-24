/*
Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be 
anagrams of each other if the first string's letters can be rearranged to form the second string. In other 
words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and 
dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on the 
minimum number of character deletions required to make the two strings anagrams. Can you help her find 
this number?

Given two strings,  and , that may or may not be of the same length, determine the minimum number of
 character deletions required to make  and  anagrams. Any characters can be deleted from either of the 
 strings.

For example, if a=cde and b=dcf, we can delete e from string a and f from string b so that both remaining 
strings are cd and dc which are anagrams.

Function Description

Complete the makeAnagram function in the editor below. It must return an integer representing the minimum
 total characters that must be deleted to make the strings anagrams.

makeAnagram has the following parameter(s):

a: a string
b: a string
Input Format

The first line contains a single string, a. 
The second line contains a single string, b.

Constraints
1 <= |a|,|b| <= 10^4
The strings a and b consist of lowercase English alphabetic letters ascii[a-z].
Output Format

Print a single integer denoting the number of characters you must delete to make the two strings anagrams
 of each other.

Sample Input

cde
abc
Sample Output

4
Explanation

We delete the following characters from our two strings to turn them into anagrams of each other:

Remove d and e from cde to get c.
Remove a and b from abc to get c.
We must delete 4 characters to make both strings anagrams, so we print 4 on a new line.
*/
function makeAnagram(a, b) {
    var aCount = {};
    var bCount = {};

    for (var i = 0; i < a.length; i++) {
        if (aCount[a[i]] === undefined) {
            aCount[a[i]] = 1;
        } else {
            aCount[a[i]] = 1 + aCount[a[i]];
        }
    }

    for (var i = 0; i < b.length; i++) {
        if (bCount[b[i]] === undefined) {
            bCount[b[i]] = 1;
        } else {
            bCount[b[i]] = 1 + bCount[b[i]];
        }
    }
 
    for (var key in bCount) {
        if (aCount[key] === undefined) {
            aCount[key] = bCount[key];
        } else {
            if (aCount[key] < bCount[key]) {
                aCount[key] = bCount[key] - aCount[key];
            }

            else if (aCount[key] > bCount[key]) {
                aCount[key] = aCount[key] - bCount[key];
            }
            else {
                delete aCount[key];
            }
        }
    }
    var diffChars = 0;
    for (var key in aCount) {
        diffChars += aCount[key];
    }

    return diffChars;
}