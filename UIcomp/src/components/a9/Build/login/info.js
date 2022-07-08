import React, {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import TweetListItem from "../TweetList/TweetListItem";
import WhatsHappening from "../WhatsHappening";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {fetchAllTweets} from "../../../../services/twitterService";
const selectGetUser = (state) => state.user;
const selectAllTweets = (state) => state.tweets;

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Info = () => {
  const user = useSelector(selectGetUser);
const tweets = useSelector(selectAllTweets);
 const dispatch = useDispatch();
  const [money, setmoney] = useState([]);

const query = useQuery();
let coin = query.get('coin');
useEffect(() => fetchAllTweets(dispatch), []);
  useEffect( async () => {
	
    coin = query.get('coin');
    const currapi = "https://api.coingecko.com/api/v3/coins/list";
    const response = await fetch(currapi); //wait instead of using .then() promise
    const req = await response.json();
    setmoney(req);
    
  		}, []);
  return (
  
	
<div className="container">
	<div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
		
           <NavigationSidebar active="search"/>
            </div>


            <div className="col-10 col-lg-7 col-xl-6">
		 <Link to={{pathname:"/search"}}><input type="text" className="form-control" placeHolder="Back To Search"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      
                                      backgroundColor: 	"	rgb(24,24,24)"}} /></Link>


      		{money.filter(m => m.id === coin).map(c => {	
					return <div> <h2>Coin Name: {c.name}</h2>
						<h3>Market Symbol: {c.symbol}</h3>
						<h4>Market ID: {c.id}</h4> </div>})}
<hr/>
<h4>Related Content:</h4>
<ul className="list-group">
            {
                tweets.map(tweet => ((tweet.topic.toLowerCase().includes(coin.toLowerCase()) || tweet.tweet.toLowerCase().includes(coin.toLowerCase()) || tweet.userName.toLowerCase().includes(coin.toLowerCase())) ?
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



  );
}

export default Info;