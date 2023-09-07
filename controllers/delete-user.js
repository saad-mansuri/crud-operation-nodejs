const {usersData} = require('../models/users')
const deleteUser = async (req,res) => {
    try{
        const userId = req.params.id;
        await usersData.findByIdAndRemove(userId);

        // await usersData.findByIdAndUpdate(userId, udpatedUsers)
        res.redirect('/users')  
    }
    catch(err){
        console.log('err :', err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    deleteUser
}