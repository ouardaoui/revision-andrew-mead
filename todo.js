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

const a = todos.filter(function(todos) {
    return !todos.completed
})
const summary = document.createElement('h2')
summary.textContent = `you have ${a.length} to do left`
document.querySelector('body').appendChild(summary)
todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})
document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log("add a new to do...")
})
document.querySelector('#new-todo').addEventListener('input', function(e) {
    console.log(e.target.value)
})