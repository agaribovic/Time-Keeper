const winston = require('winston')
const logform = require('logform')
const {combine, timestamp, printf} = logform.format

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        printf(nfo => {return `${nfo.timestamp} [${nfo.level}] ${nfo.message}`})
    ),
    transports:[
        new winston.transports.File({
            filename: './error.log',
             level: 'error'
            }),
        new winston.transports.File({
            filename: './journal.log'
        })
    ]
})
export default logger