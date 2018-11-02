const User = require('../models/User')

//show users
const UsersController= {
    index:(req, res) => {
        User.find({}).populate('users')
        .then((users) => {
            res.render('users/index',{
                users:users
            })
        })
    } 
}




module.exports = UsersController