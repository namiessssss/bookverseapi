const Client = require('../Models/Client')
const router = require('express').Router()
const bcrytp = require('bcryptjs')
const jwt = require("jsonwebtoken")
const CheckAuth = require('../middleware/AuthCheck') 


router.post('/register', async (req, res) =>{
    try {
        const {username, email, password} = req.body
        const hashPass = await bcrytp.hashSync(password, 10)
        const data = await Client.create({
            username,
            email,
            password: hashPass
        })
        res.json(data)
    } catch (error) {
        
        console.log(error)
        res.json({
            error: error?.message
        })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const us = await Client.findOne({email})
        if(us) {
            const checkPas = await bcrytp.compareSync(password, us.password)
            if(checkPas) {
                const token = jwt.sign({email: us.email, id: us._id},'12345', {expiresIn: '7d'})
                res.json({
                    token,
                    user: us
                })
            }
            else {
                res.json({msg: "Password Wrong"})
            }
        }
        else {
            res.json({msg: "User Not Found"})
        }
    } catch (err) {
        console.log(err)
        res.json({
            msg: err?.message
        })
    }
})

router.get('/profile', CheckAuth, async (req, res) => {
    try {
        const data = await Client.findById(req.user)
        res.json(data)
    } catch (err) {
        console.log(err)
        res.json({msg: err?.message})
    }
})


module.exports = router