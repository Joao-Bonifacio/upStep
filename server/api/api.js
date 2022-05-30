const http = require('http')
const db = require('mongoose')

/*const usrSchema = new Schema({
    id:String,
    name:String,
    privilege:String,
    cookie:String,
},{collection:'users'})
const Usr = db.model("users",usrSchema)*/

/*var userData = '['+
  '{"id":1,"name":"Joao","privilege":"root"},'+
  '{"id":2,"name":"Carlos","privilege":"admin"},'+
  '{"id":3,"name":"David","privilege":"admin"}'+
']'*/

db.connect('mongodb+srv://jhow:jhow123@cluster0.yefyj.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('db connected...')
}).catch((err)=>{
    console.log(err.message)
})

userData = []



const server = http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','localhost')
  res.writeHeader(200,{'Content-Type':'text/html'})
  res.write(userData)
  res.end()
})

server.listen(8080)