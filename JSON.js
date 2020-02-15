const note = {
        name: "ayoub",
        age: 25,
        location: "kenitra"
    }
    // const userJSON = JSON.stringify(note)
    // console.log(userJSON)
    // localStorage.setItem("user", userJSON)
const JSONuser = localStorage.getItem("user")
const user = JSON.parse(JSONuser)
console.log(`my name is ${user.name},i have ${user.age} i live in ${user.location} `)