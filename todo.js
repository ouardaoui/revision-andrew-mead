const todos = [{
    text: 'Ordre cat food',
    completed: false
}, {
    text: 'clean kitchen',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'By food',
    completed: true
}, {
    text: 'Exercise',
    completed: true
}]
const filters = {
    textsearch: ""
}
const render = function(todos, filters) {
    const filteredtodos = todos.filter(function(todos) {
        return todos.text.toLowerCase().includes(filters.textsearch.toLowerCase())
    })
    const a = filteredtodos.filter(function(todo) {
        return !todo.completed
    })
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `you have ${a.length} to do left`
    document.querySelector('#todos').appendChild(summary)
    filteredtodos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}
render(todos, filters)

document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log("add a new to do...")
})
document.querySelector('#new-todo').addEventListener('input', function(e) {
    console.log(e.target.value)
})
document.querySelector('#search').addEventListener('input', function(e) {
    filters.textsearch = e.target.value
    render(todos, filters)
})