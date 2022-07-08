import React from "react";

const WhoToFollowListItem = ({who = {
            "avatarIcon": "/pics/kdl.jpg",
            "userName": "Kid Laroi",
            "handle": "@KidLaroi"
        }
}) => {
    const image = who.avatarIcon;
    const name = who.userName;
    const handle = who.handle;
    return(
	<li className="list-group-item">
		<div className = "row">
			
			<div className = "col-3">
				<div className="row"><img src={image} className = "wd-cir-image" /></div>
			</div>

			
			<div className = "col-5">
				<span className = "wd-bold">{name}</span> <i className="fas fa-check-circle"></i><br/>
				{handle}
			</div>
					
			
			<div className = "col-4">
				<button className = "btn btn-primary wd-cur-image wd-right">Follow</button>
			</div>
		</div>
	</li>
    );
}
export default WhoToFollowListItem;
