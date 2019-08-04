import express from 'express'
import requestRoute from './routes/requests'
import bodyParser from 'body-parser'
import {grab_random_business, login_authentication} from './utili/sqlFunctions'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());   
app.use('/requests', requestRoute)

//app.listen(port, () => {
//    console.log('Listening on port:', port)
//})

grab_random_business()