const User = require('../models/User')
const Skill = require('../models/Skill')

const skillsController = {
  index: (req, res) => {
    Skill.find({}).populate('skills')
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
      .then(skill => {
        res.render('skills/show', { skill: skill,})

      })
  },

  create: (req, res) => {
    Skill.create(req.body).then((newSkill) => {
      res.redirect(`/skills/${newSkill._id}`)
    })
  },


  edit: (req, res) => {
    Skill.findById(req.params.id).then(skill => {
      res.render('skills/edit', { skill: skill })
    })
  },

  update: (req, res) => {
    Skill.findByIdAndUpdate(req.params.id, req.body).then((updatedSkill) => {
      res.redirect(`/skills/${updatedSkill._id}`)
    })
  },

  delete: (req, res) => {
    Skill.findByIdAndRemove(req.params.id).then(() => {
      res.redirect('/skills')
    })
  }

}

module.exports = skillsController