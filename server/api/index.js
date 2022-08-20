const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser');
//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')
const port = process.env.port || 8080
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
var cookie = ''

// set cors
const corsOptions = {
  orign: ['http://localhost:3000','http://localhost:3000/login'],
  preflightContinue: true,
  credentials: true,
  optionsSuccessStatus: 200
}
// create the connection to database
const mysql = async ( f, data, field )=>{
  const db = require('./db')
  
  switch (f) {
    case 'insert':
      return await db.usrInsert( data, field )
      break;
    case 'update':
      return await db.usrUpdate( data, field )
      break;
    case 'delete':
      return await db.usrDelete( data, field )
      break;
    case 'list':
      return await db.usrSelect( data, field )
      break;
    default:
      console.log('DB miss...')
  }
}

app.get('/', cors(corsOptions),async ( req,res )=>{
  if (req.headers.key) {
    let ck = req.headers.key.split('=')
    const sendData = await mysql( 'list', ck[1] )
    res.json( sendData[0] )
  }else{
    //redirect to /login
    res.redirect('/login')
  }
})
app.get('/login',(req,res)=>{
  res.redirect('http://localhost:3000?login-failed')
})
app.post('/login', cors(corsOptions),async ( req,res )=>{
  const login = req.body.login
  const password = req.body.password
  
  const dadosDB = await mysql('list',login,'name')

  if (dadosDB.lenght > 0) {
    cookie = dadosDB[0].id
    res.redirect('/auth')
  }else{
    res.redirect('/')
  }
})
app.get('/auth', cors(corsOptions), (req,res)=>{
  if (cookie) {
    res.json({key: cookie})
  }else{
    res.redirect('/login')
  }
})

//const id = 'b43e19bcdf3fe7dadaaeb7e6996d430e'
app.listen(port, () => console.log(`running on port ${port}...`))