/*
Sherlock considers a string to be valid if all characters of the string appear the same number of times.
 It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters 
 will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise
  return NO.

For example, if , it is a valid string because frequencies are {a:1, b:1, c:1}. So is s=abcc because we can remove
 one c and have 1 of each character in the remaining string. If s=abccc however, the string is not valid as we can 
 only remove 1 occurrence of c. That would leave character frequencies of {a:1, b:1, c:2}.

 Function Description

Complete the isValid function in the editor below. It should return either the string YES or the string NO.

isValid has the following parameter(s):

s: a string
Input Format

A single string s.
Constraints
1 <= |s| <= 10^5
Each character s[i] E ascii[a-z]
Output Format

Print YES if string s is valid, otherwise, print NO.

Sample Input 0

aabbcd
Sample Output 0

NO
Explanation 0

Given s='aabbcd', we would need to remove two characters, both c and d ->aabb or a and b  ->abcd, to make it valid.
 We are limited to removing only one character, so s is invalid.
*/
function isValid(s) {
    var charCount = {};

    var chars = [];
    for (var i = 0; i < s.length; i++){
        if (charCount[s[i]] === undefined) {
            charCount[s[i]] = 1;
            chars.push(s[i]);
        } else {
            charCount[s[i]] = 1 + charCount[s[i]];
        }
    }
    var changes = 1;
    console.log(charCount);
    console.log(chars);
    
    for (var i = 0; i < chars.length-1; i++) {
        var current = chars[i];
        for (var x = i + 1; x < chars.length; x++) {
            var next = chars[x];
            console.log(current, next);
            
            if (charCount[current] !== charCount[next]) {
                if (charCount[current] > charCount[next]) {
                    if (changes === 0) {
                        return 'NO';
                    }
                    charCount[current]--;
                    changes--;
                    if (charCount[current] !== charCount[next]) {
                        return 'NO';
                    }
                }
                if (charCount[current] < charCount[next]) {
                    if (changes === 0) {
                        return 'NO';
                    }
                    charCount[next]--;
                    changes--;
                    if (charCount[current] !== charCount[next]) {
                        return 'NO';
                    }
                }
                
            }
        }
        
    }
    return 'YES';


}