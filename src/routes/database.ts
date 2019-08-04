import express from 'express'
import * as SQL from '../utili/sqlFunctions'

const requestRoute = express.Router()



requestRoute.get('/', (request, response) => {
    //console.log(request)
    response.send('GET response')
})

requestRoute.post('/', (request, response) => {
    switch(request.body.type){
        
        default: 
            response.send("invalid requests")
    }

    response.send({data: 'hello world'})
})

export default requestRoute

