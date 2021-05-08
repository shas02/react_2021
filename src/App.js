import './App.css';
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>
            {/*<div>*/}
            {/*    <Users/>*/}
            {/*</div>*/}
            {/*<br/>*/}
            {/*<div>*/}
            {/*    <Posts/>*/}
            {/*</div>*/}


            <Router>
                <Link to={'/Users'}>to users</Link>
                <br/>
                <Link to={'/Posts'}>to posts</Link>
                <Switch>
                    <Route path={'/Users'} render={() => (<Users/>)}/>
                    <Route path={'/Posts'} render={() => (<Posts/>)}/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
