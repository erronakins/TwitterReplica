const mongoose = require('mongoose');
const schemaUser = require('./users-schema');
const modelU = mongoose.model('UserModel', schemaUser);
module.exports = modelU;
