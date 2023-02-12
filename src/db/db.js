import { createPool } from "mysql2/promise";

export const pool = createPool({
    user:"root",
    password:"123",
    host: 'localhost',
    database: 'proyect'
})