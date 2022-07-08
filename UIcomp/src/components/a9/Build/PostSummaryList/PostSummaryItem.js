import React from "react";


const PostSummaryItem = ({post = {
      "topic": "Music Production",
      "userName": "GRAMMYs",
      "time": "2h",
      "title": "Check out this years GRAMMY Awards. Singer/Songwriter/Producer Erron Akins picks up four Grammys this night.",
      "image": "/pics/kdl.jpg"
   }}) => {

    const image = post.image;
    const name = post.userName;
    const topic = post.topic;
    const time = post.time;
    const title = post.title;
    return (<li className="list-group-item">
			<div className = "row">

				
				<div className = "col-8 col-lg-9">
	    <p>
	    {topic !== null && topic !== "" && <span className="wd-grey">{topic}<br /></span>}
	    {name !== null && name !== "" && <span className = "wd-bold">{name} </span>}
	    <i className="fas fa-check-circle"></i> <span span className="wd-grey">- {time}<br /></span>
	    {title !== null && title !== "" && <span className = "wd-bold">{title}</span>} 
	    </p>
		</div>
					
		
		<div className = "col-4 col-lg-3">
		<div className="row">
			<img src={image} className = "wd-cur-image" />
		</div>
		</div>
		</div>
		</li>);

	
}

export default PostSummaryItem;