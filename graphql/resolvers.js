const express = require('express');
const Superhero = require('../model/superhero');

const root = {
    hello: () => {
      return 'Hello world!';
    },

    listSuperheroes: async () => {
        try{
            const superheroes = await Superhero.find();
            return superheroes;
        }
        catch(error){
            throw new Error("Could not listSuperheroes")
        }
    },

    getSuperheroByID: async (id) => {
        // console.log(id);
        try{
            const superhero = await Superhero.findOne(id);
            return superhero;
        }
        catch(error){
            throw new Error("Could not find that superhero")
        }
    },

    createSuperhero: async ({input}) => {
        console.log(input);
        try{
            const superhero = new Superhero({
                id: input.id,
                name: input.name,
                image: input.image,
                powerstats: input.powerstats
            })
            const superheroToSave = await superhero.save();
            return superheroToSave
        }
        catch(error){
            throw new Error("Could not create that superhero")
        }
    },

    updateSuperhero: async ({input}) => {
        console.log(input);
        try {
            const updatedSuperhero = await Superhero.findOneAndUpdate(
                {id: input.id},
                input,
                { new: true }
            )
            return updatedSuperhero
        }
        catch (error) {
            throw new Error("Could not update that superhero")
        }
    },

    deleteSuperhero: async(id) => {
        console.log(id);
        try {
            const deletedSuperhero = await Superhero.findOneAndDelete(id)
            return deletedSuperhero;
        }
        catch (error) {
            throw new Error("Could not delete that superhero")
        }
    }
  };


module.exports = root;
