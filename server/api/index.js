const express = require('express')
const cors = require('cors')
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const port = process.env.port || 8080
const app = express()
app.use(express.json())
app.use(cors())

// set cors
const corsOptions = {
  orign: 'http://localhost:3000',
  preflightContinue: true,
  credentials: true,
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

app.get('/', cors(corsOptions),async ( req,res,next )=>{
  if (req.headers.key) {
    let ck = req.headers.key.split('=')
    const sendData = await mysql( 'list', ck[1] )
    res.json( sendData[0] )
  }else{
    res.json( {badRequest:'cookie is not defined'} )
    //redirect to /login
    next('http://localhost/login:3000')
  }
})
//const id = 'b43e19bcdf3fe7dadaaeb7e6996d430e'
app.listen(port, () => console.log(`running on port ${port}...`))