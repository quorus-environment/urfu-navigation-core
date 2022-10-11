const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '3239930610Dan',
    host: "localhost",
    port: 5432,
    database: "NavigatorDB"

})

export default pool