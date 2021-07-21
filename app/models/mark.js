let bookShelf = require('../utils/db');
const Student = require('./student');
const Subject = require('./subject');

let Mark = bookShelf.model('Mark',{
    tableName : 'marks',

    student(){
        return this.belongsTo(Student,"id","student_id");
    },

    subject(){
        return this.belongsTo(Subject,"id","subject_id");
    }

});

module.exports = Mark;