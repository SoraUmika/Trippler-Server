import express from 'express'
import mysql from 'mysql'


const requestRoute = express.Router()



requestRoute.get('/', (request, response) => {
    //console.log(request)
    response.send('GET response')
})

requestRoute.post('/', (request, response) => {
    console.log(request.body)
    response.send({data: 'hello world'})
})

export default requestRoute

