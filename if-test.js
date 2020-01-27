// let a = false
// if (a) {
//     console.log('welcome here')
// }

// let a = 5
// let b = function() {
//     let a = 2
//     return a
// }
// c = b()
// console.log(a)
// console.log(c)

// let petName = 'isam'
// let petAge = 25
// console.log(`${petName} have ${petAge}`)

// let book = {
//     Mybook: 'the brothers karamazov',
//     author: 'fiodor dostoïevski',
//     page: 1254
// }
// let Summary = function(b) {
//     console.log(`${b.Mybook} by ${b.author}`)
// }
// Summary(book)

 let MyAccount = {
    name: 'andrew mead',
    expenses: 0,
    amount: 0
}
let addExpenses = function(account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}
addExpenses(MyAccount, 2000)
console.log(MyAccount)