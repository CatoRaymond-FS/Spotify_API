//use mongoose
const mongoose = require('mongoose');

//create a schema
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

//export the model
module.exports = mongoose.model('User', userSchema);



