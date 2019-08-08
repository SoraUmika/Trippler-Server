"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ip_1 = __importDefault(require("express-ip"));
const sqlFunctions_1 = require("../utili/sqlFunctions");
const fs_1 = __importDefault(require("fs"));
const loggingEvent = (data) => {
    fs_1.default.appendFile('serverEvents.txt', Date() + ": " + data + "\n", function (err) {
        if (err)
            console.log(err);
    });
};
const databaseRoute = express_1.default.Router();
databaseRoute.use(express_ip_1.default().getIpInfoMiddleware);
databaseRoute.get('/', (request, response) => {
    //console.log(request)
    response.send('GET response');
});
databaseRoute.post('/', (request, response) => {
    switch (request.body.type) {
        case 'sampleType':
            console.log('its sampleType');
            response.send({ data: 'this is sample' });
            break;
        case 'grab_random_bussiness':
            sqlFunctions_1.grab_random_business((err, result) => {
                let logs;
                if (err) {
                    logs = "FAIL TO RECEIVE DATA FROM DATABASE: " + err;
                    loggingEvent(logs);
                    console.log(logs);
                    response.send({ ErrorFromServer: "Requests received, but is unable to retrieve data from server database: ", err });
                }
                else {
                    logs = "sending_packings to: " + (request.headers['x-forwarded-for'] || request.connection.remoteAddress);
                    loggingEvent(logs);
                    console.log(logs);
                    response.send(result);
                }
            });
            break;
        default:
            console.log('database post requests: FAILED TO REGONIZE DATA');
            response.send({ err: 'requests received, BUT FAILED TO RECOGNIZE THE REQUEST, PLEASE CHECK THE TYPE' });
    }
});
exports.default = databaseRoute;
//# sourceMappingURL=database.js.map