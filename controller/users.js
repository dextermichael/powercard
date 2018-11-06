const User = require('../Models/User')
const Skill = require('../Models/Skill')

const usersController = {
  index: (req, res) => {
    User.find({}).populate('skills')
      .then((users) => {
        res.render('users/index', {
          users: users
        })
      })
  },
  new: (req, res) => {
    res.render('users/new')
    User.create(req.body).then((newUser) => {
      res.redirect('/users/new')
    })
  },
  show: (req, res) => {
    const userId = req.params.id
    User.findById(userId).populate('skills')
      .then(user => {
        res.render('users/show', { user: user })
      })
  },
  create: (req, res) => {
    User.create(req.body).then((newUser) => {
      res.redirect(`/users/${newUser._id}`)
    })
  },


  edit: (req, res) => {
    User.findById(req.params.id).then(user => {
      res.render('users/edit', { user: user })
    })
  },

  update: (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
      res.redirect(`/users/${updatedUser._id}`)
    })
  },

  delete: (req, res) => {
    User.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/users')
    })
  }

}

module.exports = usersController