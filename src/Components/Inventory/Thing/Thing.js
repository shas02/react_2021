import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ThingDetails from "./ThingDetails/ThingDetails";

export default function Thing(props) {

    let {item, url} = props;


    return (
        <div>
            {item.id}. {item.title}

            <Router>
                <div>
                    <Link to={url + '/' + item.id}>Show details</Link>
                </div>

                <br/>

                <Switch>
                    <Route exact={true} path={'/Inventory/:id'} component={ThingDetails}/>
                </Switch>
            </Router>

            <br/>
        </div>
    );
}