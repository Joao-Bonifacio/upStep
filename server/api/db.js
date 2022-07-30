//db connect
const connect = async ()=>{
    if ( global.db && global.db.state != 'disconected' ) {return global.db}
    const mysql = require('mysql2/promise')
    const connection = mysql.createConnection( 'mysql://root:root@localhost:3306/users' )
    console.log( 'db connected...' )
    global.db = connection
}

//select all data
const usrSelect = async ()=>{
    const connection = await connect()
    const [list] = await connection.query( 'SELECT * FROM usr' )
    return await list
}

//insert data
const usrInsert = async ()=>{
    const connection = await connect()
    const sql = 'INSERT INTO usr ( name,born,sex,country ) VALUES ( ?,?,?,? )'
    const values = [ 'João', '2001-05-02', 'M', 'Brasil' ]
    await connection.query( sql, value )
}

//update data
const usrUpdate = async (id,u)=>{
    const connection = await connect()
    const sql = 'UPDATE usr SET name=?, born=? sex=?, country=? WHERE id=?'
    const values = [ u.name, u.born, u.sex, u.country, id ]
    await connection.query( sql, values )
}

//delete data
const usrDelete = async ()=>{
    const connection = await connect()
    const sql = 'DELETE FROM usr WHERE id=?'
    const values = [ id ]
    await connection.query( sql, values )
}

module.exports = { usrSelect, usrInsert, usrUpdate, usrDelete }