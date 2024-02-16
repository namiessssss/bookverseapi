const router = require ('express').Router()
const Books = require("../Models/Books")

router.get('/', async (req, res) => {
    try {
        const data = await Books.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})
router.get('/:id',async(req, res)=>{
    try {
        const data = await Books.findById(req.params.id)
        res.json(data)
    } catch (error) {
        console.log(error)
        
    }
})

router.post('/add', async (req, res) => {
    try {
        console.log(req.body)
        const data = await Books.create(req.body)
        res.json(data)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router