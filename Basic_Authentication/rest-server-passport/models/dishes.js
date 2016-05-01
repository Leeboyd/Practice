var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

// create a Schema
var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  image: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  price: {
    type: Currency,
    required: true,
    default: 0.99
  },
  description: {
    type: String,
    required: true
  },
  comments: [commentSchema]
},{
  timestamps: true,
  collection: 'Dishes'
});

var Dishes = mongoose.model('Dish', dishSchema);
module.exports = Dishes;
