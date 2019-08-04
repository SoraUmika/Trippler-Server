import express from 'express'
import requestRoute from './routes/requests'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());   
app.use('/requests', requestRoute)

app.listen(port, () => {
    console.log('Listening on port:', port)
})