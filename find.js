// const array = [{ a: "anas" }, { a: "ayman" }, { a: "salma" }, { a: "sara" }]
// let found = array.find(function(note, index) {
//     return note.a === "ayman";
// })
// console.log(found)
//find reurn items
const notes = [{
    title: "My next trip",
    body: false
}, {
    title: "Habbits to week on",
    body: true
}, {
    title: "offivce modification",
    body: false
}, {
    title: "more...",
    body: true
}]
const found = function(notes) {
    return notes.filter(function(note) {
        return note.body
    })
}
console.log(found(notes))