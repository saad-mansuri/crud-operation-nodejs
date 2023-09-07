const {usersData} = require('../models/users')

const showUsers = async (req,res) => {
    const getAllDbUser = await usersData.find({})
    res.render('all-users.ejs', {allUsers : getAllDbUser})
}

module.exports = {
    showUsers
}