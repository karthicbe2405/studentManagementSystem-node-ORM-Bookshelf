let { json } = require('body-parser');
let Student = require('../../models/student');
let PersonalDetail = require('../../models/personaldetail');
class student  {
      async fetchMarks(req,res){
        await Student.where({"registerNumber":req.query.registerNumber}).fetch(
            {
                withRelated : ['marks'],
                required : true
            }
        )
        .then(data =>{
            return res.status(200).json(data.toJSON());
        })
        .catch(err => {
            console.log(err);
            return res.status(404).json({"Message " : "Something Went Wrong"});
        })
    }


    async fetchStudent(req,res){

        await Student.where({"registerNumber":req.query.registerNumber}).fetch({
            withRelated : ['personaldetail'],
            required : true
        })
        .then( data =>{
            return res.status(200).json(data.toJSON());
        })
        .catch( err=> {
            return res.status(404).json({"Message " : "Something Went Wrong"});
        })
    }

    async addPersonalDetail(req,res){

        let personalDetail = {
            fathername : req.body.fathername,
            mobilenumber : req.body.mobilenumber,
            address : req.body.address,
            student_id : null
        }

        await Student.where({"registerNumber":req.body.registerNumber}).fetch()
        .then( data => {
            personalDetail.student_id = data.id;
            PersonalDetail.forge(personalDetail).save()
            .then( data2 => {
                return res.status(200).json(data2.toJSON());
            })
            .catch( err => {
                console.log(err);
                return res.status(400).json({"Message" : "Something Went Wrong"});
            })
        })
        .catch( err => {
            console.log(err);
            return res.status(400).json({"Message" : "Something Went Wrong"});
        })
    }
}

module.exports = student;