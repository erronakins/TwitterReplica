import React from "react";
import NavigationSidebar from "./NavigationSidebar/index";
import WhoToFollowList from "./WhoToFollowList/index";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import {Link} from "react-router-dom";


const Build = () => {
    return(<div className="container">
	<div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="explore"/>
	</div>

	  <div className="col-10 col-lg-7 col-xl-6">
	<ExploreComponent/>
	</div>

	<div className="d-none d-lg-block col-lg-4 col-xl-4">
	<WhoToFollowList/>
	</div>
	</div>
	


	</div>
    )
};
export default Build;
