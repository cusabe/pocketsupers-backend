const express = require('express');
const Superhero = require('../model/superhero');
const router = express.Router()

router.post('/post', async (req, res) => {
    const superhero = new Superhero({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        powerstats: req.body.powerstats
    })

    try{
        const superheroToSave = await superhero.save();
        res.status(200).json(superheroToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', async (req, res) => {
    try{
        const superheroes = await Superhero.find();
        res.status(200).json(superheroes)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

router.get('/getOne/:id', async (req, res) => {
    try{
        const superhero = await Superhero.findOne({id: req.params.id});
        res.status(200).json(superhero)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const updatedSuperhero = await Superhero.findOneAndUpdate(
            {id: req.params.id},
            req.body,
            { new: true }
        )
        res.status(200).send(updatedSuperhero)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedSuperhero = await Superhero.findOneAndDelete({id: req.params.id})
        res.status(200).send(`${deletedSuperhero.name} has been removed from your collection..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;



