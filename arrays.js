const a = ['anas', 'ahmed', 'youseef', 'younes', 'yassin', 'issam']
a.pop()
a.shift()
console.log(a)
console.log(a[a.length - 1])
a.forEach(function(todo, index) {
    const num = index + 1
    console.log(`${num}_${todo}`)
})
console.log(a.indexOf('younes'))