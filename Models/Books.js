const mongoose = require('mongoose')
const BookSchema = new mongoose.Schema({
    image:{
        type: String,
    },
    title:{
        type: String,
    },
    writer:{
        type: String
    },
    pdf:{
        type: String
    }
},{
    tymestamps:true
})

const Books = mongoose.model('Books',BookSchema)
module.exports = Books