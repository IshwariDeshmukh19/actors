const express=require('express')
const router = express.Router()
const Actor=require('../models/actors')

//get request
router.get("/", async (req,res)=>{
    const actors= await Actor.find()
    res.json(actors)
})

//post request logic

router.post('/',async (req,res)=>{
    const newActor=new Actor({name : req.body.name})
    const saved = await newActor.save()
    res.status(201).json(saved)
})

module.exports = router