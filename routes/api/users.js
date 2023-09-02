const express = require('express')
const {getUsers, getUserById, editUser,deleteUser, createUser} = require('../../controllers/api/users')
const getUsersRoute = express.Router()

getUsersRoute
.get('/', getUsers)
.get('/:id', getUserById)
.patch('/:id', editUser)
.delete('/:id', deleteUser)
.post('/', createUser)

module.exports = {
    getUsersRoute
}