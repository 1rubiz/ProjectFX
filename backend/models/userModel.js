const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            required: [true, 'Please add a name'],
          },
          email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
          },
          phone: {
            type: String,
            required: [true, 'Please add a phone number'],
            default: "+234",
          },
          password: {
            type: String,
            required: [true, 'Please add a password'],
          },
          nationality: {
            type: String,
            required: [true, 'Where are you from?'],
          },
    },
    {
        timestamps: true,
    }
)


module.exports = mongoose.model('User', userSchema)