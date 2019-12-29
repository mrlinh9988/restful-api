const Sequelize = require('sequelize');
const sequelize = new Sequelize('demo-02', 'root', 'Deobiet121', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

// User.sync({ force: true });

function getAll() {
    return User.findAll({
        raw: true
    });
}
function getById(id) {
    return User.findAll({
        where: {
            id: id
        }
    }, {
        raw: true
    });
}

function paginate(start, items) {
    return User.findAll({ offset: start, limit: items }, {
        raw: true
    })
}

function createData(username, password) {
    return User.create({
        username: username,
        password: password
    });
}
function updateData(id, password) {
    return User.update(
        {
            password: password
        }, {
        where: {
            id: id
        }
    });
}
function deleteData(id) {
    return User.destroy({
        where: {
            id: id
        }
    });
}

function checkLogin(username, password) {
    return User.findAll({
        where: {
            username: username,
            password: password
        }
    }, {
        raw: true
    });
}

module.exports = {
    getAll,
    getById,
    createData,
    updateData,
    deleteData,
    paginate,
    checkLogin: checkLogin
}
