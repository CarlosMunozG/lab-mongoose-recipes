'use strict'

// const mongoose = require('mongoose')

const Recipe = require('./Models/Recipe.js')
// const data = require('./data.js')

const createOneRecipe = async () => {
  try {
    // con esto creamos nuevos documentos basados en la plantilla de recipeSchema
    const response = await Recipe.create({
      title: 'Brocoli con patatas',
      level: 'UltraPro Chef',
      ingredients: ['Brocoli', 'Patatas', 'ajo', 'aceite', 'sal'],
      cuisine: 'veggie',
      dishtype: 'Dish',
      duration: 30,
      creator: 'Anna'
    })
    console.log(response.title)
  } catch (error) {
    console.log(error)
  }
}

const addManyRecipes = async (data) => {
  try {
    const response = await Recipe.insertMany(data)
    response.forEach(recipe => console.log(recipe.title))
  } catch (error) {
    console.log(error)
  }
}

const findOneAndUpdate = async () => {
  try {
    const response = await Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
    console.log(response, 'The change was made!!!')
  } catch (error) {
    console.log(error)
  }
}

const remove = async () => {
  try {
    const response = await Recipe.remove({ title: 'Carrot Cake' })
    console.log(response, 'The recipe was deleted')
  } catch (error) {
    console.log(error)
  }
}

module.exports = { createOneRecipe, addManyRecipes, findOneAndUpdate, remove }
