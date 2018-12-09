const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()


//Get Combats
router.get('/', async (req, res) => {
    const combats = await loadCombatsCollection()
    res.send(await combats.find({}).toArray())
})


//Add Combat
router.post('/', async (req, res) => {
    const combats = await loadCombatsCollection()
    
    gladiators = []
    for (let gladiator of req.body.gladiators){
        gladiators.push(gladiator)
    }
    
    await combats.insertOne({
        gladiators: gladiators,
        createdAt: new Date()
    })
    res.status(201).send()
})



async function loadCombatsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://Skander-M:skander13@ds127634.mlab.com:27634/gods_of_the_arena', {
        useNewUrlParser : true
    })

    return client.db('gods_of_the_arena').collection('combats')
}


module.exports = router