//let tweets = require('../data/tweets.json');

const dao = require('../db/tweets/tweets-dao');
const dao2 = require('../db/users/users-dao');

module.exports = (app) => {

    const findAllTweets = (req, res) =>
      dao.findAllTweets(req.body)
        .then(tweets => res.json(tweets));

const findAllUsers = (req, res) => {
console.log("in server");
      dao2.findUsers()
        .then(users => {

		res.json(users);
		console.log(users);
		})};


	const regUser = async (req, res) => {
	console.log('registration');
      await dao2.findUser(req.body)
        .then(async user => { 
				if(JSON.stringify(user).length > 2){res.json(user); return;}
				await dao2.findUsername(req.body).then(async user => {
				console.log('found?:' + user + 'reg:' + req.body.pass);
				
			await dao2.makeUser(user, req.body).then(u => {
			
		res.json(u);
		console.log(u);
		})})})};
			

	const findUser = (req, res) =>
      dao2.findUser(req.body)
        .then(user => { res.json(user);
			console.log(user);
			});

const upUser = async (req, res) =>
      await dao2.updateUser(req.body)
        .then(async stat => { 
			await dao2.findByID(req.body.id).then(user => {
				
			res.json(user);
			console.log(user);
			})});


    const createTweet = (req, res) => dao.createTweet(req.body)
    .then((tweet) => res.json(tweet));

    const deleteTweet = (req, res) => dao.deleteTweet(req.params.id)
    .then((status) => res.send(status));


    const likeTweet = (req, res) => dao.updateTweet(req.params.id, req.body)
    .then(status => res.send(status));


    app.put('/api/tweets/:id/like', likeTweet);

    app.delete('/api/tweets/:id', deleteTweet);


    app.post('/api/tweets', createTweet);


    app.get('/api/tweets', findAllTweets);
    app.get('/api/users', findAllUsers);
    app.post('/api/users/login', findUser);
    app.post('/api/users/reg', regUser);
    app.post('/api/users/edit', upUser);
};
