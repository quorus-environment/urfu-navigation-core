import pg from 'pg'
// @ts-ignore
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const pool = new pg.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: "89.108.81.160",
    port: 5432,
    database: process.env.DB_NAME
})