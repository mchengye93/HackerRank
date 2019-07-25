/*
Given height of each letter represent by h. Find the area taken by the word.
*/
function designerPdfViewer(h, word) {
    console.log(h);
    var arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var max = -1;

    for (var i = 0; i < word.length; i++){
        var letter = word[i];
        if (h[arr.indexOf(letter)] > max) {
            max = h[arr.indexOf(letter)];
        }
    }
    return max * word.length;
}