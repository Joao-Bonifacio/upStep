const db2 = require('mongoose')

//connect mongodb
db2.Promise = global.Promise
db2.connect('mongodb+srv://jhow:jhow044@upstep.fkjjkmz.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{ console.log('db2 connect...') }).catch((err)=>{ console.log('failed to connect db2...',err.message) })

//set model
const Schema = db2.Schema
const chartSchema = new Schema({
    key:{ type: String },
    bar:{ type: Object },
    line:{ type: Object }
},{collection:'chart'})

//set colection
const chart = db2.model('charts', chartSchema)

const insert = (o)=>{
    let data = {
        key: o.key,
        bar: o.bar,
        line: o.line
    }
    new chart(data).save()
}

module.exports = { insert }