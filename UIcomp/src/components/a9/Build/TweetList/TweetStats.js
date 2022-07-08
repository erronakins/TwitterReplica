import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {likeTweet} from "../../../../services/twitterService";
import {fetchAllTweets} from "../../../../services/twitterService";
import {Link} from "react-router-dom";
const selectGetUser = (state) => state.user;
const selectAllTweets = (state) => state.tweets;

const TweetStats = ({tweet}) => {
	const tweets = useSelector(selectAllTweets);
    const user = useSelector(selectGetUser);
    const dispatch = useDispatch();
	let ins = 0;
	useEffect(() => fetchAllTweets(dispatch), []);
	
	
    const likeClickHandler = () => {
	console.log('------------------------BEFORE RELOAD----------------------------------------');
	window.location.reload();
	console.log('innnnn handlerrrrrrrrrr:' + user[0]._id);
	if(user.length > 0){
		console.log(tweet)
		
		/*let ins2 = tweet.users.some(u => u === user[0]._id);
		ins = ins2;
		
		if(ins){
			tweet.stats.likes--; 
			tweet.liked = false;
			tweet['users'] = tweet['users'].filter(u => u != user[0]._id);
		}
		else{
			tweet.stats.likes++; 
			tweet.liked = true; //irrelv
			tweet['users'] = tweet['users'].push(user[0]._id);
		}
		

		let ins3 = tweet['users'].some(u => u === user[0]._id);
		ins = ins3;
		tweet['users'].push(user[0]._id);
		console.log(tweet);*/
		tweet['aUser'] = user[0]._id;
		likeTweet(dispatch, tweet);
		
	}
	else{
		
		alert("Please Login/Register to Like Posts");
	}
    };
    return (<div className="row mt-2">
        <div className="col">
            <i className="far fa-comment me-2"></i>
            {tweet.stats.comments}
        </div>
        <div className="col">
            <i className="fas fa-retweet me-2"></i>
            {tweet.stats.retweets}
        </div>

	{user.length > 0 ? (
        <div className="col" onClick={likeClickHandler}>
            {
                <i className="fas fa-heart me-2"
                   style={{color: tweet.liked ? 'red': "white"}}></i>
            }
        
            
            {tweet.stats.likes}
        </div>) : (<div className="col">
            {
		<Link to="/login">
                <i className="fas fa-heart me-2"
                   style={{color: tweet.liked ? 'red': "white"}}></i></Link>
            }
        
            
            {tweet.stats.likes}
        </div>)}
        <div className="col">
            <i className="fas fa-external-link-alt me-2"></i>
        </div>
    </div>)
}

export default TweetStats;