const http = require('http')
const mongoose = require('mongoose')
const db = mongoose()
var userData = '['+
  '{"id":1,"name":"Joao","privilege":"root"},'+
  '{"id":2,"name":"Carlos","privilege":"admin"},'+
  '{"id":3,"name":"David","privilege":"admin"}'+
']'

const server = http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','localhost')
  res.writeHeader(200,{'Content-Type':'text/html'})
  res.write(userData)
  res.end()
})

server.listen(8080)