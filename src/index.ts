import express from 'express'
import requestRoute from './routes/requests'
import databaseRoute from './routes/database'
import bodyParser from 'body-parser'
import https from 'https'
import fs from 'fs'
import {grab_random_business, login_authentication} from './utili/sqlFunctions'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());   
app.use('/database', databaseRoute)
app.use('/requests', requestRoute)

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)

app.listen(port, () => {
    console.log('Listening on port:', port)
})



