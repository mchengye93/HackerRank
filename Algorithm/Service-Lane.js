/*
Given a list of integers showing width at particular indexes. Find minimum width
at given start and end indexes.
Sample Input
width = [2 ,3 ,1 ,2, 3, 2 ,3, 3]
cases =[ [0 ,3],[4,6], [6,7],[3,5], [0,7] ]
Sample Output
[1,2 ,3 , 2,1]
*/
function serviceLane(n, width, cases) {
   
    var minWidth = [];
    for (var i = 0; i < cases.length; i++) {
        var start = cases[i][0];
        var end = cases[i][1];
        var min = width[start];
        for (var x = start; x <= end; x++){
            if (width[x] < min) {
                min = width[x];
            }
        }
        minWidth.push(min);

    }
    return minWidth;
    
}