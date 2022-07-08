import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import {Link} from "react-router-dom";
import {edit, likeTweet} from "../../../../services/twitterService";
import {fetchAllTweets} from "../../../../services/twitterService";

const selectGetUser = (state) => state.user;
const selectAllTweets = (state) => state.tweets;

const Priv = () => {
	
    const user = useSelector(selectGetUser);
    const dispatch = useDispatch();

    let [whatsHappening, setWhatsHappening] = useState('');
    let [whatsHappening2, setWhatsHappening2] = useState('');
	
	const editProfile = () => {
	
        edit(dispatch, 
            {id: user[0]._id, user: whatsHappening, pass: whatsHappening2});
	  
	};

    return (<div className="container">
	<div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
		
            
       
                <NavigationSidebar active="priv"/>
            </div>


            <div className="col-10 col-lg-7 col-xl-6">
	<div className="list-group">

	    


           
             <a className={`list-group-item`} href="#">
                <i className="fab fa-bitcoin"></i>
                &nbsp;When you use any portion of this Twitter/CryptoCurrency search app, we receive personal information from the device you are using - such as IP address. Personal Information such as email address and phone number will be collected upon you entering it when making a profile. We use this information for multiple reasons such as keeping your account safe, showing more relevant information and for advertising purposes. 

		
            </a>
		<a className={`list-group-item`} href="#">
                <i className="fab fa-bitcoin"></i>
                &nbsp;This application is public and all tweets and posts are viewable by any and all users. Users have the option to anonymously use the application when they do not log in. 
		
            </a>

<a className={`list-group-item`} href="#">
                <i className="fab fa-bitcoin"></i>
               &nbsp;In addition to information you share with us, your posts and content you've interacted with help us provide you more relevant content. 
            </a>

<a className={`list-group-item`} href="#">
                <i className="fab fa-bitcoin"></i>
                &nbsp;Third party advertising - third party advertisers are not given personally identifiable information. We group user interactions into categories - such as sport. Third party advertisers then have the option to target advertisements to these groups. Advertisers are provided statistics to gauge the effectiveness of their advertisements. These statistics do not contain information that can link to any individual or account, but include information such as how many users clicked a certain advert from a targeted group. 
		
            </a>


<a className={`list-group-item`} href="#">
                <i className="fab fa-bitcoin"></i>
                &nbsp;We may disclose your personal data with law enforcement if we believe that it is reasonably necessary to comply with a law, regulation, legal process, or governmental request such as to protect the safety of any person. However, nothing in this Privacy Policy is intended to limit any legal defenses or objections that you have against a government or third party entity. 
            </a>

<a className={`list-group-item`} href="#">
                <i className="fab fa-bitcoin"></i>
                &nbsp;Deleting Data: We log data for 15 months and users can request that their data be deleted by deleting their account  </a>

<a className={`list-group-item`} href="#">
                <i className="fab fa-bitcoin"></i>
                &nbsp;We may revise this policy at any time. If the policy becomes updated we will notify users via the app and update this page accordingly.    </a>
	
            
 

<a className={`list-group-item`} href="#">
                <i className="fab fa-bitcoin"></i>
                &nbsp;Use of this app acknowledges and accepts these terms.
            
        </a>
</div>

<Link to="/home">
	 <button className="btn btn-primary fa-pull-right rounded-pill">
                            Continue To Home
                        </button>
</Link>

    </div>

            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <h2>Privacy Policy</h2>
            </div>
        </div>
</div>
)
}

export default Priv;