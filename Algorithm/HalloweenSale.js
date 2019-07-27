/*
There is a halloween sale where you can buy  games at a starting price p, for every game you buy price decrease d until
it reaches m which is the minimu price. Given a budget s calculate how many games you can buy.
*/
//p- start price
//d -decrease price
// m - minimum price
// s - budget
function howManyGames(p, d, m, s) {
    var numGames = 0;
    var price = p;
    var budget = s;

    while (budget >= m) {
        budget -= price;
        console.log(budget);

        if (budget >= 0) {
            numGames++;
        } 
        if (price > m) {
            price = price-d;
            
        }
        if (price < m) {
            price = m;
        }
          
    }
    return numGames;

}
