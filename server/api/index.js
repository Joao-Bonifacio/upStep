const express = require('express')
const app = express()
const port = process.env.port || 8080

// create the connection to database
const mysql = async ( f, data )=>{
  const db = require('./db')
  
  switch (f) {
    case 'insert':
      await db.usrInsert( data )
      break;
    case 'update':
      await db.usrUpdate( data.id, data )
      break;
    case 'delete':
      await db.usrDelete( data )
      break;
    case 'list':
      await db.usrSelect( data )
      break;
    default:
      console.log('DB miss...')
  }
}
//mysql('insert',{name:'Jhow',born:'2001-05-02',sex:'M',country:'Brasil',id:'2'})
//mysql('delete',3)
//mysql('list',23)
async function apiSend(req, res){
  if (req.headers.cookie) {
    const sendData = mysql( 'list', req.headers.cookie )
    const data = JSON.stringify(sendData)
    console.log(sendData)
    console.log(data)
    return await res.send(data)
  }
}
app.get('/', apiSend)

app.listen(port, () => console.log(`running on port ${port}!`))