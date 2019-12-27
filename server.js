var express = require('express')
var server = express();
var port = 3000;
var db = require('./database/db')
var dbPool = require('./database/connectPool');
var path = require('path');

server.use('/public', express.static(path.join(__dirname, '/public')));
server.use(express.urlencoded({ extended: true }))

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

server.get('/user', (req, res, next) => {
    dbPool.getAll().then(data => {
        res.json(data)
    }).catch(err => console.log(err))
});

server.get('/user/:id', (req, res, next) => {
    var id = req.params.id;
    dbPool.getByID(id).then(data => {
        res.json(data)
    }).catch(err => console.log(err))
});

server.post('/user', (req, res, next) => {
    let username = req.body.username;
    let address = req.body.address;
    dbPool.createData(username, address).then(data => {
        res.json({
            status: 'Add success'
        })
    }).catch(err => console.log(err))
});

server.put('/user/:id/', (req, res, next) => {
    let id = parseInt(req.params.id);
    let username = req.body.username;
    let address = req.body.address;
    
    dbPool.updateAddress(id, username, address).then(data => {
        res.json({
            status: 'Update all success'
        })
    }).catch(err => console.log(err))
});

server.patch('/user/:id/', (req, res, next) => {
    let id = parseInt(req.params.id);
    let address = req.body.address;

    dbPool.updateAddress(id, address).then(data => {
        res.json({
            status: 'Update success'
        })
    }).catch(err => console.log(err))
});

server.delete('/user/:id', (req, res, next) => {
    var id = req.params.id;
    dbPool.deleteData(id).then(data => {
        res.json({
            status: 'Delete success'
        })
    }).catch(err => console.log(err))
});


server.listen(port, () => {
    console.log('serer on port ' + port);
})