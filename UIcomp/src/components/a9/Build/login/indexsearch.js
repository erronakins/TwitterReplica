import React, {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
const selectGetUser = (state) => state.user;

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Search = (props) => {
  const user = useSelector(selectGetUser);
  const [origmoneyCount, setOrigmoneyCount] = useState([]);
  const [money, setmoney] = useState([]);

  useEffect( async () => {
    const currapi = "https://api.coingecko.com/api/v3/coins/list";
    const response = await fetch(currapi); //wait instead of using .then() promise
    const req = await response.json();
    setmoney(req);
    setOrigmoneyCount(req);
  		}, []);

const query = useQuery();
const dogString = query.get('myUser');


  return (
  
	
<div className="container">
	<div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
		
            
       
                <NavigationSidebar active="search"/>
            </div>


            <div className="col-10 col-lg-7 col-xl-6">
		  <input type="text" className="form-control" placeHolder="Search for CryptoCurrency Here"
                                  onChange={event => {
						const newResults = origmoneyCount.filter(m => m.name.toLowerCase().includes(event.target.value.toLowerCase()));
    						
    						setmoney(newResults);
					}} style={{width: "100%", color: "white",
                                      padding: "0px",
                                      backgroundColor: "rgb(24,24,24)" 
				}} />
      
      {money.map(m => <Link to={{pathname:"/info", search: `coin=${m.id}`}}><div key={m.id}>{m.name}</div></Link>)}
            </div>

            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
</div>




  );
}

export default Search;