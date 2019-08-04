import mysql from 'mysql'
import * as datatypes from './datatypes'
import * as queries from './sqlQueries'
import { threadId } from 'worker_threads';

const SQL = mysql.createPool({
    host: 'maintripplar.cxsxkgskizdm.us-east-1.rds.amazonaws.com',
    user: 'tripplar',
    password: 'shuangwen',
    port: 3306,
    database: 'MainTripplar'
})


export const insert_new_user = (crendentials: datatypes.fullcredentials) => {
    SQL.getConnection((err, connections) => {

    
    })
}

export const login_authentication = (credentials: datatypes.credentials) => {

}

export const grab_random_business = () => {
    SQL.query("SELECT * From Businesses ORDER BY Rand() LIMIT 1;", (err, result) => {
        if (err) {
            console.error(err)
        }
        return result

    })
}
