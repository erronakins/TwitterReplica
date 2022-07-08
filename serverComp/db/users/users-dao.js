const modelU = require('./users-model');

const findUsers = () => modelU.find();
const findByID = (id) => modelU.find({_id: id});
const findUser = (user) => modelU.find({userName: user.user, pass:user.pass});
const findUsername = (user) => modelU.find({userName: user.user});
const makeUser = async (user, ot) => { console.log('in makeUser:' + user + ot); if(JSON.stringify(user).length > 2){ console.log(JSON.stringify(user).length); return [];}  await createUser(ot); return modelU.find(ot);};
const createUser = (ot) => {console.log('in create:' + ot.user); return modelU.create({followers: [], userName: ot.user, pass: ot.pass});}
const deleteUser = (id) => modelU.deleteOne({_id: id});
const updateUser = (u) => {
				if(u.do === 1){
					return modelU.update({_id: u.id}, { $set: {admin: u.admin, userName: u.user, pass: u.pass}, $push: { followers: u.foll}});
				}
				else{
					return modelU.update({_id: u.id}, { $set: {admin: u.admin, userName: u.user, pass: u.pass}, $pull: { followers: u.foll}});
				}

			   }
/*const updateUser = (id, user) => {
					let a = -1;
					if(!tweet.liked) a = 1;
					return model.updateOne({_id: id}, {$set: {liked: (!tweet.liked), "stats.likes": (tweet.stats.likes + a)}}).then(res => console.log(res));
				};*/

module.exports = {
  findUsers, createUser, findUser,findUsername, makeUser, findByID, updateUser,
  deleteUser//, updateTweet
};
