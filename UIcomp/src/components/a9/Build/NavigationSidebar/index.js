import React, {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
const selectGetUser = (state) => state.user;

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
        
	const user = useSelector(selectGetUser);
	const dispatch = useDispatch();
	const logout = () => {

	
	dispatch({ type: 'logout'});
        //window.location.reload();
	};


    if(user.length > 0){ return (
	<>
	<div className="list-group">

	   <Link to={{pathname:"/user", search: `user=${user[user.length-1]._id}`}}>
           <a className={`list-group-item ${active === 'log' ? 'active' : ''}`} href="#">
                <i className="fab fa-bitcoin"></i>
		<span className="d-none d-xl-inline-block">
                   <b> &nbsp;{user[user.length-1].userName}</b>
			
                </span>
            </a>
	   </Link>
	   

	    <Link to="/home">
            <a className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="#">
                <i className="fa fa-home"></i>
                <span className="d-none d-xl-inline-block">
                    &nbsp;Home
                </span>
            </a>
	    </Link>

		<Link to="/search">
            <a className={`list-group-item ${active === 'search' ? 'active' : ''}`} href="#">
                <i className="fas fa-hashtag"></i>
                <span className="d-none d-xl-inline-block">
                    &nbsp;Search 
                </span>
            </a>
	</Link>


           <Link to="/edit">
             <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="#">
                <i className="fas fa-user"></i>
                
		<span className="d-none d-xl-inline-block">
                    &nbsp;Profile
                </span>
            </a>
	</Link>
	<Link to="/priv">
             <a className={`list-group-item ${active === 'priv' ? 'active' : ''}`} href="#">
                <i className="fas fa-user-secret"></i>
                
		<span className="d-none d-xl-inline-block">
                    &nbsp;Privacy
                </span>
            </a>
	</Link>
            
        </div>
	{active === 'log' ? '' : <Link to="/login">
        	<button className="btn btn-primary mt-2 wd-cur-image wd-button">
                    <i className="fas fa-angle-double-right"></i>
                <span className="d-none d-xl-inline-block">
                    &nbsp;Switch Account
                </span>

                </button>
	</Link>}
	</>
);}

else { return (
<>
	<div className="list-group">

	     
           <a className={`list-group-item ${active === 'log' ? 'active' : ''}`} href="#">
                <i className="fab fa-bitcoin"></i>
		<span className="d-none d-xl-inline-block">
                    &nbsp;
                </span>
            </a>
	   
	   

	    <Link to="/home">
            <a className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="#">
                <i className="fa fa-home"></i>
                <span className="d-none d-xl-inline-block">
                    &nbsp;Home
                </span>
            </a>
	    </Link>

		<Link to="/search">
            <a className={`list-group-item ${active === 'search' ? 'active' : ''}`} href="#">
                <i className="fas fa-hashtag"></i>
                <span className="d-none d-xl-inline-block">
                    &nbsp;Search 
                </span>
            </a>
	</Link>
	<Link to="/priv">
             <a className={`list-group-item ${active === 'priv' ? 'active' : ''}`} href="#">
                <i className="fas fa-user-secret"></i>
                
		<span className="d-none d-xl-inline-block">
                    &nbsp;Privacy
                </span>
            </a>
	</Link>


           
            
        </div>
	{active === 'log' ? '' : <Link to="/login">
        <button className="btn btn-primary mt-2 wd-cur-image wd-button">Login</button>
	</Link>
	 } </>
);}
}
export default NavigationSidebar;