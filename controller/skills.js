const User = require('../models/User')
const Skill = require('../models/Skill')

const skillsController = {
  index: (req, res) => {
    Event.find({}).populate('skills')
      .then((skills) => {
        res.render('skills/index', {
          skills: skills
        })
      })
  },

  new: (req, res) => {
    res.render('skills/new')

  },
  show: (req, res) => {
    Skill.findById(req.params.id)
      .then(event => {
        res.render('skills/show', { event: event })
      })
  },

  create: (req, res) => {
    Skill.create(req.body).then((newEvent) => {
      res.redirect(`/skills/${newEvent._id}`)
    })
  },


  edit: (req, res) => {
    Skill.findById(req.params.id).then(event => {
      res.render('skills/edit', { event: event })
    })
  },

  update: (req, res) => {
    Skill.findByIdAndUpdate(req.params.id, req.body).then((updatedEvent) => {
      res.redirect(`/skills/${updatedEvent._id}`)
    })
  },

  delete: (req, res) => {
    Skill.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/skills')
    })
  }

}

module.exports = skillsController