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
const usrSelect = async (data)=>{
    const conection = await connect()
    const sql = 'SELECT * FROM usr WHERE id=?'
    const values = data
    const [uniq] = await conection.query( sql, values )
    return await uniq
}

//insert data
const usrInsert = async (data)=>{
    const connection = await connect()
    const sql = `INSERT INTO usr ( id, name, born, sex, country, password ) VALUES ( ?,?,?,?,?,? )`
    const values = [ data.name, data.born, data.sex, data.country ]
    console.log(sql,values)
    await connection.query( sql,values )
}

//update data
const usrUpdate = async (u)=>{
    const connection = await connect()
    const sql = 'UPDATE usr SET name=?, born=? sex=?, country=?, password=? WHERE id=?'
    const values = [ u.name, u.born, u.sex, u.country, u.password, u.id ]
    await connection.query( sql, values )
}

//delete data
const usrDelete = async (id)=>{
    const connection = await connect()
    const sql = 'DELETE FROM usr WHERE id=?'
    const values = [ id ]
    await connection.query( sql, values )
}

module.exports = { usrSelect, usrInsert, usrUpdate, usrDelete }