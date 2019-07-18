'use strict'

const mongoose = require('mongoose')

// const Recipe = require('./Models/Recipe.js')
const { createOneRecipe, addManyRecipes, findOneAndUpdate, remove } = require('./recipesHelpers.js')
const data = require('./data.js')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  })

createOneRecipe()
addManyRecipes(data)
findOneAndUpdate()
remove()

process.on('SIGINT', async function () {
  await mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})
