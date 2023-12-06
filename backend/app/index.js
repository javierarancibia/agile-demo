const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

// async function main() {
//     await mongoose.connect(`${process.env.DB_URL}`)
// }

// main()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ data: 'Hola mundo!'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})