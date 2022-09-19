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
    line:{ type: Array }
},{collection:'chart'})

//set colection
const chart = db2.model('charts', chartSchema)

//add chart

const add = async (id,bar,line)=>{
    await new chart({_id:id,bar:[bar],line:[line]}).save()
}
//add(id,bar,line)

//get chart
const get = async (id)=>{
    if (err) console.log(err.message)
    const data = await chart.find({id:id})
    return data
}

//update chart
//...

module.exports = { chart, add, get }