const db2 = require('mongoose')

//connect mongodb
db2.Promise = global.Promise
db2.connect('mongodb+srv://jhow:jhow044@upstep.fkjjkmz.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{ console.log('db2 connect...') }).catch((err)=>{ console.log('failed to connect db2...',err.message) })

//set model
const Schema = db2.Schema
const chartSchema = new Schema({
    _id:{ type: String },
    bar:{ type: Object },
    line:{ type: Object }
},{collection:'chart'})

//set colection
const chart = db2.model('charts', chartSchema)

//add chart
const add = async (id,bar,line)=>{
    console.log(id,bar,line)
    await new chart({_id:id,bar:bar,line:line}).save()
}

//get chart
const get = (id)=>{
    const data = chart.find({id:id}).sort({id:1}).exec((err,data)=>{
        console.log(data[0].bar)
        //res.json(...)
    })
}

//update chart
//...

module.exports = { add, get }