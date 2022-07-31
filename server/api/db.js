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
const usrSelect = async (i)=>{
    const conection = await connect()

    if (typeof(i) == 'string') {
        const [list] = await conection.query( 'SELECT * FROM usr' )
        return await list
    }else{
        const [uniq] = await conection.query( `SELECT * FROM usr WHERE id=${i}` )
        return await uniq
    }
}

//insert data
const usrInsert = async (data)=>{
    const connection = await connect()
    const sql = `INSERT INTO usr ( name, born, sex, country ) VALUES ( ?,?,?,? )`
    const values = [ data.name, data.born, data.sex, data.country ]
    console.log(sql,values)
    await connection.query( sql,values )
}

//update data
const usrUpdate = async (id,u)=>{
    const connection = await connect()
    const sql = 'UPDATE usr SET name=?, born=? sex=?, country=? WHERE id=?'
    const values = [ u.name, u.born, u.sex, u.country, id ]
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