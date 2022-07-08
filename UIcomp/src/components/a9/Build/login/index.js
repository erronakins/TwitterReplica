import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLogin, reg, fetchAllTweets, fetchAllUsers}
    from "../../../../services/twitterService";
import Build8 from "../HomeScreen";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'
import NavigationSidebar from "../NavigationSidebar";
const selectGetUser = (state) => state.user;
const selectAllUsers = (state) => state.users;

const Login = () => {
const user = useSelector(selectGetUser);
    let val = '';
    let val2 = '';
    let [whatsHappening, setWhatsHappening] = useState('');
    let [whatsHappening2, setWhatsHappening2] = useState('');
    const dispatch = useDispatch();
const users = useSelector(selectAllUsers);
 useEffect(() => fetchAllUsers(dispatch), []);
    const loginHandler = () => {
	
        getLogin(dispatch, 
            {user: whatsHappening, pass: whatsHappening2});
	  
	};
	const changeI = (event) => {
		val = event;
		
	}
	const changeI2 = (event) => {
		val2 = event;
		
	}
	
	const regHandler = () => {
	
        reg(dispatch, 
            {user: whatsHappening, pass: whatsHappening2});
	  
	};
	

     return (
        <div className="container">
	<div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
		
            
       
                <NavigationSidebar active="log"/>
            </div>

<div className="col-10 col-lg-7 col-xl-6">
           
                        <input type="text" value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "rgb(24,24,24)"}}
                                  placeholder=" Username?" />
<br/>
				<input type="text" value={whatsHappening2}
                                  onChange={(event) => setWhatsHappening2(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
				      paddingBottom: "5px",
                                      backgroundColor: "rgb(24,24,24)"}}
                                  placeholder=" Password?" />
                        <hr/>
                        <span>
                            <i className="fab fa-bitcoin fa-2x"></i> &nbsp;
                        </span>
			<Link to= "/home">
                        <button onClick={loginHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Login
                        </button></Link>
			{users.filter(u => u.userName === whatsHappening).length > 0 ? <Link to = "/home">
			<button onClick={regHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Register
                        </button></Link> : <Link to = "/priv">
			<button onClick={regHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Register
                        </button></Link>}
			
                    
		</div>

            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <h1>The #1 source for Crypto Searches</h1>
            </div>
        </div>
</div>
    );

	
}

export default Login;