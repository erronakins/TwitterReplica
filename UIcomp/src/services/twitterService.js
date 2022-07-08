//const TWEET_API = 'https://erron-node.herokuapp.com/api/tweets';
const TWEET_API = 'http://localhost:4000/api/tweets';

const TWEET_API2 = 'http://localhost:4000/api/users';
const TWEET_API3 = 'http://localhost:4000/api/users/login';
const TWEET_API4 = 'http://localhost:4000/api/users/reg';
const TWEET_API5 = 'http://localhost:4000/api/users/edit';


//API communication with server to return data and states to the application from DB

export const getLogin = (dispatch, user) =>
    fetch(TWEET_API3, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(u =>
            dispatch({
                type: 'login',
                u
            })
        );

export const reg = (dispatch, user) =>
    fetch(TWEET_API4, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(u =>
            dispatch({
                type: 'login',
                u
            })
        );

export const edit = (dispatch, user) =>
    fetch(TWEET_API5, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(u =>
            dispatch({
                type: 'login',
                u
            })
        );

export const editFoll = (dispatch, user) =>
    fetch(TWEET_API5, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(u => fetchAllUsers(dispatch)
        );



export const fetchAllTweets = (dispatch, user) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets, user
            })
        );



//add user id to edit like in node dao fetch all
export const fetchAllUsers = (dispatch) =>
    fetch(TWEET_API2)
        .then(response => response.json())
        .then(users =>
            dispatch({
                type: 'fetch-all-users',
                users
            })
        );



export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );

export const deleteTweet = (dispatch, tweet) => 
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));

export const likeTweet = (dispatch, tweet) => {
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT',
	body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response =>
        dispatch({
            type: 'like-tweet',
            tweet
    }))};





