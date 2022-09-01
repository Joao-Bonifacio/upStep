const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const md5 = require('crypto')
//const jwt = require('jsonwebtoken')
const port = process.env.port || 8080
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json())
app.use(cors())
var cookie = ''

// set cors
const corsOptions = {
  orign: 'http://localhost:3000',
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

    const sendData = await mysql( 'list', ck[1], 'id' )
    sendData[0].email = undefined
    sendData[0].password = undefined

    console.log(sendData[0])
    res.json( sendData[0] )
  }else{
    res.redirect('/login')
  }
})
/**/
app.post('/login', cors(corsOptions),async ( req,res )=>{
  const login = req.body.login
  const password = req.body.password
  
  const dadosDB = await mysql('list',login,'email')
  if (dadosDB.lenght > 0) {

    const passwd = await bcrypt.compare( password, dadosDB[0].password )

    if (dadosDB[0].email == login && dadosDB[0].password == passwd) {
      cookie = dadosDB[0].id.split('=')
      let options = {
        path:'*/*',
        domain:'jj.me',
        httpOnly: true,
        maxAge: (1000 * 60 * 60 * 24)
      }
      //res.cookie('key',cookie[1],options)
      //res.redirect('/')
      next()
    }
  }
})
app.get('/login',(req,res)=>{
  if (cookie.length == 32) {
    //res.json({key:cookie,expires:432000})
    res.cookie('key',cookie[1],options)
  }
})
app.post('/sign', cors(corsOptions), async(req,res)=>{


  //depois das validações
  const login = req.body.login
  const password = req.body.password
  const name = req.body.name
  const born = req.body.born
  const sex = req.body.sex
  const country = req.body.country

  const id = login+password
  const hashId = await md5.createHash('md5').update(id).digest('hex')
  const hashPassword = await bcrypt.hash(password, 10)

  await mysql('insert',{id:hashId,name:name,email:login,password:hashPassword,born:born,sex:sex,country:country})
})

//const id = '04ff27090f4978d7f32636422abfb4e9'
app.listen(port, () => console.log(`running on port ${port}...`))