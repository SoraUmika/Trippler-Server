import express from 'express'
import expressip from 'express-ip'
import {grab_random_business} from '../utili/sqlFunctions'
import fs from 'fs'

const loggingEvent = (data: string) => {
    fs.appendFile('serverEvents.txt', Date() + ": " + data + "\n", function (err) {
        if (err) console.log(err);
      });
}

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
                let logs;
                if (err){
                    logs = "FAIL TO RECEIVE DATA FROM DATABASE: " + err
                    loggingEvent(logs)
                    console.log(logs)
                    response.send({ErrorFromServer: "Requests received, but is unable to retrieve data from server database: ", err})
                }else{
                    logs = "sending_packings to: " + (request.headers['x-forwarded-for'] || request.connection.remoteAddress)
                    loggingEvent(logs)
                    console.log(logs) 
                    response.send(result)
                }
            })
            break;
        default: 
            console.log('database post requests: FAILED TO REGONIZE DATA')
            response.send({err: 'requests received, BUT FAILED TO RECOGNIZE THE REQUEST, PLEASE CHECK THE TYPE'})
    }

})

export default databaseRoute

