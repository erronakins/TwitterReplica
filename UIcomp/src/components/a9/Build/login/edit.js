import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import {edit, likeTweet} from "../../../../services/twitterService";
import {fetchAllTweets} from "../../../../services/twitterService";

const selectGetUser = (state) => state.user;
const selectAllTweets = (state) => state.tweets;

const Edit = () => {
	
    const user = useSelector(selectGetUser);
    const dispatch = useDispatch();

    let [whatsHappening, setWhatsHappening] = useState('');
    let [whatsHappening2, setWhatsHappening2] = useState('');
	
	const editProfile = () => {
	
        edit(dispatch, 
            {admin: user[0].admin, id: user[0]._id, user: whatsHappening, pass: whatsHappening2});
	
	};
	
	
	const admin = (stat) => {	
console.log(stat.target.checked);
 edit(dispatch, 
            {admin: stat.target.checked, id: user[0]._id, user: user[0].userName, pass: user[0].pass});
	
//window.location.reload();

}
	
    
    return (<div className="container">
	<div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
		
            
       
                <NavigationSidebar active="profile"/>
            </div>


            <div className="col-10 col-lg-7 col-xl-6">
	Username: <input type="text" value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "rgb(24,24,24)"}}
                                  placeHolder={user[0].userName} />
<br/>
				Password: <input type="text" value={whatsHappening2}
                                  onChange={(event) => setWhatsHappening2(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
				      paddingBottom: "5px",
                                      backgroundColor: "rgb(24,24,24)"}}
                                  placeHolder={user[0].pass} />
	<div class="form-check">
  <input class="form-check-input" onChange={admin} type="checkbox" value="" defaultChecked={user.filter(u => u.admin).length > 0 ? "true" : ""} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Enable Admin Mode
  </label>
</div>
	 <button onClick={editProfile} className="btn btn-primary fa-pull-right rounded-pill">
                            Update Login/Password
                        </button>

    </div>

            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
</div>
)
}

export default Edit;