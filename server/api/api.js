const express = require('express')
const app = express()
const port = process.env.port || 8090

// get the client


// create the connection to database


/*/ simple query
connection.query(
  'SELECT * FROM users',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
*/

/*/ with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);
*/

app.use('/', (req,res) => {
  if (!req.headers.cookie) {
    res.send()
    //redirecionar para login
  }
})

app.listen(port, () => console.log(`running on port ${port}!`))