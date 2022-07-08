const mongoose = require('mongoose');
const schema = mongoose.Schema({
  uid: mongoose.Schema.Types.ObjectId,
  topic: String,
  userName: String,
  verified: {type: Boolean, defaultValue: false},
  handle: String,
  title: String,
  liked: {type: Boolean, defaultValue: false},
  tweet: String,
  time: String,
  "logo-image": String,
  "avatar-image": String,
  "users": [{ type : mongoose.Schema.Types.ObjectId, ref: 'TweetModel' }],
  stats: {
    comments: {type: Number, defaultValue: 0},
    retweets: {type: Number, defaultValue: 0},
    likes: {type: Number, defaultValue: 0}
  }
}, {collection: "tweets"});
module.exports = schema;
