'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// crear un Schema para crear el modelo de receta
const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true // es una propiedad para que no se repita en este caso title
  },
  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] // enum sirve para crear un desplegable con las opciones que le pasamos en el array []
  },
  ingredients: Array, // Si solo tiene una característica no hace falta ponerlo dentro de un objeto {}
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']
  },
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg' // el valor por default si no tiene otra imagen
  },
  duration: {
    type: Number,
    min: 0 // es el valor por default cuando hay un mínimo. Solo sirve para numbers
  },
  creator: String,
  created: {
    type: Date,
    default: new Date() // por defecto te coge la fecha actual.
    // otra opcion es "default: Date.now()" pero los datos no están formateados en modo fecha.
    // otra opción es "timestamps: true". Es como un sello que pone fecha en el momento en que se ha creado el documento.
  }
})

// la parte de la creación del modelo
// tenemos que transformar los datos de citySchema a model para poder pasar los datos
const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
