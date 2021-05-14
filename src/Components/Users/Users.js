import {useEffect, useState} from "react";
import User from "./User/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "./User/UserDetails/UserDetails";

export default function Users(props) {

    let {match: {url}} = props;

    let [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            });
    }, []);

    return (


            <div>
                {
                    users.map(value => <User key={value.id} item={value} url={url}/>)
                }

                {/*<Switch>*/}
                {/*    <Route path={'/Users/:id'} component={UserDetails}/>*/}
                {/*</Switch>*/}
            </div>

    )
}