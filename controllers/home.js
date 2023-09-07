const handleHome = async (req,res) => {
    // res.send('hello this is home page')
    res.render('index', {title : 'Home Page'})
}

module.exports = {
    handleHome  
}