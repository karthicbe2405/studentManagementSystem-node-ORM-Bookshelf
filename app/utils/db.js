let dbConfig ={
    client: 'mysql',
    connection: {
        host: 'localhost',
         user: 'root',
        password: '',
        database: 'studentmanagementsystems',
        charset: 'utf8'
    }
};
let knex = require('knex')(dbConfig);
bookshelf = require('bookshelf')(knex);

/*
bookShelf.plugin('registry');
bookShelf.plugin('visibility');
*/

module.exports = bookshelf;
