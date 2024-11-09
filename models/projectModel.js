// import mongoose
const mongoose = require('mongoose')

// create schema
const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    languages:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
   github:{
        type:String,
        required:true,
        unique:true
    },
    website:{
        type:String,
        required:true
    },
    projectImg:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

// create model
const projects = mongoose.model('projects',projectSchema)

// export model
module.exports = projects