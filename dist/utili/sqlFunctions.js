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
exports.insert_new_user = (crendentials) => {
    SQL.getConnection((err, connections) => {
    });
};
exports.login_authentication = (credentials) => {
};
exports.grab_random_business = (callback) => {
    SQL.query("SELECT * From Businesses ORDER BY Rand() LIMIT 1;", (err, result) => {
        callback(err, result);
    });
};
//# sourceMappingURL=sqlFunctions.js.map