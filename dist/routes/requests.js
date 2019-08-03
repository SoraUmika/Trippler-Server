"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requestRoute = express_1.default.Router();
requestRoute.get('/', (request, response) => {
    //console.log(request)
    response.send('GET response');
});
requestRoute.post('/', (request, response) => {
    //console.log(request)
    response.send({ data: 'hello world' });
});
exports.default = requestRoute;
//# sourceMappingURL=requests.js.map