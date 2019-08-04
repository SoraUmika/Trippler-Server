"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const SQL = mysql_1.default.createPool({
    host: 'maintripplar.cxsxkgskizdm.us-east-1.rds.amazonaws.com',
    user: 'tripplar',
    password: 'shuangwen',
    port: 3306,
    database: 'MainTripplar'
});
const insert_new_user = (crendentials) => {
    SQL.getConnection((err, connections) => {
    });
};
//# sourceMappingURL=sqlFunctions.js.map