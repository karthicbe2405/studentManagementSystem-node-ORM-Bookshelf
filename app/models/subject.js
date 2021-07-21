let bookshelf = require('../utils/db');

let Department = require('../models/department');

let Subject = bookshelf.model('Subject',{
    
    tableName : 'subjects',
    
    department(){
        return this.belongsTo(Department,"id","department_id");
    }

});

module.exports = Subject;