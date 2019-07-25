/*
Lilah has a string,s , of lowercase English letters that she repeated infinitely many times.

Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.

For example, if the string s='abcac' and n=10, the substring we consider is  abcacabcac, the first 10 characters of
her infinite string.  There are  occurrences of a in the substring.
*/
function repeatedString(s, n) {
    var repeatString = '';
    var numTimesRepeat = Math.ceil(n/s.length);
    console.log(numTimesRepeat);
    for (var i = 0; i < numTimesRepeat; i++){
        repeatString += s;
        
    }
    console.log(repeatString);
    var aCount = 0;

    for (var i = 0; i < n; i++){
        if (repeatString[i] === 'a') {
            aCount++;
        }
    }
    return aCount;
 
}