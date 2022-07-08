const model = require('./tweets-model');





const findAllTweets = (user) => model.find();

const createTweet = (tweet) => model.create(tweet);
const deleteTweet = (id) => model.deleteOne({_id: id});
const updateTweet = (id, tweet) => {


					let ins = 0;
					console.log(tweet);
					console.log('user:' + tweet.aUser);
					console.log('tUsers:' + tweet['users']);
					ins = tweet['users'].includes(tweet.aUser);

					
					let a = -1;
					if(!ins) a = 1;
					if(!ins){
						model.updateOne({_id: id}, {$set: {liked: (!ins), "stats.likes": (tweet.stats.likes + a)}, $push: { users: tweet.aUser}}).then(res => console.log(res));}
					else{
						model.updateOne({_id: id}, {$set: {liked: (!ins), "stats.likes": (tweet.stats.likes + a)}, $pull: { users: tweet.aUser}}).then(res => console.log(res));}
					    
						return model.findOne({_id: id});
					
				};

module.exports = {
  findAllTweets, createTweet,
  deleteTweet, updateTweet
};
