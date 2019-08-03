import express from 'express'

const requestRoute = express.Router()

requestRoute.get('/', (request, response) => {
    //console.log(request)
    response.send('GET response')
})

requestRoute.post('/', (request, response) => {
    //console.log(request)
    response.send({data: 'hello world'})
})

export default requestRoute
