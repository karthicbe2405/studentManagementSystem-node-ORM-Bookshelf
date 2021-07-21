let {
    createLogger,
    transports,
    format
} = require('winston');

let logger = createLogger({
    transports : [
        new transports.File({
            filename : 'info.log',
            level : 'info',
            format : format.combine(format.timestamp(),format.json())
        })
    ]
})

module.exports = logger;