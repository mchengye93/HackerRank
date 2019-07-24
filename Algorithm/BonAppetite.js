function bonAppetit(bill, k, b) {
    var cost = 0;
    for (var i = 0; i < bill.length; i++){
        if (i !== k) {
            cost += bill[i];
        }
    }
    var split = cost / 2;

    if (split === b) {
        console.log('Bon Appetit');
        return 'Bon Appetit';
    } else {
        console.log(b - split);
        return b - split;
    }

}