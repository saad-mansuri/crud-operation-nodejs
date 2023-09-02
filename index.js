const express = require('express')
const {homeRoute} = require('./routes/home')
const mongoose = require('mongoose');
const {getUsersRoute} = require('./routes/api/users.js')
const app = express()
const PORT = 3001

app.use(express.urlencoded({ extended: false}))

app.use('/', homeRoute)
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