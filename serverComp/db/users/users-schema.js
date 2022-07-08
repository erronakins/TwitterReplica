const mongoose = require('mongoose');
const schemaUser = mongoose.Schema({
followers: [ { type : mongoose.Schema.Types.ObjectId} ],
 admin: Boolean,
  userName: String,
  pass: String,
  
}, {collection: "users"});
module.exports = schemaUser;
