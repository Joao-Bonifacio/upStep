const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./db')
const bcrypt = require('bcryptjs')
const md5 = require('crypto')
//const jwt = require('jsonwebtoken')
const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
var cookie = ''

// set cors
const corsOptions = {
  //origin de acordo com o host do wsl2
  orign: ['http://localhost:3000','http://localhost:3000/login','http://jj.me:3000','http://jj.me:3000/login','http://jj.me:3000/signup'],
  preflightContinue: true,
  credentials: true,
  optionsSuccessStatus: 200
}
// create the connection to database
const mysql = async ( f, data, field )=>{
  
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
    const db2 = require('./db_charts')
    let ck = req.headers.key.split('=')
    const sendData = await mysql( 'list', ck[1], 'id' )
    sendData[0].email = undefined
    sendData[0].password = undefined
    

    //response---
    if (req.headers.scope === 'chart') {
      const data = await db2.chart.find({id:ck[1]})
      res.json(data[0])
    }else{
      //usr values
      res.json(sendData[0])
    }
  }else{
    res.json({'Error':'Bad auth'})
  }
  //---response

})

app.post('/login', cors(corsOptions),async ( req,res )=>{
  const { login } = req.body
  const { password } = req.body
  
  const dadosDB = await mysql('list',login,'email')
  const passwd = await bcrypt.compare( password, dadosDB[0].password )

  if (dadosDB[0].email == login && passwd) {
    cookie = dadosDB[0].id
    res.set( 'Content-Type', 'text/html' )
    res.send(`<script>window.location.href = 'http://jj.me:3000?key=${cookie}'</script>`)
  }else{
    res.redirect('http://jj.me:3000')
  }
})

app.post('/signup', cors(corsOptions), async(req,res)=>{
  //depois das validações
  const { login } = req.body
  const { password } = req.body
  const { cpassword } = req.body
  const { name } = req.body
  const { born } = req.body
  const { sex } = req.body
  const { country } = req.body

  const id = login+password
  const hashId = await md5.createHash('md5').update(id).digest('hex')
  const hashPasswd = await bcrypt.hash(password, 10)

  if (password === cpassword) {
    await mysql('insert',{id:hashId,name:name,email:login,password:hashPasswd,born:born,sex:sex,country:country})
    res.set( 'Content-Type','text/html' )
    res.send( `<script>window.location.href = 'http://jj.me:3000/login'</script>` )
  }else{
    res.set( 'Content-Type','text/html' )
    res.send('<h1>Passwords not same<h1><script>setTimeout(()=>{window.location.href = "http://jj.me:3000/signup"},2500)</script>')
  }
})
app.post('/charts', cors(corsOptions), (req,res)=>{
  console.log(req.body.data)
  res.json({'msg':'ok'})
})

//const id = '04ff27090f4978d7f32636422abfb4e9'
//const id = '83454535f84c3a2fef0679d707a414be'
app.listen(port, () => console.log(`running on port ${port}...`))