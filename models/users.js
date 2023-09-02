const express = require('express')
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName : {
        type: String,
        require: true
    },
    secondName: {
        type: String 
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    gender: {
        type: String
    }
}, {timestamps : true})

const usersData = mongoose.model('user', userSchema)

module.exports = {usersData}