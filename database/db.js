// var db = require('../config/conn-db');
// db.connect();

// function getAll() {
//     return new Promise((resolve, reject) => {
//         db.query(
//             'SELECT * FROM students',
//             (error, results, fields) => {
//                 if (error) {
//                     reject(error)
//                 }
//                 resolve(results);
//             });
//     })
// }

// function getById(id) {
//     return new Promise((resolve, reject) => {
//         db.query(
//             `SELECT * FROM students where id = ${id}`,
//             (error, results, fields) => {
//                 if (error) {
//                     reject(error)
//                 }
//                 resolve(results);
//             });
//     })
// }

// function addStudent(username, password) {
//     return new Promise((resolve, reject) => {
//         db.query(
//             `insert into students (username, password) values("${username}", "${password}")`,
//             (err, results, fields) => {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(results);
//             })
//     })
// }

// function updateStudent(id, password) {
//     return new Promise((resolve, reject) => {
//         db.query(
//             `update students set password = "${password}" where id = ${id}`,
//             (err, results, fields) => {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(results);
//             })
//     })
// }
// function deleteStudent(id) {
//     return new Promise((resolve, reject) => {
//         db.query(
//             `DELETE FROM students where id = ${id}`,
//             (err, results, fields) => {
//                 if (err) {
//                     reject(err)
//                 }
//                 resolve(results);
//             })
//     })
// }

// module.exports = {
//     getAll: getAll,
//     addStudent: addStudent,
//     updateStudent: updateStudent,
//     deleteStudent: deleteStudent,
//     getById: getById
// }