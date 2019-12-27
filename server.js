const express = require('express');
const server = express();
const port = 3000;
const db = require('./connect-db');

server.use(express.urlencoded({ extended: true }));

server.get('/user/', (req, res, next) => {
    db.getAll().then(data => {
        res.json(data)
    }).catch(err => console.log(err))
})

server.get('/user/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    db.getById(id).then(data => {
        res.json(data)
    }).catch(err => console.log(err))
})

// pagination
server.get('/paginate/user/:numberPage', (req, res, next) => {
    let numberPage = parseInt(req.params.numberPage) - 1;
    let numberItems = 3;
    db.paginate(numberPage * numberItems, numberItems).then(data => {
        res.json(data)
    }).catch(err => console.log(err))
})

server.post('/user', (req, res, next) => {
    db.createData(req.body.username, req.body.password).then(data => {
        res.json({
            status: 'Create new user success'
        })
    }).catch(err => console.log(err))
})

server.put('/user/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    db.updateData(id, req.body.password).then(data => {
        res.json({
            status: 'Update user success'
        })
    }).catch(err => console.log(err))
})

server.delete('/user/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    db.deleteData(id).then(data => {
        res.json({
            status: 'Delete user success'
        })
    }).catch(err => console.log(err))
})

server.listen(port, () => console.log('Server om port ', port))