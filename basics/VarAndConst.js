const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
//accountId = 2 not alllowed
accountEmail = "abd.com"
accountPassword = "123"
//not advisable below way
accountCity = "ahmedabad"

console.log(accountId,accountEmail,accountPassword,accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity]);
//dont use var use let bcoz of scope problem
