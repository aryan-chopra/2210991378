import express from "express"

const App = express()

App.get('/numbers/:numberId', (req, res) => {
    res.send(req.params.numberId)
})

App.listen("8080")
console.log("Listening")
