
import posts from './data/tweets.json';

import Ret from './ret.js';


const tweets = (state = posts, action) => {
    
    switch (action.type) {
	
	case 'fetch-all-tweets':
		
		//HERE WE TURN ON AND OFF LIKED BY USERS
		console.log('xxxxxxxxxxxxxxxxxx');
	    console.log(action.tweets);
		console.log(action.tweets.length);
		console.log(action.user);
		console.log('xxxxxxxxxxxxxxxxxx');
            return Ret(action.tweets, action.user);
            break;
	

	case 'delete-tweet':
		
            return state.filter(tweet => tweet._id !== action.tweet._id);
            break;
	case 'like-tweet':
		
            return state.map(tweet => {
                    if(tweet._id === action.tweet._id) {
                        /*if(tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }*/
			console.log('---------------------------');
			console.log(action.tweet);
			console.log('---------------------------');
			console.log(tweet);
			console.log('---------------------------');
                        return action.tweet;
                    } else {
                        return tweet;
                    }
            });
		
            break;


        case 'create-tweet':
		
       		return [...state, action.tweet];
            	break;
        default:
		
            return(state);
    }
};

export default tweets;