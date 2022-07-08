import React, {useState,useEffect} from "react";
import './tweet.css';
import TweetStats from "./TweetStats";
import {useDispatch, useSelector} from "react-redux";
import {deleteTweet}
        from "../../../../services/twitterService";
import {Link} from "react-router-dom";
import {fetchAllUsers} from "../../../../services/twitterService";

const selectGetUser = (state) => state.user;
const selectAllUsers = (state) => state.users;


const TweetListItem = ({tweet}) => {
    const dispatch = useDispatch();
const users = useSelector(selectAllUsers);
useEffect(() => fetchAllUsers(dispatch), []);
    const user = useSelector(selectGetUser);
    const deleteTweetClickHandler = () => {
         deleteTweet(dispatch, tweet);
    }
    return(
        <li className="list-group-item">
            <table>
                <tr>
                    <td className="align-text-top">
			<Link to={{pathname:"/user", search: `user=${tweet.uid}`}}>
                        <img className="rounded-circle wd-avatar-image"
                             src={tweet['logo-image']}/>
			</Link>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        {(user.length === 0) ? ('') : (user.filter(u => {return u.admin || u._id === tweet.uid}).length > 0) ? (<i onClick={deleteTweetClickHandler} className="fas fa-times fa-pull-right"></i>) : ('')}
                        {users.filter(u => u._id === tweet.uid).map(x => <span className="fw-bold">{x.userName}</span>)}
                        {tweet.verified ? <i className="ms-1 fas fa-badge-check"></i> : ''}
                        {users.filter(u => u._id === tweet.uid).map(x => <span className="ms-1 text-secondary">@{x.userName}</span>)}
                        <div>
                            {tweet.tweet}
                        </div>
                        {
                            tweet.attachments && tweet.attachments.image &&
                            <img src={tweet.attachments.image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "100%"}}/>
                        }
                        {
                            tweet.attachments && tweet.attachments.video &&
                            <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{width: "100%"}}
                                    src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                        {/*{JSON.stringify(tweet)}*/}
                        <TweetStats tweet={tweet}/>
                    </td>
                </tr>
            </table>
        </li>
    );
};

export default TweetListItem;