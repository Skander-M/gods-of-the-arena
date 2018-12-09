const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const gladiators = require('./routes/api/gladiators')
app.use('/api/gladiators', gladiators)

const combats = require('./routes/api/combats')
app.use('/api/combats', combats)

const port = process.env.PORT || 8081
app.listen(port, () => console.log(`server started on port ${port}`))


