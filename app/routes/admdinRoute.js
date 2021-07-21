let express = require('express');
let router  = express.Router();
let Admin = require('../services/admin/adminService');
// let departmentSchema = require('../helpers/validators/schema/department');
// let studentSchema = require('../helpers/validators/schema/student');
// let subjectSchema = require('../helpers/validators/schema/subject');
// let markSchema = require('../helpers/validators/schema/mark');
// let variableSchema = require('../helpers/validators/schema/variable');
// let validate = require('../helpers/validators/requestValidation');

let admin = new Admin();
router.get('/fetchStudents',(req,res) => {
    admin.fetchStudents(req,res);
});

router.post('/addDepartment',(req,res)=>{
    admin.addDepartment(req,res);
});

router.post('/addStudent',(req,res)=>{
    admin.addStudent(req,res);
});

router.put('/updateDepartment',(req,res) => {
    admin.updateDepartment(req,res);
})

router.put('/updateStudent',(req,res) => {
    admin.updateStudent(req,res);
})
router.delete('/deleteStudent',(req,res) => {
    admin.deleteStudent(req,res);
})

router.post('/addSubject',(req,res) =>{
    admin.addSubject(req,res);
})

router.put('/updateSubject',(req,res) =>{
    admin.updateSubject(req,res);
})

router.post('/addMark',(req,res) =>{
    admin.addMark(req,res);
})

router.put('/updateMark',(req,res) =>{
    admin.updateMark(req,res);
});

router.get('/fetchDepartmentStudentsSubjects',(req,res) =>{
    admin.fetchDepartmentStudentsSubjects(req,res);
});

module.exports = router;