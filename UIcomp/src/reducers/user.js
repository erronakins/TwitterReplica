

const user = (state = [{}], action) => {
    switch (action.type) {
	    case 'login':
		    if(action.u.length){
		      console.log(action.u);
		    }
		    else{alert("Invalid Login");}
        return action.u;
        break;
      default:
        return state;
    }
};


export default user;