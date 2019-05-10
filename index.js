const express = require('express')
// const https = require('https')
const app = express()
const {
    settings
} = require('./settings')
const {
    test
} = require('./settings')
const package = require('./package')

const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 8080

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const uri = 'mongodb+srv://dbUser:Ale2699@test1-pejx9.mongodb.net/test?retryWrites=true'
const client = new MongoClient(uri, {
    useNewUrlParser: true
})

client.connect(err => {
    if (err) console.log('Error...', err)

    console.log('Connected...')

    const db = client.db('servernode')
    const collection = db.collection('Personaggi')

    collection.find().toArray((err, result) => {
        if (err) throw err
        console.log(result)
    })

    db.collection('Personaggi', (err, collection) => {
        const mario = {
            name: 'Ned',
            cognome: 'Stark'
        }
        collection.insertOne(mario)

        collection.countDocuments((err, count) => {
            if (err) throw err
            console.log('Righe ' + count)
        })
    })

    db.collection('Personaggi', (err, collection) => {
        const newOne = {
            nome: 'Pippo',
            cognome: 'Stark',
            vivo: false
        }
        collection.updateOne({
            _id: ObjectID('5cd54b4ffaaf00127c09af50')
        }, {
            $set: newOne
        }, (err, result) => {
            if (err) throw err
            console.log('Documento Aggiornato')
        })
    })

    collection.deleteOne({ _id: ObjectID('5cd54b4ffaaf00127c09af50') }, { w: 1 }, (err, result) => {
        if (err) throw err
        console.log('Docuumento Cancellato')
    })


    client.close()
})


app.use(express.urlencoded({
    extended: false
}))

const myLogger = (req, res, next) => {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

console.log(settings)
console.log(test)

// app.get('/', (req, res) => {
//   res.send('Ciao')
// })

app.use('/v0.1/users', users)
app.use('/v0.1/personaggi', personaggi)
app.use(`/v${package.version}/personaggi`, personaggi)

app.use((req, res) => {
    res.status(404).send('What???')
})

app.listen(port)