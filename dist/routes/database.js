"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ip_1 = __importDefault(require("express-ip"));
const sqlFunctions_1 = require("../utili/sqlFunctions");
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
                if (err) {
                    response.send({ ErrorFromServer: "Requests received, but is unable to retrive data from server database" });
                }
                else {
                    console.log("sending_packings to: ", request.headers['x-forwarded-for'] || request.connection.remoteAddress);
                    response.send(result);
                }
            });
            break;
        default:
            console.log('database post requests: FAILED TO REGONIZE DATA');
            response.send({ err: 'FAILED TO RECOGNIZE THE DATA' });
    }
});
exports.default = databaseRoute;
//# sourceMappingURL=database.js.map