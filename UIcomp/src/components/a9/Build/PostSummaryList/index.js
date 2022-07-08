import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import PostSummaryItem from "./PostSummaryItem";
import exploreItems from "./posts.json"
import exploreItems2 from "./posts2.json"

const selectGetUser = (state) => state.user;

const PostSummaryList = ({title}) => {
const user = useSelector(selectGetUser);
const text = exploreItems.map((d) => <PostSummaryItem post={d} />);
const text2 = exploreItems2.map((d) => <PostSummaryItem post={d} />);
    return (
            <ul class="list-group">
		{ title &&
		<li className="list-group-item"><h5 style={{fontWeight: "bold"}}>What's Happening:</h5></li>
		}
		{user.length > 0 ? text : text2}
		
            </ul>
); }

export default PostSummaryList;