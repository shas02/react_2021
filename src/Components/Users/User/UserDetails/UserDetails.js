import {useEffect, useState} from "react";

export default function UserDetails(props) {

        let {match: {params:{id}}} = props;

        let [user, setUser] = useState(null);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(value => value.json())
                .then(value => {
                    setUser(value)
                });
        }, [user]);

        return (
        <div>
            {
                user && <h2>{user.id}. {user.name}. email: {user.email}</h2>
            }
        </div>
    );
}