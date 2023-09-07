const express = require('express')
const {showUsers} = require('../controllers/show-users')
const {editUser, updateUser} = require('../controllers/edit-user')
const {deleteUser} = require('../controllers/delete-user')
const showUsersRoute = express.Router()

showUsersRoute.get('/', showUsers)
showUsersRoute.get('/:id', editUser)
showUsersRoute.post('/update-user/:id', updateUser)
showUsersRoute.get('/delete-user/:id', deleteUser)

module.exports = {showUsersRoute} 