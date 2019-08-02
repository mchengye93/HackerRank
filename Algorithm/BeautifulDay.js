/*
Calculate beautiful days between i and j, a beautiful day if when the difference
between number and it's reverse it divisible by k.

Return number of days that are beautiful between i and j.
*/

function beautifulDays(i, j, k) {
    var beautifulDay = [];
    for (var x = i; x <= j; x++) {
        var number = x;
        var rev = parseFloat( number
                .toString()
                .split('')
                .reverse()
                .join('')
        );
        if (Math.abs(number - rev) % k === 0) {
            beautifulDay.push(x);
        }
    }
    return beautifulDay.length;


}