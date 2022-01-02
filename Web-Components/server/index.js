const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.options('*', cors())
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
