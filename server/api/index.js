const express = require('express')
const cors = require('cors')
const port = process.env.port || 8080
const app = express()
app.use(express.json())

// set cors
const corsOptions = {
  orign: '*',
  optionsSuccessStatus: 200
}
// create the connection to database
const mysql = async ( f, data )=>{
  const db = require('./db')
  
  switch (f) {
    case 'insert':
      return await db.usrInsert( data )
      break;
    case 'update':
      return await db.usrUpdate( data )
      break;
    case 'delete':
      return await db.usrDelete( data )
      break;
    case 'list':
      return await db.usrSelect( data )
      break;
    default:
      console.log('DB miss...')
  }
}

app.get('/', cors(corsOptions),async ( req,res )=>{
  //req.setHeader('Access-Control-Allow-Origin','*')
  
  const sendData = await mysql( 'list', 'b43e19bcdf3fe7dadaaeb7e6996d430e' )
  res.json( {sendData} )
  
})
//let msg = 'b43e19bcdf3fe7dadaaeb7e6996d430e'
//console.log(msg.length)
app.listen(port, () => console.log(`running on port ${port}...`))