const mongoose = require('mongoose'),
    schema = mongoose.Schema

const authorSchema = new schema({
    name: String,
    age: Number
})

module.exports = mongoose.model('Author', authorSchema)