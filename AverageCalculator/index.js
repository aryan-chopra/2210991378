import express from "express"

const App = express()

let prevWindow = []

App.get('/numbers/:numberId', async (req, res) => {
    const windowSize = 10
    let response

    // Get numbers from somewhere

    if (req.params.numberId === 'p') {
        response = await fetch("http://20.244.56.144/evaluation-service/primes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0NzAxNjg5LCJpYXQiOjE3NDQ3MDEzODksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUyYWU0OWNjLWNlYTYtNDRlNy1iZjM2LTFhZTkyOGQyYWNkMCIsInN1YiI6ImFyeWFuMTM3OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiJ9LCJlbWFpbCI6ImFyeWFuMTM3OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiIsIm5hbWUiOiJhcnlhbiBjaG9wcmEiLCJyb2xsTm8iOiIyMjEwOTkxMzc4IiwiYWNjZXNzQ29kZSI6IlB3enVmRyIsImNsaWVudElEIjoiZTJhZTQ5Y2MtY2VhNi00NGU3LWJmMzYtMWFlOTI4ZDJhY2QwIiwiY2xpZW50U2VjcmV0IjoiTUFKbVh2WHFFTVNoQ2RIRSJ9.oz4_ENEc2uHtA3wIwpPHAQhEWlToLj61rizBlMb3l_s'
            }
        })
    } else if (req.params.numberId === 'f') {
        response = await fetch("http://20.244.56.144/evaluation-service/primes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0NzAxNjg5LCJpYXQiOjE3NDQ3MDEzODksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUyYWU0OWNjLWNlYTYtNDRlNy1iZjM2LTFhZTkyOGQyYWNkMCIsInN1YiI6ImFyeWFuMTM3OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiJ9LCJlbWFpbCI6ImFyeWFuMTM3OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiIsIm5hbWUiOiJhcnlhbiBjaG9wcmEiLCJyb2xsTm8iOiIyMjEwOTkxMzc4IiwiYWNjZXNzQ29kZSI6IlB3enVmRyIsImNsaWVudElEIjoiZTJhZTQ5Y2MtY2VhNi00NGU3LWJmMzYtMWFlOTI4ZDJhY2QwIiwiY2xpZW50U2VjcmV0IjoiTUFKbVh2WHFFTVNoQ2RIRSJ9.oz4_ENEc2uHtA3wIwpPHAQhEWlToLj61rizBlMb3l_s'
            }
        })
    } else if (req.params.numberId === 'e') {
        response = await fetch("http://20.244.56.144/evaluation-service/primes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0NzAxNjg5LCJpYXQiOjE3NDQ3MDEzODksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUyYWU0OWNjLWNlYTYtNDRlNy1iZjM2LTFhZTkyOGQyYWNkMCIsInN1YiI6ImFyeWFuMTM3OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiJ9LCJlbWFpbCI6ImFyeWFuMTM3OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiIsIm5hbWUiOiJhcnlhbiBjaG9wcmEiLCJyb2xsTm8iOiIyMjEwOTkxMzc4IiwiYWNjZXNzQ29kZSI6IlB3enVmRyIsImNsaWVudElEIjoiZTJhZTQ5Y2MtY2VhNi00NGU3LWJmMzYtMWFlOTI4ZDJhY2QwIiwiY2xpZW50U2VjcmV0IjoiTUFKbVh2WHFFTVNoQ2RIRSJ9.oz4_ENEc2uHtA3wIwpPHAQhEWlToLj61rizBlMb3l_s'
            }
        })
    } else if (req.params.numberId === 'r') {
        response = await fetch("http://20.244.56.144/evaluation-service/primes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0NzAxNjg5LCJpYXQiOjE3NDQ3MDEzODksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUyYWU0OWNjLWNlYTYtNDRlNy1iZjM2LTFhZTkyOGQyYWNkMCIsInN1YiI6ImFyeWFuMTM3OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiJ9LCJlbWFpbCI6ImFyeWFuMTM3OC5iZTIyQGNoaXRrYXJhLmVkdS5pbiIsIm5hbWUiOiJhcnlhbiBjaG9wcmEiLCJyb2xsTm8iOiIyMjEwOTkxMzc4IiwiYWNjZXNzQ29kZSI6IlB3enVmRyIsImNsaWVudElEIjoiZTJhZTQ5Y2MtY2VhNi00NGU3LWJmMzYtMWFlOTI4ZDJhY2QwIiwiY2xpZW50U2VjcmV0IjoiTUFKbVh2WHFFTVNoQ2RIRSJ9.oz4_ENEc2uHtA3wIwpPHAQhEWlToLj61rizBlMb3l_s'
            }
        })
    }

    let jsonRes = await response.json()
    res.send(jsonRes)
})

App.listen("8080")
console.log("Listening")
