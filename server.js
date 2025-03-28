import express from "express"
import cors from "cors"
const app = express
const port = 3000

app.request(cors())

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/', (req, res) => {
    res.send('post request')
})

app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`);
    
})