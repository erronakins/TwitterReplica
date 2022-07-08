

const users = (state = [{userName: "fgf", pass: "qws"}], action) => {
    switch (action.type) {
	case 'fetch-all-users':
	    console.log(action.users);
            return action.users;
            break;
        default:
            return state;
    }
};


export default users;