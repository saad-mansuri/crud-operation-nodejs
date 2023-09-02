// const usersData = require('../../users-data/users-data.json')

const {usersData} = require('../../models/users')

const getUsers = async (req,res) => {
    const getAllDbUser = await usersData.find({})
    // console.log('users', usersData);
    res.json(getAllDbUser)
}
const getUserById = async (req,res) => {
    const user = await usersData.findById(req.params.id)
    // const id = req.params.id
    // const user = usersData.find(user => user.id == id)
    if(!user){
        res.status(404).send('User not found.')
    }
    res.status(200).json(user)
}

const createUser = async (req,res) => {
    // console.log('res :', req.body);
    if(!req.body || !req.body.first_name || !req.body.last_name || !req.body.email || !req.body.gender){
        return res.status(402).send('All fields are required')        
    }
    console.log('req.body :', req.body);
    try{
        const result = await usersData.create({
            firstName : req.body.first_name,
            secondName : req.body.last_name,
            email : req.body.email,
            gender : req.body.gender 
        })
        console.log('result :', result);
        return res.status(201).json('User Created')
    }catch(err){
        if(err.code === 11000 && err.keyPattern.email){
            return res.status(400).json({error : 'Email already exist'})
        }
        console.log(err + 'Error creating user');
        return res.status(500).json({error : 'Inernal Server Error' })
    }
}

const deleteUser = async (req,res) => {
    // const id = req.params.id
    // const userIndex = usersData.findIndex(user => user.id == id)
    await usersData.findByIdAndDelete(req.params.id)
    // console.log('userIndex :', userIndex);
    // if(userIndex == -1){
    //     return res.status(404).send('User not found.')
    // }
    // usersData.splice(userIndex, 1)
    res.status(200).send('User deleted successfully.')
}
const editUser = async (req,res) => {
    // const id = req.params.id
    // const userIndex = usersData.findIndex(user => user.id == id)
    console.log('req.body', req.body);
    // const updateUserData = {
        // firstName : req.body.first_name, secondName: req.body.last_name, email: req.body.email, gender:req.body.gender
    // }
    await usersData.findByIdAndUpdate(req.params.id, {firstName : req.body.first_name, secondName: req.body.last_name, email: req.body.email, gender:req.body.gender})
    // console.log('userIndex :', userIndex);
    // return
    // if(userIndex == -1){
    //     return res.status(404).send('User not found.')
    // }
    // usersData[userIndex].firstName = req.body.first_name;
    // usersData[userIndex].secondName = req.body.last_name;
    // usersData[userIndex].email = req.body.email;
    // usersData[userIndex].gender = req.body.gender;
    res.status(200).send('User edited successfully.')
}

module.exports = {
    getUsers,
    getUserById,
    editUser,
    deleteUser,
    createUser
}