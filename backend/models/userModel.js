const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    lname: {
      type: String,
      required: [true, 'Please add an lname'],
    },
    age: {
      type: String,
      required: [true, 'Please add an age'],
    },
    cp: {
      type: String,
      required: [true, 'Please add a contact number'],
    },
    address: {
      type: String,
      required: [true, 'Please add an address'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
