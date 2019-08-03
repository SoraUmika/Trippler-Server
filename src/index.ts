import express from 'express'
import requestRoute from './routes/requests'

const app = express()
const port = 3000

app.use('/requests', requestRoute)

app.listen(3000, () => {
    console.log('Listening')
})