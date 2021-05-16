import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Characters from "./Components/Characters/Characters";
import Inventory from "./Components/Inventory/Inventory";
import CharacterDetails from "./Components/Characters/Character/CharacterDetails/CharacterDetails";
import ThingDetails from "./Components/Inventory/Thing/ThingDetails/ThingDetails";

function App() {
    return (
        <div className="App">
            <Router>
                <Link to={'/'}>Home page</Link>
                <br/>
                <Link to={'/Characters'}>Characters</Link>
                <br/>
                <Link to={'/Inventory'}>Inventory</Link>
                <hr/>

                <Switch>
                    <Route exact={true} path={'/'} component={Home}/>
                    <Route exact={true} path={'/Characters'} component={Characters}/>
                    <Route path={'/Characters/:id'} component={CharacterDetails}/>
                    <Route exact={true} path={'/Inventory'} component={Inventory}/>
                    {/*<Route exact={true} path={'/Inventory/:id'} component={ThingDetails}/>*/}
                </Switch>

                <hr/>
            </Router>
        </div>
    );
}

export default App;
