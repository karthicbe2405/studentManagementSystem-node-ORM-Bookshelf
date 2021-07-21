let { json } = require('body-parser');
let Student = require('../../models/student');
let Department = require('../../models/department');
let Subject = require('../../models/subject');
let Mark = require('../../models/mark');

class Admin  {

    async fetchStudents (req,res){

        await  Student.fetchAll().then( data =>{

            return res.status(200).json(data);

        })
        .catch(err =>{

            return res.status(200).json({"Message" : "Something Went Wrong"});

        });

    }

    async addDepartment(req,res){


        let department = {
            name : req.body.name,
            departmentId : req.body.departmentId
        }

        await  Department.forge(department).save().then( data =>{

            return res.status(200).json(data);

        })
        .catch(err =>{

            return res.status(200).json({"Message" : "Department ID Already Exist"});

        });

        
    }

    async updateDepartment(req,res){
       
        let department = {
            name : req.body.name,
            departmentId : req.body.departmentId
        }

        await  Department.where("departmentId",department.departmentId).save(
            {name : department.name},
            {patch : true})
        .then( data =>{
            return res.status(200).json(data);
        })
        .catch(err =>{
            
            return res.status(200).json({"Message" : "Department ID Not Exists"});

        });

    }

    async addStudent(req,res){

        let student = {
            name : req.body.name,
            registerNumber : req.body.registerNumber,
            department_id : null
        }

        await Department.where("departmentId",req.body.departmentId).fetch().then( data => {
            
            student.department_id = data.id;
            
            Student.forge(student).save().then( data=> {

                return res.status(200).json(data.toJSON());
            })
            .catch(err => {
                console.log(err);
                return res.status(404).json({"messsage" : "Student RegisteNumber Already Exists"});
            })
        })
        .catch(err =>{
            console.log(err);
            return res.status(404).json({"messsage" : "Department Not Found"});
        })
    }

    async updateStudent(req,res){
        
        let student  = {
            name : req.body.name,
            registerNumber : req.body.registerNumber
        }

        await Student.where("registerNumber",student.registerNumber).save(
            {name : student.name},
            {patch : true}
        ).then( data =>{
                return res.status(200).json(data.toJSON());
        })
        .catch( err => {
                return res.status(404).json({"Message":"Student Registration Number Doesnt Exist"});
        })

    }

    async deleteStudent(req,res){
        let student = {
            registerNumber : req.body.registerNumber
        }

        await Student.where("registerNumber",student.registerNumber).destroy().then(data =>{

            return res.status(200).json({"Message" : "Student Record Deleted SuccessFully"});
        })
        .catch( err =>{

            return res.status(404).send({"Message" : "Student Record Deletion UnsuccessFull"});

        })
    }

    async addSubject(req,res){

        let subject = {
            subjectCode : req.body.subjectCode,
            subjectName : req.body.subjectName,
            department_id : null
        }

        await Department.where("departmentId",req.body.departmentId).fetch().then(async data => {

            subject.department_id = data.id; 

            await Subject.forge(subject).save().then(data =>{

                return res.status(404).json(data.toJSON());

            })
            .catch(err =>{

                return res.status(404).json({"Message" : "Subject Code Already Exists"});
            
            })
        })
        .catch( err =>{

            return res.status(404).json({"Message" : "Department Id DoesNot Exists"});

        })    

    }

    async updateSubject(req,res){

        let subject = {
            subjectCode : req.body.subjectCode,
            subjectName : req.body.subjectName
        }

        await Subject.where("subjectCode",subject.subjectCode).save(
            {subjectName : subject.subjectName},
            {patch : true}
        ).then( data =>{
                return res.status(200).json(data.toJSON());
        })
        .catch( err => {
                return res.status(404).json({"Message":"Subject Code Doesnt Exist"});
        })

    }

    async addMark(req,res){

        let markDetail = {
            mark : req.body.mark
        }

        await Student.where("registerNumber",req.body.registerNumber).fetch()
        .then( async data => {
            markDetail.student_id = data.id;
            await Subject.where("subjectCode", req.body.subjectCode).fetch()
            .then( async data1 => {
                markDetail.subject_id = data1.id;
                await Mark.forge(markDetail).save()
                .then( data2 =>{
                    return res.status(200).json(data2.toJSON());
                })
                .catch( err=>{
                
                    return res.status(404).json({"Message " : "Something Went Wrong"});
                });
            })
            .catch(err =>{
                
                return res.status(404).json({"Message " : "Subject Code Not Found"});
            });
        })
        .catch(err => {
            
            return res.status(404).json({"Message " : "Register Number Not Found"});
        });

    }

    async updateMark(req,res){

        let markDetail = {
            mark : req.body.mark
        }

        console.log(req.body.registerNumber);
        await Student.where("registerNumber",req.body.registerNumber).fetch()
        .then( async data => {
            markDetail.student_id = data.id;
            await Subject.where("subjectCode", req.body.subjectCode).fetch()
            .then( async data1 => {
                markDetail.subject_id = data1.id;
                await Mark.where({"student_id":markDetail.student_id,"subject_id":markDetail.subject_id}).save(
                    {mark : markDetail.mark},
                    {patch : true}
                )
                .then( data2 =>{
                    return res.status(200).json(data2.toJSON());
                })
                .catch( err=>{
                    return res.status(404).json({"Message " : "Something Went Wrong"});
                });
            })
            .catch(err =>{
                console.log(err);
                return res.status(404).json({"Message " : "Subject Code Not Found"});
            });
        })
        .catch(err => {
            
            return res.status(404).json({"Message " : "Register Number Not Found"});
        });

    }

    async fetchDepartmentStudentsSubjects(req,res){
        console.log(req.query.departmentId);
        await Department.where({departmentId:req.query.departmentId}).fetch(
            {
                withRelated : ['students','subjects'],
                required : true
            }
        ).then(data =>{
            res.status(200).json(data.toJSON());
        })
        .catch(err =>{
            return res.status(404).json({"Message " : "Depaartment Id  Not Found"});
        })
    }

}

module.exports = Admin;