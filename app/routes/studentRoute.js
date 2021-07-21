let express = require('express');
let router  = express.Router();
let Student = require('../services/student/studentService');
let validate = require('../helpers/validators/requestValidation');
let variableSchema = require('../helpers/validators/schema/variable');
const { registerNumber } = require('../helpers/validators/schema/variable');

let student = new Student();

router.get('/fetchMarks',(req,res) => {
    student.fetchMarks(req,res);
});


router.get('/fetchStudent',(req,res) =>{

    student.fetchStudent(req,res);
});

router.post('/addPersonalDetail',(req,res) => {
    student.addPersonalDetail(req,res);
});
module.exports = router;