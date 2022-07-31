const express = require('express')
const app = express()
const port = process.env.port || 8090

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
      const users = await db.usrSelect( data )
      console.log(users)
      break;
    default:
      console.log('DB miss...')
  }
}
//mysql('insert',{name:'Jhow',born:'2001-05-02',sex:'M',country:'Brasil',id:'2'})
//mysql('delete',3)
mysql('list',25)

app.use('/', (req,res) => {
  if (!req.headers.cookie) {
    res.send()
    //redirecionar para login
  }
})

app.listen(port, () => console.log(`running on port ${port}!`))