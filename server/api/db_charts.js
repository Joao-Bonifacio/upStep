const db2 = require('mongoose')

//connect mongodb
db2.Promise = global.Promise
db2.connect('mongodb+srv://jhow:jhow044@upstep.fkjjkmz.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{ console.log('db2 connect...') }).catch((err)=>{ console.log('failed to connect db2...',err.message) })

//set model
const Schema = db2.Schema
const chartSchema = new Schema({
    _id:{ type: String },
    bar:{ type: Array },
    pie:{ type: Array },
    card:{ type: Array}
},{collection:'chart'})

//set colection
const chart = db2.model('charts', chartSchema)

//add chart
async function add(id, bar, pie, card) {
    await new chart({ _id: id, bar: bar, pie: pie, card: card }).save()
}
//add(id,bar,pie,card)

//get chart
async function get(id) {
    if (err)
        console.log(err.message)
    const data = await chart.find({ id: id })
    return data
}

module.exports = { chart, add, get }