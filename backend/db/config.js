let dbHost      = process.env.PGHOST
let dbPort      = process.env.PGPORT
let dbName      = process.env.PGDATABASE
let dbUser      = process.env.PGUSER
let dbPassword  = process.env.PGPASSWORD

module.exports = {
    userName: dbUser,
    database: dbName,
    options: {
        host: dbHost,
        password: dbPassword,
        dialect: 'postgres',
        port: dbPort,
        logging: false,
        dialectOptions: {
            useUTC: true
        }
    },
    timezone: '+00:00'
}
