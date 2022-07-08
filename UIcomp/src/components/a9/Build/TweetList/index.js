import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/twitterService";
import {fetchAllUsers} from "../../../../services/twitterService";


const selectAllTweets = (state) => state.tweets;
const selectAllUsers = (state) => state.users;
const selectGetUser = (state) => state.user;

const TweetList = () => {
	
    const user = useSelector(selectGetUser);
    const tweets = useSelector(selectAllTweets);
    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();

 let id = '';
console.log('aaaaaaaaaaaaaaaaaaaaaaa');
console.log('dis iser: ' + selectGetUser);
console.log(tweets);
console.log('aaaaaaaaaaaaaaaaaaaaaaa');
	//if(user){ id = user[0]._id };
    
    useEffect(() => fetchAllTweets(dispatch), []);
  
    
    useEffect(() => fetchAllUsers(dispatch), []);
if(!user){
tweets.map(t => {t.liked = false; return t});}

else if(!user[0]){
tweets.map(t => {t.liked = false; return t});}
else{
tweets.map(t => { if(!t['users']){t['liked'] = true; return t;}  if(t['users'].includes(user[0]._id)){t['liked'] = true;} else {t['liked'] = false;} return t});
	//tweets = tweets.map(t => { if(t['users'].includes(user._id)){t['liked'] = true;} else {t['liked'] = false;} return t});
}
    return(
<>
	
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem key={tweet._id} tweet={tweet}/>
                )
            }
        </ul>
</>
    )
};
export default TweetList;
