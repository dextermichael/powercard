const User = require('../models/User')
const Skill = require('../models/Skill')
const Task = require('../models/Task')
const mongoose = require('./connection')

// //task
const PushUps = new Task({
    name: "Diamond",
    duration: "5min"
})
const Running = new Task({
    name:"Jogging",
    duration: "5min"
})


//skill
const Strength = new Skill({
    name: "Fitness",
    
    task: [PushUps,Running]

})


//user
const user1 = new User({
    name: "Jon Jonz",
    email: "JJ@jl.com",
    password: "Mars",
    skills:[Strength]
    
})



User.remove({})
    .then(() => Skill.remove({}))
    .then(() => Task.remove({}))
    .then(() => Skill.insertMany([Strength]))
    .then(() => Task.insertMany([PushUps,Running]))
    .then(() => user1.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 