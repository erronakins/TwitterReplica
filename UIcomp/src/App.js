import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen9 from "./components/a9/Build/HomeScreen";
import Login from "./components/a9/Build/login"
import Search from "./components/a9/Build/login/indexsearch"
import Info from "./components/a9/Build/login/info"
import Edit from "./components/a9/Build/login/edit"
import Priv from "./components/a9/Build/login/priv"
import User from "./components/a9/Build/login/user"

import who from "./reducers/who";
import tweets from "./reducers/tweets";
import users from "./reducers/users";

import user from "./reducers/user";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers, createStore, applyMiddleware } from "redux";

import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets,users: users, user: user, who})

const persistConfig = {
  key: 'authType',
  storage: storage,
  whitelist: ['user'] 
};
const pReducer = persistReducer(persistConfig, reducer);
const middleware = applyMiddleware(thunk, logger);

//const store = createStore(reducer);

const store = createStore(pReducer, middleware);

const persistor = persistStore(store);


//Initialization point where all web ui elements are loaded
function App() {
  return (
 <Provider store={store}>
   <BrowserRouter>
    <div className="container">
	<Route path={["/home", "/"]}
                        exact={true} component={HomeScreen9}/>
	<Route path={["/login"]} exact={true}>
           <Login/>
       </Route>
	<Route path={["/search"]} exact={true}>
           <Search/>
       </Route>
	<Route path={["/info"]} exact={true}>
           <Info/>
       </Route>
	<Route path={["/edit"]} exact={true}>
           <Edit/>
       </Route>
	<Route path={["/priv"]} exact={true}>
           <Priv/>
       </Route>
	<Route path={["/user"]} exact={true}>
           <User/>
       </Route>
    </div>
   </BrowserRouter>
</Provider>

  );
}
export default App;

