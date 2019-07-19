'use strict'

const mongoose = require('mongoose')

// const Recipe = require('./Models/Recipe.js')
const { createOneRecipe, addManyRecipes, findOneAndUpdate, deleteOne, emptyCollection } = require('./recipesHelpers.js')
const data = require('./data.js')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  })

const doExercise = async () => {
  await emptyCollection()
  await createOneRecipe()
  await addManyRecipes(data)
  await findOneAndUpdate('Rigatoni alla Genovese')
  await deleteOne('Carrot Cake')
  mongoose.connection.close()
}

doExercise()
