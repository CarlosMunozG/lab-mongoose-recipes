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
    const response = Recipe.insertMany(data)
    response.forEach(recipe => console.log(recipe.title))
  } catch (error) {
    console.log(error)
  }
}

const findOneAndUpdate = async (data) => {
  try {
    const response = Recipe.findOneAndUpdate({
      ObjectId: '5d3036dfa6d37f8351ebbd29' }, { $set: { duration: 100 } }, { new: true })
    console.log(response, 'The change was made!!!')
  } catch (error) {
    console.log(error)
  }
}

const remove = async (data) => {
  try {
    const response = Recipe.remove({ _id: '5d3036dfa6d37f8351ebbd28' })
    console.log(response, 'The recipe was deleted')
  } catch (error) {
    console.log(error)
  }
}

module.exports = { createOneRecipe, addManyRecipes, findOneAndUpdate, remove }
