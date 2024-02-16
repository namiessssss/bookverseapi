const mongoose = require ('mongoose')

const ClientSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
},{
    tymestamps:true
})

const Client = mongoose.model('Client',ClientSchema)

module.exports = Client