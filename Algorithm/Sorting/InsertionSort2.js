/*
Insertion sort Part 2
*/
function insertionSort2(n, arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        for (var x = 0; x < i; x++) {
            var prev = arr[x];

            if (prev > current) {
                //swap position
                var temp = current;
                arr[i] = prev;
                arr[x] = temp;
                current = prev;

            }
            
        }
        console.log(arr.join(' '));    
    }

}