const express = require('express')
const app = express()
const connectDB = require('./Database/Db')

connectDB()

const port = process.env.PORT || 6300

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})