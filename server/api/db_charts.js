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
/*
const add = async (id,bar,line)=>{
    await new chart({_id:id,bar:bar,line:line}).save()
}*/

//get chart
/*
const get = async (id)=>{
    chart.find({id:id}).exec((err,data)=>{
        if (err) console.log(err.message)
        console.log(data)
        return this.data
    })
    //return data
}*/

//update chart
//...

module.exports = { chart }