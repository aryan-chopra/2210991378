import express from "express"

const App = express()

App.get('/numbers/:numberId', (req, res) => {
    if (req.params.numberId === 'p') {
        res.send("Prime")
    } else if (req.params.numberId === 'f') {
        res.send("Fibonacci")
    } else if (req.params.numberId === 'e') {
        res.send("Even")
    } else if (req.params.numberId === 'r') {
        res.send("Random")
    }
})

App.listen("8080")
console.log("Listening")
