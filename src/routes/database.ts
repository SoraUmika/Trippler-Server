import express from 'express'
import expressip from 'express-ip'
import {grab_random_business} from '../utili/sqlFunctions'
const databaseRoute = express.Router()

databaseRoute.use(expressip().getIpInfoMiddleware)

databaseRoute.get('/', (request, response) => {
    //console.log(request)
    response.send('GET response')
})

databaseRoute.post('/', (request, response) => {
    switch(request.body.type){
        case 'sampleType':
            console.log('its sampleType')
            response.send({data: 'this is sample'})
            break;
        case 'grab_random_bussiness':
            grab_random_business((err, result) => {
                if (err){
                    response.send({ErrorFromServer: "Requests received, but is unable to retrive data from server database"})
                }else{
                    console.log("sending_packings to: ", request.headers['x-forwarded-for'] || request.connection.remoteAddress) 
                    response.send(result)
                }
            })
            break;
        default: 
            console.log('database post requests: FAILED TO REGONIZE DATA')
            response.send({err: 'FAILED TO RECOGNIZE THE DATA'})
    }

})

export default databaseRoute

