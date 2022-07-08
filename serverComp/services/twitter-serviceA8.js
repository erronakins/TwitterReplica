let tweets = require('../data/tweets.json');

module.exports = (app) => {
    
    const findAllTweets = (req, res) => {
	console.log("finding");
        res.json(tweets);
    }

    const postNewTweet = (req, res) => {
console.log("posting");
        const newTweet= req.body;
	console.log(tweets);
		tweets = [...tweets, newTweet];
	console.log(tweets);
        res.json(newTweet);
    }
    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }
    app.put('/api/tweetsa8/:id/like', likeTweet);

    app.delete('/api/tweetsa8/:id', deleteTweet);


    app.post('/api/tweetsa8', postNewTweet);


    app.get('/api/tweetsa8', findAllTweets);
};