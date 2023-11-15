const accountId = 144553
let accountEmail = "anand.4585@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);


/*
Prefer not to use var
beacuse od issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

