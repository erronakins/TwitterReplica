import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {postNewTweet, fetchAllTweets}
    from "../../../../services/twitterService";
import Search from "../login/indexsearch";

const selectGetUser = (state) => state.user;



const WhatsHappening = () => {
    const user = useSelector(selectGetUser);
    let val = '';
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tweetClickHandler = () => {
	let date = (new Date()).getTime() + '';
	let stato = {
                    comments: 123,
                    retweets: 234,
                    likes: 345
                };
	
        postNewTweet(dispatch, 
            {'uid': user[user.length-1]._id,'topic': 'Web Development', 'userName': 'ReactJS', verified: false, users: [], handle: 'ReactJS', time: '2h', tweet: whatsHappening, 'avatar-image': '/pics/21s.jpg', 'logo-image': '/pics/kdl.jpg', stats: stato});
	};
	const changeI = (event) => {
		val = event;
		
	}
console.log('whatsadabjhscfhjsdv');
	console.log(user);

/*const search = (event) => {
	
    if(event.key === 'Enter') {
        //alert(event.target.value); 
	return (<Search s={event.target.value} />)       
    }
}onKeyDown={search}*/
    if(user.length > 0){ return (
        <>

		<Link to={{pathname:"/search", search: `myUser=${user[0].userName}`}}><input type="text" className="form-control" placeHolder="Search for CryptoCurrency Here"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      
                                      backgroundColor: 	"	rgb(24,24,24)"}} /></Link>


		
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={'/pics/21s.jpg'}
                             className="rounded-circle"
                             style={{width: '48px', margin: '16px'}}/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="far fa-analytics me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Post
                        </button>
                    </td>
                </tr>
            </table>
        </>
    ); }
	else {

		return (<><Link to="/login">
<button  className="btn btn-primary rounded-pill" style={{width: "100%"}}>
                            Login/Register to Interact
                        </button>
              
          </Link> 
		<hr/></>)
	}
}

export default WhatsHappening;