import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";
import {Link} from "react-router-dom";

const selectGetUser = (state) => state.user;


const HomeScreen = () => {
const user = useSelector(selectGetUser);
    return(
        <div className="container">
	<div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
		  <WhatsHappening/>
                <TweetList/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
	</div>
    )
}

export default HomeScreen;
