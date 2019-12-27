let db = require('../config/conn-db');

function getAll(){
    return db.query('select * from students');
}

function getByID(id){
    return db.query(`select * from students where id = ${id}`)
    // SQL Injection
    // return db.query(`select * from students where id = ${id} or 1=1`)
}

function createData(username, address){
    return db.query(`insert into students(username, address) values ("${username}", "${address}")`)
}

function updateData(id, username, address){
    return db.query(`update students set id = ${id},username = "${username}", address = "${address}" where id = ${id}`)
}

function updateAddress(id, address){
    return db.query(`update students set address = "${address}" where id = ${id}`)
}

function deleteData(id){
    return db.query(`delete from students where id = ${id}`)
}


module.exports = {
    getAll,
    getByID,
    createData,
    updateData,
    updateAddress,
    deleteData
}