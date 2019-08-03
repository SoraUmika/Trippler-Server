import express from 'express'

const requestRoute = express.Router()

requestRoute.get('/', (request, response) => {
    response.send('GET response')
})

requestRoute.post('/', (request, response) => {
    response.send('POST response')
})

export default requestRoute
