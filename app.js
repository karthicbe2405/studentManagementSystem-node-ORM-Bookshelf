let bodyParser = require('body-parser');
let express = require('express');
let app = express();
app.use(bodyParser.json());
let db = require('./app/utils/db');
let {ValidationError } = require('express-json-validator-middleware');
let adminRoute = require('./app/routes/admdinRoute');
let studentRoute = require('./app/routes/studentRoute');
let logger = require('./app/utils/logger')
let fs = require('fs');
const { finished } = require('stream');
app.listen(3300,()=>{console.log("Server Started Successfully at Port Number 3300");});

app.use((req, res, next) => {

    logger.info('request',req.body);
    
    let response = res.send;

    function finalMessage(arg){

       let  message = {DefaultMessage  : "This is the Default Mssage attached with All Responses"};
    
       arg.message = "This is the Default Mssage attached with All Responses";

       console.log(arg);

       return arg;

    };
    res.send = function(data) {
        
        arguments[0] = finalMessage(arguments[0]);

        logger.info(JSON.parse(data));
        fs.appendFile('responseJson.json', ' , \n' + data, err => {
            console.log("Error in Writing File");
        });

        response.apply(res,arguments);
    }
    next();
});

app.use('/admin',adminRoute);
app.use('/student',studentRoute);

app.use((err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(400).json({"Message" : "Invalid Inputs"});
    }
    else next(err);
});