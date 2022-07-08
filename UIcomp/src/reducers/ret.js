
function Ret(tweets, user){
	//let u = useSelector(selectGetUser);
	console.log('#####################');
	
	console.log('#####################');
	//if(!user){
		return tweets;
	//}
	return tweets.map(t => { if(t['users'].includes(user)){t['liked'] = true;} else {t['liked'] = false;} return t});
	
}

export default Ret;