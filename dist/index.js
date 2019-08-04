"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requests_1 = __importDefault(require("./routes/requests"));
const body_parser_1 = __importDefault(require("body-parser"));
const sqlFunctions_1 = require("./utili/sqlFunctions");
const app = express_1.default();
const port = 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/requests', requests_1.default);
//app.listen(port, () => {
//    console.log('Listening on port:', port)
//})
sqlFunctions_1.grab_random_business();
//# sourceMappingURL=index.js.map