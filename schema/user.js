const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User