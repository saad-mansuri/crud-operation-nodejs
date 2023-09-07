const express = require('express')
const path = require('path')
const {homeRoute} = require('./routes/home')
const mongoose = require('mongoose');
const {getUsersRoute} = require('./routes/api/users.js')
const {showUsersRoute} = require('./routes/users')
const app = express()
const PORT = 3001

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}))

app.set('view engine', 'ejs')
// Serve static files from the 'public' directory

app.use('/', homeRoute)
app.use('/users', showUsersRoute)
app.use('/api/users', getUsersRoute)



// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/rest-ful-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});