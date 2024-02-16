const express = require('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const { Server } = require('http')


const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth", require("./Routes/clientRouter"))
app.use("/book", require("./Routes/booksRouter"))
const connectdb = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://imane:gomycode@cluster0.mkdoydg.mongodb.net/bookapp?retryWrites=true&w=majority')
        console.log('Db Connected')
    } catch (error) {
        console.log(error)
    }
}

connectdb()

app.listen(4000, () =>{
    console.log("Server Running")
})