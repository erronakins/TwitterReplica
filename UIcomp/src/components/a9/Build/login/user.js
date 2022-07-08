import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import {edit, likeTweet, editFoll} from "../../../../services/twitterService";
import {fetchAllTweets, fetchAllUsers} from "../../../../services/twitterService";
import { useLocation } from 'react-router-dom';
import TweetListItem from "../TweetList/TweetListItem";
import {Link} from "react-router-dom";
const selectGetUser = (state) => state.user;
const selectAllTweets = (state) => state.tweets;
const selectAllUsers = (state) => state.users;

/*HERE WE CAN ADD FOLLOWERS - ADD FOLLOWERS ARRAY MONGO USER - ADD FOLLOW BUTTON - ON CLICK USE THE QUERY UID TO PUSH TO FOLLOWERS ARRAY - DISPLAY FOLLOWERS HERE - DISPLAY PEOPLE FOLLOWING*/

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}


const User = () => {
	const query = useQuery();
	let uid = query.get('user');

const users = useSelector(selectAllUsers);
    const user = useSelector(selectGetUser);
const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
useEffect(() => fetchAllTweets(dispatch), []);
useEffect(() => fetchAllUsers(dispatch), []);
   
	const editProfile = () => {
	

	let temp = users.filter(u => u._id === uid)[0];
	
	//alert(users.filter(u => u._id === uid)[0]._id + '    ' + user[0]._id);
	
        editFoll(dispatch, 
            {do: 1, foll: user[0]._id, admin: temp.admin, id: temp._id, user: temp.userName, pass: temp.pass});
	
	};

const editProfileU = () => {
	

	let temp = users.filter(u => u._id === uid)[0];
	
	//alert(users.filter(u => u._id === uid)[0]._id + '    ' + user[0]._id);
	
        editFoll(dispatch, 
            {do: 0, foll: user[0]._id, admin: temp.admin, id: temp._id, user: temp.userName, pass: temp.pass});
	
	};

function getUser(id){
	return users.filter(myu => myu._id === id)[0].userName;
	}
	
    
    return (<div className="container">
	<div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
		
            
       
                <NavigationSidebar active="profile"/>
            </div>


            <div className="col-10 col-lg-7 col-xl-6">
		{users.filter(u => u._id === uid).map(s => <h4>Username: {s.userName}</h4>)}

{user.length === 0 ? '' : user[user.length-1]._id === uid ? '' : users.filter(u => u._id === uid).map(s => (s.followers.includes(user[0]._id) ? (<button onClick={editProfileU} className="btn btn-primary rounded-pill"> Unfollow</button>) : (<button onClick={editProfile} className="btn btn-primary rounded-pill"> Follow</button>)))}
<hr/>
<h4>Followers:</h4>
{
                users.filter(u => u._id === uid).map(s => (<div className="list-group"> {s.followers.map(y => <Link to={{pathname:"/user", search: `user=${y}`}}><a className={`list-group-item`} href="#">{getUser(y)}</a></Link>)}</div>))
}

<hr/>
	<h4>Content From this User:</h4>
<ul className="list-group">
            {
                tweets.map(tweet => ((tweet.uid === uid) ?
                    (<TweetListItem key={tweet._id} tweet={tweet}/>) : '')
                )
            }
        </ul>


<hr/>

	<h4>All Liked Content from this User:</h4>
<ul className="list-group">
            {
                tweets.map(tweet => (!tweet.users ? "" : (tweet.users.includes(uid)) ?
                    (<TweetListItem key={tweet._id} tweet={tweet}/>) : '')
                )
            }
        </ul>


    </div>

            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
</div>
)
}

export default User;