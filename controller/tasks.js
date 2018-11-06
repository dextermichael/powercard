const Skill = require('../Models/Skill')
const Task = require('../Models/Task')

const tasksController = {
    index: (req, res) => {
        Task.find({}).populate('tasks')
            .then((tasks) => {
                res.render('tasks/index', {
                    tasks: tasks
                })
            })
    },
    create: (req, res) => {
        Task.create(req.body).then((newTask) => {
            res.redirect(`/tasks/${newTask._id}`)
        })
    },
    new: (req, res) => {
        res.render('tasks/new')
    },
    edit: (req, res) => {
        Task.findById(req.params.id).then(task => {
            res.render('tasks/edit', { task: task })
        })
    },
    update: (req, res) => {
        Task.findByIdAndUpdate(req.params.id, req.body).then((updatedTask) => {
            res.redirect(`/tasks/${updatedTask._id}`)
        })
    },
    show: (req, res) => {
        Task.findById(req.params.id)
            .then(task => {
                res.render('tasks/show', { task: task })
            })
    }
}

module.exports = tasksController