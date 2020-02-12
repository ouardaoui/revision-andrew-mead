const notes = [{
    title: "my nerxt trip",
    body: "I would like to go to spain"
}, {
    title: "Office modification",
    body: "Get a new seat"
}, {
    title: "Habbits to work on",
    body: "Exercise,Eating a bit better",
}]
const filters = {
    searchnote: ""
}
const render = function(notes, filters) {
    const filterednote = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchnote.toLowerCase())
    })
    document.querySelector("#note").innerHTML = ''

    filterednote.forEach(function(note) {
        const a = document.createElement('p')
        a.textContent = note.title
        document.querySelector('#note').appendChild(a)
    })
}
render(notes, filters)
document.querySelector("#button0").addEventListener('click', function(e) {
    e.target.textContent = "the button was clicked"
})
document.querySelector("#button1").addEventListener('click', function() {
    document.querySelectorAll(".paragraph").forEach(function(a) {
        a.remove()
    })
})
document.querySelector("#search").addEventListener('input', function(e) {
    filters.searchnote = e.target.value
    render(notes, filters)
})