function twoStrings(s1, s2) {
    var substr = false;
    
    for (var i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1[i]) !== -1) {
            substr = true;
        }
    }
    if (substr) {
        return 'YES';
    }
    return 'NO';
}