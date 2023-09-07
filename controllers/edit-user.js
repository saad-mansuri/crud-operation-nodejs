const {usersData} = require('../models/users')

const editUser = async (req,res) => {
    const userId = req.params.id;
    const getSelectedUser = await usersData.findById(userId)
    if (!getSelectedUser) {
        return res.status(404).send('User not found'); // Handle the case where the user doesn't exist
    }
    res.render('edit-user.ejs', {selectedUser : getSelectedUser})
}

const updateUser = async (req,res) => {
    try{
        const userId = req.params.id;
        const updatedUserData = req.body
        await usersData.findByIdAndUpdate(userId, updatedUserData);

        // await usersData.findByIdAndUpdate(userId, udpatedUsers)
        res.redirect('/users')
    }
    catch(err){
        console.log('err :', err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    editUser,
    updateUser
}