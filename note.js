// //const ps = document.querySelectorAll('p')
// ps.forEach(function(p) {
//     p.textContent = "gfkrvvjfvl"
// })
const notes = [{
    title: "my next trip",
    body: "I would like to go to spain"
}, {
    title: "Habbits to workk on",
    boby: "Exercise,Eating a bit better"
}, {
    title: "modification",
    boby: "Get a new seat"
}]
const filters = {
    text: ''
}
const render = function(notes, filters) {
    const filterednote = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.text.toLowerCase())
    })
    console.log(filterednote)
}
render(notes, filters)
document.querySelector('#creat-note').addEventListener('click', function(e) {
    e.target.textContent = "the note was created"
})
document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.text = e.target.value
    render(notes, filters)


})