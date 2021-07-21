let bookShelf = require('../utils/db');
const Department = require('./department');
const Mark = require('./mark');

let Student = bookShelf.model('Student',{
    
    tableName : 'students',
    
    department(){
        return this.belongsTo(Department,"id","department_id");
    },
    marks(){
        return this.hasMany('Mark');
    },
    personaldetail(){
        return this.hasOne('PersonalDetail');
    }
});

module.exports = Student;