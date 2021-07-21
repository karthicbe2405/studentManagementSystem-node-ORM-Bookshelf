let bookShelf = require('../utils/db');
const Student = require('./student');

let PersonalDetail = bookShelf.model('PersonalDetail',{
    
    tableName : 'personaldetails',
    
    student(){
        return this.belongsTo(Student,"id","student_id");
    }
    
});

module.exports = PersonalDetail;