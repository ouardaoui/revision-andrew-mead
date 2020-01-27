const notes = [{
    title: "My next trip",
    body: "I would like to visit spain"
}, {
    title: "Habbits to week on",
    body: "Exercice,eating ..."
}, {
    title: "offivce modification",
    body: "get a new set"
}, {
    title: "more...",
    body: "coding everday,love sport but ..."
}]
const index = notes.findIndex(function(note, index) {
    return note.title === "more..."
})
console.log(index)

console.log(notes[2].title)