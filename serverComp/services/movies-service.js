let movies = [
    {_id: '123', title: 'Aliens', stars: 4.5},
    {_id: '234', title: 'Terminator', stars: 4.8},
    {_id: '345', title: 'Avatar', stars: 4.7}
];

module.exports = (app) => {

	const getAllMovies = (req, res) => res.json(movies);

	const deleteMovie = (req, res) => {
		console.log("in delete");
		const mid = req.params.movieId;
		console.log(mid);
		console.log(movies);
		
		movies = movies.filter(movie => movie._id !== mid);
		console.log(movies);
		
		res.sendStatus(200);	
	}

	const createMovie = (req, res) => {
		const newMovie = req.body;
		movies = [...movies, newMovie];
		res.sendStatus(200);
	}
	const editMovie = (req, res) => {
		console.log("editing");
    		const mid = req.params.movieId;
		
		
		console.log(req.body);

		movies = movies.map(movie => movie._id === mid ? req.body : movie);
		
		res.sendStatus(200);
	}
	app.put('/api/movies/:movieId', editMovie);

	app.post('/api/movies', createMovie);
	app.delete('/api/movies/:movieId', deleteMovie);
	app.get('/api/movies', getAllMovies);
        
    



};