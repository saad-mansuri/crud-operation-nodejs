const {usersData} = require('../models/users')
const addUser = async (req,res) => {
    res.render('add-user.ejs')
    // res.send('Its Edit Page na')
    // try{
    //     const userId = req.params.id;
    //     await usersData.findByIdAndRemove(userId);

    //     // await usersData.findByIdAndUpdate(userId, udpatedUsers)
    //     res.redirect('/users')  
    // }
    // catch(err){
    //     console.log('err :', err);
    //     res.status(500).send('Internal Server Error');
    // }
}
const addNewUser = async (req,res) => {
    console.log('req.body :', req.body);
    console.log('req.body :', req.body.firstName == '');
    if(req.body.firstName == ''){
        return res.redirect('/users/add-user')
    }
    const createUser = await usersData.create({
        firstName : req.body.firstName,
        secondName : req.body.secondName,
        email : req.body.email,
        gender : req.body.gender 
    })
    console.log('createUser :', createUser);
    await createUser.save()
    return res.redirect('/users')
}

module.exports = {
    addUser,
    addNewUser
}