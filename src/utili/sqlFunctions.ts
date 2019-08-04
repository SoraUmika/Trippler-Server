import mysql from 'mysql'
import * as datatypes from './datatypes'

const SQL = mysql.createPool({
    host: 'maintripplar.cxsxkgskizdm.us-east-1.rds.amazonaws.com',
    user: 'tripplar',
    password: 'shuangwen',
    port: 3306,
    database: 'MainTripplar'
})


const insert_new_user = (crendentials: datatypes.credentials) => {
    SQL.getConnection((err, connections) => {

    
    })
}

