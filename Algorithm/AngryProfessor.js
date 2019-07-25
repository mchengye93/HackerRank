/*
Given k, min number of student for class to go on and a an array of student time arrival <=0 being on time
 and > 0 late. If min number of student on time is not met then class is cancelled.
*/
function angryProfessor(k, a) {
    var ontime = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i] <= 0) {
            ontime++;
        }
    }

    if (ontime >= k) {
        return 'NO';
    }
    return 'YES';

}