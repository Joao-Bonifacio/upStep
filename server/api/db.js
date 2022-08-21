//db connect
const connect = async ()=>{
    if ( global.db && global.db.state != 'disconected' ) {return global.db}
    const mysql = require('mysql2/promise')
    const connection = mysql.createConnection( 'mysql://root:root@localhost:3306/users' )
    console.log( 'db connected...' )
    global.db = connection
    return connection
}

//select data
const usrSelect = async ( data, field )=>{
    const conection = await connect()
    if (field == 'email') {
        sql = 'SELECT * FROM usr WHERE email=?'
    }else if(field == 'id'){
        sql = 'SELECT * FROM usr WHERE id=?'
    }else if(field == 'name'){
        sql = 'SELECT * FROM usr WHERE name=?'
    }else if(field == 'password'){
        sql = 'SELECT * FROM usr WHERE password=?'
    }else{
        console.log('invalid params...')
    }
    const values = data
    const [ uniq ] = await conection.query( sql, values )
    return await uniq
}

//insert data
const usrInsert = async (data)=>{
    const connection = await connect()
    const sql = `INSERT INTO usr ( id, name, email, password, born, sex, country ) VALUES ( ?,?,?,?,?,?,? )`
    const values = [ data.id, data.name , data.email, data.password, data.born, data.sex, data.country ]
    console.log(sql,values)
    await connection.query( sql,values )
}

//update data
const usrUpdate = async (u)=>{
    const connection = await connect()
    const sql = 'UPDATE usr SET name=?, email=?, password=?, born=? sex=?, country=? WHERE id=?'
    const values = [ u.name, u.email, u.password, u.born, u.sex, u.country, u.id ]
    await connection.query( sql, values )
}

//delete data
const usrDelete = async (id)=>{
    const connection = await connect()
    const sql = 'DELETE FROM usr WHERE id=?'
    const values = id
    await connection.query( sql, values )
}

module.exports = { usrSelect, usrInsert, usrUpdate, usrDelete }