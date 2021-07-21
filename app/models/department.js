let bookShelf = require('../utils/db');

let Department = bookShelf.model('Department',{
    tableName : 'departments',
    
    students(){
        return this.hasMany('Student');
    },

    subjects(){
        return this.hasMany('Subject');
    }

});

module.exports = Department;