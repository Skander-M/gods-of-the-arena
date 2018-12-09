const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()


//Get Gladiators 
router.get('/', async (req, res) => {
    const gladiators = await loadGladiatorsCollection()
    res.send(await gladiators.find({}).toArray())
})


//Add Gladiator
router.post('/', async (req, res) => {
    const gladiators = await loadGladiatorsCollection()
    await gladiators.insertOne({
        type: req.body.type, 
        name: req.body.name,
    })
    res.status(201).send()
})


async function loadGladiatorsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://Skander-M:skander13@ds127634.mlab.com:27634/gods_of_the_arena', {
        useNewUrlParser : true
    })

    return client.db('gods_of_the_arena').collection('gladiators')
}


module.exports = router