import './App.css';
import {
    BrowserRouter as Router, Switch, Link, Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";
import UserDetails from "./Components/Users/User/UserDetails/UserDetails";
import PostDetails from "./Components/Posts/Post/PostDetails/PostDetails";
import CommentDetails from "./Components/Comments/Comment/CommentDetails/CommentDetails";


function App() {

    return (
        <Router>
            <div>
                <Link to={'/'}>Home page</Link>
                <br/>
                <Link to={'/Users'}>Users</Link>
                <br/>
                <Link to={'/Posts'}>Posts</Link>
                <br/>
                <Link to={'/Comments'}>Comments</Link>

                <hr/>

                <Switch>
                    <Route exact={true} path={'/'} component={Home}/>
                    <Route exact={true} path={'/Users'} component={Users}/>
                    <Route path={'/Users/:id'} component={UserDetails}/>
                    <Route exact={true} path={'/Posts'} component={Posts}/>
                    <Route path={'/Posts/:id'} component={PostDetails}/>
                    <Route exact={true} path={'/Comments'} component={Comments}/>
                    <Route path={'/Comments/:id'} component={CommentDetails}/>
                </Switch>

                <hr/>

            </div>
        </Router>
    );
}

export default App;
