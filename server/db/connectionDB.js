import 'dotenv/config'
import pg from 'pg'

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DATABASE,
  allowExitOnIdle: true
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log('Connected successfully!');
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log(result.rows)
  })
});

export default pool