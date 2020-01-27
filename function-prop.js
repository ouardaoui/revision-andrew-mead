let MyAccount = {
    name: 'andrew mead',
    expenses: 0,
    amount: 0
}
let change = function(a) {
    a = {}
    a.age = 1
    console.log(a)
    return a
}
change(MyAccount)
console.log(MyAccount)
let b = change(MyAccount)
console.log(b)