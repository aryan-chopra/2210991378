import express from "express"

const App = express()

let prevWindow = []

App.get('/numbers/:numberId', async (req, res) => {
    const windowSize = 10
    let response

    // Get numbers from somewhere

    if (req.params.numberId === 'p') {
        response = await fetch("http://20.244.56.144/evaluation-service/primes")
    } else if (req.params.numberId === 'f') {
        response = await fetch("http://20.244.56.144/evaluation-service/fibo")
    } else if (req.params.numberId === 'e') {
        response = await fetch("http://20.244.56.144/evaluation-service/even")
    } else if (req.params.numberId === 'r') {
        response = await fetch("http://20.244.56.144/evaluation-service/rand")
    }

    res.send(response)
})

App.listen("8080")
console.log("Listening")
